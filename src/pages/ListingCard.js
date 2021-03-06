import React from "react";
import "./ListingItem.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
// import SimpleCard from "./simplecard";

const ListingCard = (props) => {
  console.log(props);

  const followHandler = () => {
    axios
      .post(
        "http://localhost:3001/follows",
        {
          artist_id: props.artist.id,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data.artist_id);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };
  return (
    <Grid item xs={9} sm={3}>
      <Paper className={props.paper}>
        {/* <Paper className={this.props.paper}> */}
        <div className="img-grid" key={props.artist.id}>
          {/* <img src= {props.artist.image}alt="oh no!" /> */}
          {/* <div>{props.artist.bio}</div> */}
          <div onclick={() => console.log("clicked")}>{props.artist.name} </div>
          <button onClick={followHandler}>FOLLOW</button>
        </div>
        {/* </Paper> */}
      </Paper>
    </Grid>
  );
};

export default ListingCard;
