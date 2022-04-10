import React from 'react'
import {Navbar, Feature , Article , Brand , Cta   } from './components/index'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers/index'
import './App.css'



const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <Cta/>
          <Blog/>
          <Footer/>
      </div>
    </div>
  )
}

export default App
