import React from 'react';
import './styles/App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends React.Component{
  render(){
    return (
      <>
      <Router>
        <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/education/" component={Education}/>
          <Route path="/experience/" component={Experience}/>
          <Route path="/about-me/" component={AboutMe}/>
          <Route path="/contact/" component={Contact}/>
          <Route path="/projects/" component={Projects}/>
        </Switch>
        <Footer/>
        </div>
      </Router>



      </>
    );
  }
}

export default App;
