import { Fragment, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBar } from './component/SearchBar.jsx'
import { DropDown } from './component/DropDown.jsx'

function App({data}) {
  const [ searchValue, setSearchValue] = useState("")
  const [ searchList, setSearchList] = useState([])
  const [ showdrop, setShowdrop ] = useState(true)

  const fakeData = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
  const onClick = (message) => {
    alert(message)
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
    let newList = fakeData.filter(element => element.toLowerCase().includes(e.target.value.toLowerCase()))
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
        <div className="logo">
          <img src="" alt="" />
        </div>
        <InputBar placeholder={"Search..."} className={"searchBar"}  handleSearch={handleSearch}></InputBar>
        {showdrop && <DropDown data={searchList} handleClick={onClick}></DropDown>}
      </div>
    </Fragment>
  )
}

export default App
