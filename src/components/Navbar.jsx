import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from "../utils/routes"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <button onClick={() => navigate(-1)}>Go back</button>
        {/* Aqui deberan agregar los Links */}
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contacto}><h4>Contacto</h4></Link>
    </nav>
  )
}

export default Navbar