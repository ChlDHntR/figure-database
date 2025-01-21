import React, { useContext, useEffect } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider'

function UserList() {
  const { currUser }: any = useContext(UserAuthContext)

  useEffect(() => {})

  return (
    <div className='user_list_wrapper'>
      <div className='title'>LIST</div>
      <div className='list'></div>
    </div>
  )
}
