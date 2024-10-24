import React from 'react'
import {routes} from "../utils/routes"
import { Link } from 'react-router-dom';
const Card = ({data, showButton}) => {
  const {id, name, price, image} = data;
  return (
  
    < >
        
      { showButton ? (
        <div className='card'>
        <h3>{name}</h3>
        <p>{price	}</p>
        <img src={image} alt="beer-detail" className='card-image' />
        <Link to={routes.beer+`/${id}`}> <button>Ver detalle</button> </Link> 
        </div>
      )
      : (
        <>
         <h3>{name}</h3>
        <p>{price	}</p>
        <img src={image} alt="beer-detail" className='card-image' />
        <button><Link to={routes.home}>Go to Home</Link></button> {/* Botón para redirigir al Home */}
        </>
      )}
      
    </>
  )
}

export default Card