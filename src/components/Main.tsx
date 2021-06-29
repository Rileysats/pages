import React from 'react';
import '../styles/Main.css';
import me from '../me.jpeg';
class Main extends React.Component{
  render(){
    return (
      <div className="main">
        <h1>Riley Satanek</h1>
        <img src={me} width="225" height="337" alt="Riley Satanek"/>
      </div>
    );
  }
}

export default Main;
