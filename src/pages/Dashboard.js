import React, { useContext } from "react";
import styles from "./dashboard.module.css";
import { UserContext } from "../UserContext";
import Login from "../pages/Login";
import axios from "axios";

class Dashboard extends React.Component {
  //fetch artists that the user follows along with paintings(get)
  //makea route that takes to user artists
  //

  renderArtists(info) {
    return <div>info</div>;
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/users/${this.props.user.id}/artists`)

      .then((response) => {
        response.data.artists.map((info) => {
          return this.renderArtists(info.name);
        });
      })
      .catch((error) => {
        console.log("login error", error);
      });
  }

  render() {
    return <div>{this.renderArtists}</div>;
  }
}

export default Dashboard;
