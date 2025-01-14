import { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { PageIdContext } from './FigurePage'
import server from '../axios/server'
import { UserAuthContext } from '../context/UserAuthProvider'

library.add(faComments)

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Au', 'Sep', 'Oct', 'Nov', 'Dec']

function Comment({ parent, handleReply, commentData, setCommentData, input, setInput, user }) {
  const pageId = useContext(PageIdContext)
  const [repInput, setRepInput] = useState('')
  const [isReplying, setIsReplying] = useState(false)

  const handleReplyButton = () => {
    let date = new Date()
    let commentDate = `${months[date.getMonth()]} ${String(date.getDay()).padStart(
      2,
      '0'
    )}, ${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
      2,
      '0'
    )}`
    let node = { id: Date.now(), poster: user, time: commentDate, content: repInput, children: [] }
    let newData = { ...commentData }
    handleReply(newData, node, parent.id)
    setRepInput('')
    setIsReplying(false)
    server.put(`comments/${pageId}`, newData).then((res) => {
      setCommentData(newData)
    })
  }

  return (
    <div className='comment'>
      <div className='comment_wrapper'>
        <div className='poster'>
          <span className='username'>{parent.poster}</span>
          <span className='date'>{parent.time}</span>
        </div>
        <p className='content'>{parent.content}</p>
        <button
          onClick={() => {
            setIsReplying((prev) => !prev)
          }}
        >
          返事
        </button>
      </div>
      {isReplying ? (
        <div className='reply_input'>
          <textarea
            disabled={user === null ? true : false}
            placeholder={user === null ? 'ログインしてください' : 'コメント。。。'}
            type='text'
            value={repInput}
            onChange={(e) => setRepInput(e.target.value)}
          />
          <button disabled={user === null ? true : false} onClick={handleReplyButton}>
            送信
          </button>
        </div>
      ) : (
        <></>
      )}
      {parent.children[0] === undefined ? (
        <></>
      ) : (
        <div className='children_wrapper'>
          <div className='padding'></div>
          <div className='children'>
            {parent.children.map((element) => (
              <Comment
                key={element.id}
                parent={element}
                commentData={commentData}
                setCommentData={setCommentData}
                handleReply={handleReply}
                input={input}
                setInput={setInput}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CommentSect({}) {
  //console.log(commentData)
  const [comInput, setComInput] = useState('')
  const pageId = useContext(PageIdContext)
  const [commentData, setCommentData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { currUser } = useContext(UserAuthContext)
  const addNote = (tree, node, id) => {
    if (tree.id == id) {
      tree.children.splice(0, 0, node)
      return
    }
    tree.children.map((element) => {
      addNote(element, node, id)
    })
  }
  useEffect(() => {
    server.get(`comments/${pageId}`).then((res) => {
      setIsLoading(false)
      setCommentData(res.data)
    })
  }, [])
  if (isLoading) return <div className='comment_section box'>IS LOADING</div>

  const handlePostComment = () => {
    let date = new Date()
    let commentDate = `${months[date.getMonth()]} ${String(date.getDay()).padStart(
      2,
      '0'
    )}, ${date.getFullYear()}, ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
      2,
      '0'
    )}`
    let node = { id: Date.now(), poster: currUser, time: commentDate, content: comInput, children: [] }

    let newData = [...commentData.children]
    newData.splice(0, 0, node)
    setComInput('')

    server.put(`comments/${pageId}`, { ...commentData, children: newData }).then((res) => {
      setCommentData({ ...commentData, children: newData })
    })
  }

  return (
    <div className='comment_section box'>
      <div className='label'>
        <FontAwesomeIcon icon='fa-solid fa-comments' />
        <p>コメント</p>
      </div>
      <div className='make_comment'>
        <textarea
          disabled={currUser === null ? true : false}
          placeholder={currUser === null ? 'ログインしてください' : 'コメント。。。'}
          type='text'
          value={comInput}
          onChange={(e) => setComInput(e.target.value)}
        />
        <button disabled={currUser === null ? true : false} onClick={handlePostComment}>
          送信
        </button>
      </div>
      {!commentData.children[0] ? (
        <div
          style={{
            width: '97%',
            margin: '0 auto',
            textAlign: 'center',
            padding: '30px 0',
            opacity: '0.3',
            paddingBottom: '20px',
          }}
        >
          {' '}
          <h1>空白</h1>{' '}
        </div>
      ) : (
        <div>
          {commentData.children.map((element) => (
            <div key={element.id}>
              <Comment
                parent={element}
                commentData={commentData}
                setCommentData={setCommentData}
                input={comInput}
                handleReply={addNote}
                setInput={setComInput}
                user={currUser}
              />
              <div className='space'></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
