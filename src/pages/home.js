
import React, {useEffect, useState} from "react";
import Banner from "../components/banner"
import Cases from "../components/cases"
import IntroOverlay from "../components/introoverlay";
import gsap from 'gsap'

const tl = gsap.timeline()

const homeAnimation = (completeAnimation) => {

       
  tl.from('.line span',1.8, {
    opacity:0,
    y:100,
    ease: 'power4.out',
    delay: 1,
    scale: 8,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }).to('.overlay-top', 1.6, {
    height: 0,
    ease: 'expo.inOut',
    // scale: 3,
    stagger: 0.4
  }).to('.overlay-bottom', 1.6, {
    width: 0,
    ease: 'expo.inOut',
    // scale: 3,
    delay: -0.8,
    stagger: {
      amount: 0.4 
    }
  }).to('.intro-overlay',0, {css: {display: "none"}})
  .from ('.case-image img', 1.6, {
      scale: 2,
      ease: 'expo.input',
      delay: -2,
      stagger: {
        amount: 0.4 
      },
      onComplete: completeAnimation
  })


}



 const Home = () => {

 const [animationComplete, setAnimationComplete] = useState(false)

 const completeAnimation = () => {
  setAnimationComplete(true)
    
 }




    useEffect(() => {
        //on load timeline
    
      homeAnimation(completeAnimation)

        }, [])


    return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ''}

        <IntroOverlay />
        <Banner />
        <Cases />
    </>
    )
}


export default Home