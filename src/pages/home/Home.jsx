import React from 'react'
import "./Home.scss"

const Home = () => {
  return (
    <main class="home">
    <h2 className='home__title'>Hi! My Name Is</h2>
    <h1 class="home__name">
      Mauro <span class="home__name--last">Icardi</span>
    </h1>
    <h2 className='home__text'>Galatasaray Footballer</h2>
  </main>
  )
}

export default Home