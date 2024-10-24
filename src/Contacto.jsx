import React from 'react'

const Contacto = () => {
  return (
    <div className='contact-container'>
      <h2 className='contact-item'>¿Queres saber más de nosotros?</h2>
      <h2 className='contact-item'>¿Sos revendedor y queres conocer precios mayoristas?</h2>
      <p className='contact-item'>
        No dudes en contactarnos:
        <span className='contact-detail'>
          <code>Email: punkapi@beers.com</code>
          <code>Teléfono: 11324568</code>
        </span>
      </p>
    </div>
  );
};

export default Contacto