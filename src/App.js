import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Components/Home';
// import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

export default class App extends Component {
  apiKey="fead4ddcdbf04f7aaef9032b9ae6030d";
  // c = "John";
  render() {
    return (
      <div id="bg">
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home key="Home" apiKey={this.apiKey}/>} />
        <Route exact path="/general" element={<News key="general" apiKey={this.apiKey} pageSize={6} country="in" category="general"/>} />
        <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} pageSize={6} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pageSize={6} country="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} pageSize={6} country="in" category="health"/>} />
        <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} pageSize={6} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} pageSize={6} country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} pageSize={6} country="in" category="technology"/>} />
        <Route  path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
