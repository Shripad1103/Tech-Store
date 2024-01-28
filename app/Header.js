"use client"
import React from 'react'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Header = () => {

  const comp = useRef(null)


  useLayoutEffect(()=>{
    let ctx =gsap.context(()=>{
      const t1=gsap.timeline()


      t1.from("#logo,#login,#product1",{
        y:-100,
        opacity:0,
        stagger:0.3
      })

      // t1.from("#login",{
      //   y:-100,
      //   opacity:0,
        
      //   stagger:0.3
      // })

      t1.from("#header-h1,#header-h6",{
        y:100,
        opacity:0,
       
        stagger:0.3
      })
      
      // t1.from("#header-h6",{
      //   y:100,
      //   opacity:0,
        
      //   stagger:0.3
      // })

      

     


    },comp)


    return()=> ctx.revert()
  },[])

  return (
    <>
    <div id='ever' className=' bg-black' ref={comp}>
          <div id='nav' className=''>
              <a id='logo' href='#' className=' text-white'><span className=' text-amber-500 text-3xl'>tr</span>end</a>
            <div id='product' className=' flex items-center justify-between'> 
              <a id='product1' href='#' className=' text-amber-500'>blog</a>  
              <a id='login' className='px-3 py-1 bg-amber-500 font-100  text-white font-sm' href='#'>login</a>
            </div>  
          </div>
    
            <div id='haeder' className=' bg-black text-white'>
                    <h1 id='header-h1' className=' text-2xl font-black px-4 py-2 we'>trend Store</h1>
                    <h6 id='header-h6' className=' text-amber-500'>Communicate your tommorow</h6>
            </div>
    </div>



    
     
    </>
  )
}

export default Header