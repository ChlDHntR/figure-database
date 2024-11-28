import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBar } from './component/SearchBar.jsx'
import { DropDown } from './component/DropDown.jsx'

function App({data}) {
  const [ searchValue, setSearchValue] = useState("")
  const [ searchList, setSearchList] = useState([])

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    if (e.target.value === "") {
      setDefaultText("Which country are you looking for?")
      setShowCountries(false)
      return
  }
  let newList = data.filter(element => element.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  setSearchList([...newList])
  if (newList.length === 1 ) {
      setShowInfo(true)
  } else if (newList.length >= 10) {
      setShowCountries(false)
      setShowInfo(false)
      setDefaultText("You need to be more specific")
  }
   else {
      setShowCountries(true)
      setShowInfo(false)
      setDefaultText("")
  }
    
  }

  const fakeData = ['adad','haefihie','jahufho']


  return (
    <Fragment>
      <div className='nav'>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <InputBar placeholder={"Search..."} className={"searchBar"}  handleSearch={handleSearch}></InputBar>
        <DropDown data={fakeData}></DropDown>
      </div>
    </Fragment>
  )
}

export default App
