import React from 'react'
import Header from '../Header'
import Moving from '../Moving'
import All from '../All'
import Extra from '../Extra'
import Footer from '../Footer'

const Allelem = () => {
  return (
    <div>
        <Header/>
        <Moving/>
        <div id='deal'><h1>Grasp the Best Deals on</h1></div>
        <All/>
        <Extra/>
        <Footer/>
    </div>
  )
}

export default Allelem