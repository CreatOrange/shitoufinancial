import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/footer.js'
import Indexmain from './components/indexmain/indexmain.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Indexmain></Indexmain>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
