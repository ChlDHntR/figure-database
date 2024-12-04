import { Fragment, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBar } from './component/SearchBar.jsx'
import { DropDown } from './component/DropDown.jsx'
import { PopUp } from './component/TestComponents.jsx'

function App({data}) {
  const [ searchValue, setSearchValue] = useState("")
  const [ searchList, setSearchList] = useState([])
  const [ showdrop, setShowdrop ] = useState(true)
  const [ popUp, setPopUp ] = useState(false)
  const currentPopUp = useRef(null)


  const onClick = (name) => {
    currentPopUp.current = data.find(element => element.name.common === name)
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
    let newList = data.filter(element => element.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
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
        <div className="searchBar_wrapper">
          <InputBar value={searchValue} placeholder={"Search..."} className={"searchBar"}  handleSearch={handleSearch}></InputBar>
          {showdrop && <DropDown data={searchList} handleClick={onClick}></DropDown>}
        </div>
      </div>
      {popUp && <PopUp props={currentPopUp.current} handleClose={() => setPopUp(false)} />}
    </Fragment>
  )
}

export default App
