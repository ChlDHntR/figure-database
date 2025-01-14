import { Fragment, useLayoutEffect, useRef, useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CommentSect from './CommentSect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export const PageIdContext = createContext(null)

export default function FigurePage({ data }) {
  const id = useParams().id
  const testData = data.find((element) => element.id == id)
  const body = useRef(null)
  const side = useRef(null)

  // useLayoutEffect(() => {
  //   let left = body.current.getBoundingClientRect().left
  //   console.log(left)
  //   side.current.style.right = `${left}px`
  // })
  return (
    <div className='figure_page' ref={body}>
      <div className='wide'>
        <div className='figureData_wrapper box'>
          <div className='figure_name'>
            <p>{testData.name}</p>
          </div>
          <div className='figureData'>
            <div className='figure_image'>
              <img src={testData.image} alt={`${testData.name} image`} />
            </div>
            <div className='figure_info'>
              <table>
                <tbody>
                  <tr>
                    <th>ブランド名</th>
                  </tr>
                  <tr>
                    <td>{testData.brand}</td>
                  </tr>
                  <tr>
                    <th>発売日</th>
                  </tr>
                  <tr>
                    <td>{testData.date}</td>
                  </tr>
                  <tr>
                    <th>原作名</th>
                  </tr>
                  <tr>
                    <td>{testData.series}</td>
                  </tr>
                  <tr>
                    <th>参考価格</th>
                  </tr>
                  <tr>
                    <td>{testData.price}円</td>
                  </tr>
                  <tr>
                    <th>素材</th>
                  </tr>
                  <tr>
                    <td>PVC/ABS</td>
                  </tr>
                  <tr>
                    <th>解説</th>
                  </tr>
                  <tr>
                    <td>{testData.about}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PageIdContext.Provider value={id}>
          <CommentSect />
        </PageIdContext.Provider>
      </div>
      <div className='side box' ref={side}></div>
    </div>
  )
}
