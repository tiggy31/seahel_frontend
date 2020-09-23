import React from 'react'
// import { render } from 'react-dom'
import ListingItem from "../pages/ListingItem"


class ListingContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            artists: []
        }
    }
   

    componentDidMount() {
       fetch("http://localhost:3001/artists")
         .then(r => r.json())
         .then(artistObj => {
             this.setState({
                 artists: artistObj
             })
         })
    }

render() {

    if(this.state.artists.length === 0) {
        return <h1>Loading </h1>
    }
    // console.log("hello", this.state)
   return(
    <React.Fragment>
        <ListingItem  artists ={this.state.artists}  />
    </React.Fragment>
   )
  }
}


 





export default ListingContainer