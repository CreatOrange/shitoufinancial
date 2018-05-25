import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router ,Switch, Redirect,Route  } from 'react-router-dom'
import Footer from './components/footer/footer.js'
import Indexmain from './components/indexmain/indexmain.js'
import Toubiaomain from './components/toubiaomain/toubiaomain.js'

class App extends Component {
  render() {
    return (
        <Router>
                  <div className="App">



                    <Switch>
                        <Route path="/index" component={Indexmain} />
                        <Route path="/toubiao" component={Toubiaomain} />
                        <Redirect from="/*"  to="/index"/>
                    </Switch>
                    <Footer></Footer>
                  </div>
          </Router>
    );
  }
}

export default App;
