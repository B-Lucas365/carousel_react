import logo from './assets/super-shoes.png'
import './App.scss'
import { useEffect, useState, useRef } from 'react'
import right from './assets/right.svg'
import left from './assets/left.svg'


export const App = () => {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/src/assets/shoes/shoes.json')
    .then(response => response.json())
    .then(setData)
  }, [])

  const handleLeftCick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth

  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth

  }

  if(!data || !data.length) return null

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Supershoes logo" />
      </div>

      <div className="carousel" ref={carousel}>
      
        {data.map((item, index) => {

          const {id, name, price, oldPrice, image} = item;
          return(
            <div className='item' key={index}>
              <div className='image'>
                <img src={image}  alt={name} />
              </div>
              <div className='info'>
                <span className='name'>{name}</span>
                <span className='oldPrice'>{oldPrice}</span>
                <span className='price'>{price}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='buttons'>
        <button onClick={handleLeftCick}><img src={left} alt="" /></button>
        <button onClick={handleRightClick}><img src={right} alt="" /></button>
      </div>   
    </div>
  )
}