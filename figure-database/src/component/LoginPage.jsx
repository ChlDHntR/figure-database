import { useState, useContext } from 'react'
import { InputBar } from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { UserAuthContext } from '../context/UserAuthProvider'
import server from '../axios/server'

export default function LoginPage({ setPopUp }) {
  const [userName, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  const { setCurrUser } = useContext(UserAuthContext)
  const [isLogingin, setIsLogingin] = useState(false)

  const handleLogin = () => {
    server.get('users').then((response) => {
      let userData = response.data
      let foundUser = userData.find((element) => element.username === userName)
      if (!foundUser || !(foundUser.pwd === pwd)) {
        alert('username or password is wrong')
        return
      }
      setCurrUser(foundUser.username)
      setIsLogingin(true)
      setTimeout(() => {
        setPopUp(false)
      }, 1000)
    })
  }

  return (
    <div className='loginBox'>
      <div className='loginBoxSmall'>
        {isLogingin ? (
          <div className='text'>LOGING IN.....</div>
        ) : (
          <>
            <div className='text'>LOGIN</div>
            <div className='input'>
              <fieldset>
                <legend>USERNAME</legend>
                <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
              </fieldset>
            </div>
            <div className='input'>
              <fieldset>
                <legend>PASSWORD</legend>
                <input type='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
              </fieldset>
            </div>
            <button onClick={handleLogin}>LOGIN</button>
            <div className='register_button'>
              <button>REGISTER</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
