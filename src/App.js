import React, { Component } from 'react';
import'./App.css';
import { BrowserRouter , Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/index';
import Contact from './Components/Contact/index';
import Index from './Components/Index/index';
class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}
 
export default App;