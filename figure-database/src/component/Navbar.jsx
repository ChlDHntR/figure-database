import { Fragment, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { InputBar } from './SearchBar.jsx'
import { DropDown } from './DropDown.jsx'
import { PopUp } from './PopUp.jsx'
import { Link } from 'react-router-dom'

function NavBar({ data }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState([])
  const [showdrop, setShowdrop] = useState(true)
  const [popUp, setPopUp] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

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

  return (
    <Fragment>
      <div className='nav'>
        <div className='nav_link'>
          <Link to='/import'>IMPORT</Link>
        </div>
        <div className='searchBar_wrapper'>
          <InputBar
            value={searchValue}
            placeholder={'キーワード検索'}
            className={'searchBar'}
            handleSearch={handleSearch}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          ></InputBar>
          {showdrop && isFocus && <DropDown data={searchList} handleClick={onClick}></DropDown>}
        </div>
      </div>
      {popUp && <PopUp props={currentPopUp.current} handleClose={() => setPopUp(false)} />}
    </Fragment>
  )
}

export default NavBar
