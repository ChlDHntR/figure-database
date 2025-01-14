import { Fragment, useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputBar } from './SearchBar.jsx'
import { DropDown } from './DropDown.jsx'
import { PopUp } from './PopUp.jsx'
import { Link } from 'react-router-dom'
import TopRLoginBtn from './TopRLoginBtn.jsx'
import { UserAuthContext } from '../context/UserAuthProvider.jsx'
import LoginPage from './LoginPage.jsx'

function NavBar({ data }) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState([])
  const [showdrop, setShowdrop] = useState(true)
  const [popUp, setPopUp] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const { currUser } = useContext(UserAuthContext)

  const currentPopUp = useRef(null)

  const handleSearch = useCallback(
    (e) => {
      setSearchValue(e.target.value)
      if (e.target.value === '') {
        setShowdrop(false)
        return
      }
      let newList = data.filter((element) => element.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchList([...newList])
      if (newList.length >= 8) {
        setShowdrop(true)
      } else {
        setShowdrop(true)
      }
    },
    [data]
  )

  const onClick = (name) => {
    currentPopUp.current = data.find((element) => element.name === name)
    console.log(currentPopUp.current)
    setPopUp(true)
  }

  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleBlur = () => {
    setIsFocus(false)
  }
  const handleLoginBtn = () => {
    setPopUp(true)
  }

  return (
    <Fragment>
      {popUp && (
        <PopUp
          props={currentPopUp.current}
          handleClose={() => setPopUp(false)}
          children={<LoginPage setPopUp={setPopUp} />}
        />
      )}
      <div className='nav'>
        <h1 onClick={() => navigate('/')}>FigureDB</h1>
        <div className='multi'>
          <div className='searchBar_wrapper'>
            <InputBar
              value={searchValue}
              placeholder={'キーワード検索'}
              className={'searchBar'}
              handleSearch={handleSearch}
              handleFocus={handleFocus}
              //handleBlur={handleBlur}
            ></InputBar>
            {showdrop && isFocus && (
              <DropDown
                data={searchList}
                handleClick={() => {
                  handleBlur()
                  setSearchValue('')
                  setSearchList([])
                }}
              ></DropDown>
            )}
          </div>
          <TopRLoginBtn user={currUser} onLogin={handleLoginBtn} />
          <div className='nav_link'>
            <Link to='/import'>IMPORT</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NavBar
