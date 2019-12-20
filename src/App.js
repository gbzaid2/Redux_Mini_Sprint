import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>
          Current student is : <b>{this.props.current.name}</b>
        </span>
        <br />
        <span>
          {this.props.current.name}'s favorite song is :
          <b>{this.props.current.favorite}</b>
        </span>
        <br />
        <ul>
          {this.props.students.list.map(student => {
            return (
              <li>
                <span>Student Name: {student.name}</span>
                <br />
                <span>
                  {student.name}'s favorite song is: {student.favorite}
                </span>
              </li>
            );
          })}
        </ul>
        <br />
        <h2>PlayList: </h2>
        <ul>
          {this.props.playList.map(song => {
            return (
              <li>
                <span>Artist Name: {song.artist}</span>
                <br />
                <span>Song Title: {song.songTitle}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function(storeState) {
  return storeState;
};

//The connect function makes the state returned from
//the mapStateToProps function available to the App component as props
export default connect(mapStateToProps)(App);
