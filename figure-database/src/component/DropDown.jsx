import { useNavigate } from 'react-router-dom'

function DropDown({ data, handleClick }) {
  const navigate = useNavigate()
  return (
    <div className='DropDown'>
      <ul>
        {data.map((element, index) => (
          <li
            onClick={(e) => {
              e.preventDefault()
              console.log(element.id)
              navigate(`/figure/${element.id}`)
              handleClick()
            }}
            className='search_item'
            key={element.name}
          >
            <div className='DropDown_item'>
              <img src={element.image} alt='' />
              <p>{element.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { DropDown }
