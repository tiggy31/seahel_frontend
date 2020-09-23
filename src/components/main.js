import React, {useEffect,useState,useHistory} from "react";
import "../styles/App.scss";
import Header from "../components/header"
import Navigation from "../components/navigation"
import gsap from 'gsap'
import {Route} from 'react-router-dom'
import axios from "axios";
//pages
import Home from "../pages/home"
 import Artists from '../pages/artists'
 import Dashboard from '../pages/Dashboard'
 import Exhibition from '../pages/Exhibition'
 import VirtualTour from '../pages/VirtualTour'
 import Login from '../pages/Login'
 import Signup from '../pages/Signup'
 import About from '../pages/about'

 

//routes

const routes = [

  {path: '/', name: 'Home', Component: Home},
  {path: '/artists', name: 'Artists', Component: Artists},
  {path: '/dashboard', name: 'Dashboard', Component: Dashboard},
  {path: '/exhibition', name: 'Exhibition', Component: Exhibition},
  {path: '/virtual-tour', name: 'Virtual Tour', Component: VirtualTour},
  {path: '/about', name: 'About', Component: About},
  {path: '/signup', name: 'Signup', Component: Signup},
  {path: '/login', name: 'Login', Component: Login}
  
]

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
//sessions

const Main =(props) => {
 
    console.log(props)
//animation
  gsap.to("body", 0, { css: { visibility: "visible" } }); //prevents flashining when loading
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    //grabbing inner height of window
    let vh= dimensions.height * .01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
         
      // const HandleResize = () => {

       
       
      // }
     //wrap debounce around handle resize

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

//session





  
  
   return (
      <>
     <Header dimensions={dimensions} />
      <div className="App"> 
        {routes.map(({path, Component} ) => (

          <Route key={path} exact path={path} >
             <Component     />
          
            
           </Route>
         

      ))}

     </div>
     
     <Navigation />
    </>
     );
}

export default Main;

