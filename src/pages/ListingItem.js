import React from 'react'
import ListingCard from "../pages/ListingCard"
import "./ListingItem.css";


class ListingItem extends React.Component {

  
    render() {
        return (
            <div >
                {this.props.artists.map(artist => <ListingCard artist ={artist} key ={artist.id} /> )}
            </div>
        )
    }
}



export default ListingItem