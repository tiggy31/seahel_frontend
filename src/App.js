import React from "react";
import Main from "./components/main"
import Dashboard from './pages/Dashboard'
import Home from './pages/home'
// import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {

  constructor () {
    super()
    this.state = {
      user: {}
    }

  }

  
    
  

  render () {

     return(
      <div >
        
         <Main />
    

      </div>
     

     )
  }
  
}


export default App