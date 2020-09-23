import gsap from "gsap";
import Header from "./components/header"
import React, {useEffect,useState} from "react";



function debounce(fn, ms) {

    let timer;
    return () => {
      clearTimeout(timer)
      timer= setTimeout(() => {
      
      timer =null
     fn.apply(this,arguments)
  
  
      }, ms)
    }
  }
const menuResizing =() => {


     
  gsap.to("body", 0, { css: { visibility: "visible" } }); //prevents flashining when loading
  const [dimensions, setDimensions] = this.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  this.useEffect(() => {
    //grabbing inner height of window
    let vh= dimensions.height * .01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
         
     
    //  wrap debounce around handle resize

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    },1000)


   window.addEventListener('resize', debouncedHandleResize)
  
    return () => {  

      window.removeEventListener('resize',debouncedHandleResize)

    }
  })




    return(
      
        <Header dimensions={this.dimensions} />
       

    )

}

export default menuResizing

