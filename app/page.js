"use client"
import React from 'react'
import Header from './Header'
import Extra from './Extra'
import All from './All'
import Footer from './Footer'
import Moving from './Moving'


const Allelem = () => {
  return (
    <>
    <Header />
    <Moving />
    <div id='deal'>
      <h1>Grasp the Best Deals on</h1>
    </div>
      <All />
    <Extra />
    <Footer/>
    </>
  )
}

export default Allelem