import React from 'react'

export const HomeScreen = () => {
  return (
    
    <div className='Home'> 
        <section className='home__first-section'>
          <h3 className='home__titulo'><span className='text-grande'>Descubre</span> <br /> <span className='texto-normal'>los mejores bares!</span></h3>
          <img src='https://www.lowi.es/blog/wp-content/uploads/2017/07/desactivar-geolocalizacion.jpg' className='image-geo' />
        </section>
        <section className='home__second-section'>
          <h3 className='home__titulo'><span className='text-grande'>Cerca de ti</span> <br /><span className='texto-normal'>no busques más!</span> </h3>
        </section>
        <section className='home__third-section'>
          <h3 className='home__titulo'><span className='text-grande'>Los mejores</span> <br /><span className='texto-normal'>momentos con tu familia y amigos!</span></h3>
        </section>
    </div>
    
  )
}



