import logo from './assets/super-shoes.png'
import './App.scss'
import { useEffect, useState } from 'react'

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/src/assets/shoes/shoes.json')
    .then(response => response.json())
    .then(setData)
  }, [])

  if(!data || !data.length) return null

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Supershoes logo" />
      </div>

      <div className="carousel">

        {data.map((item, index) => {
          const {id, name, price, oldPrice, image} = item;

          <div className='item' key={index}>
            <div className='image'>
              <img src={image}  alt={name} />
            </div>
            <div className='info'>
              <span className='name'>{name}</span>
              <span className='oldPrice'>{oldPrice}</span>
              <span className='price'>{}</span>
            </div>
          </div>
        })}
      </div>   
    </div>
  )
}