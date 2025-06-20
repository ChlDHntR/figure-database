import { useState } from 'react'
import server from '../axios/server'

function Import({ data }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')
  const [about, setAbout] = useState('')

  const [figureList, setFigureList] = useState(data.map((element) => element.name))

  const handleClick = (e) => {
    e.preventDefault()
    if (figureList.find((element) => element === name)) {
      alert('This figure is already in the list')
      return
    }
    let newData = {
      name: name,
      image: image,
      brand: brand,
      date: date,
      price: price,
      about: about,
      id: figureList.length + 1,
    }
    setFigureList((prev) => [...prev, name])

    server.post('figures', newData).then((response) => alert('success'))
  }

  return (
    <div>
      <label>Name: </label>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <label>Image: </label>
      <input type='text' value={image} onChange={(e) => setImage(e.target.value)} />
      <br />
      {image !== '' && (
        <div>
          {' '}
          <img src={image} alt='' />
        </div>
      )}
      <label>Brand: </label>
      <input type='text' value={brand} onChange={(e) => setBrand(e.target.value)} />
      <br />
      <label>Release date: </label>
      <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Release price: </label>
      <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
      <br />
      <label>About: </label>
      <input type='text' value={about} onChange={(e) => setAbout(e.target.value)} />
      <br />
      <button onClick={handleClick}>Import</button>
      <ul>
        {figureList.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  )
}

export { Import }
