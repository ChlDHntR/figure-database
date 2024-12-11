import { Fragment, useState, useEffect, useRef } from 'react'
import { InputBar } from './SearchBar.jsx'
import { DropDown } from './DropDown.jsx'
import { PopUp } from './PopUp.jsx'
import { Link } from 'react-router-dom'

function NavBar({data}) {
  const [ searchValue, setSearchValue] = useState("")
  const [ searchList, setSearchList] = useState([])
  const [ showdrop, setShowdrop ] = useState(true)
  const [ popUp, setPopUp ] = useState(false)
  const currentPopUp = useRef(null)



  const onClick = (name) => {
    currentPopUp.current = data.find(element => element.name === name)
    console.log(currentPopUp.current)
    setPopUp(true)
  }




  useEffect(() => {
    let searchItem = document.querySelectorAll('.search_item')
    searchItem.forEach(element => element.addEventListener('click', () => {return}))

    return () => searchItem.forEach(element => element.removeEventListener('click', () => {return}))
  }, [searchList])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value === "") {
      setShowdrop(false)
      return
    }
    let newList = data.filter(element => element.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchList([...newList])
    if (newList.length >= 8) {
        setShowdrop(true)
    }
    else {
        setShowdrop(true)
    }
    
  }



  return (
    <Fragment>
      <div className='nav'>
        <div className="nav_link">
            <Link to='/import'>IMPORT</Link>
        </div>
        <div className="searchBar_wrapper">
          <InputBar value={searchValue} placeholder={"Search..."} className={"searchBar"}  handleSearch={handleSearch}></InputBar>
          {showdrop && <DropDown data={searchList} handleClick={onClick}></DropDown>}
        </div>
      </div>
      {popUp && <PopUp props={currentPopUp.current} handleClose={() => setPopUp(false)} />}
    </Fragment>
  )
}

export default NavBar
