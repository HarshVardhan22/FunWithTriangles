import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// eslint-disable-next-line
import styles from "./App.module.css"
import Angle from './Components/Angle/Angle';
import Area from './Components/Area/Area';
import HomePage from './Components/HomePage/HomePage';
import HypoCalculator from './Components/HypoCalculator/HypoCalculator';
import Quiz from './Components/Quiz/Quiz';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route path ="/quiz"><Quiz/></Route>
        <Route path="/hypo"><HypoCalculator/></Route>
        <Route path="/angles"><Angle/></Route>
        <Route path="/area"><Area/></Route>
        <Route path ="/" exact><HomePage/></Route>
      </Switch>
    <Footer/>
    </Router>

  )
}

export default App
