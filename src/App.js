import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/bottom';
import Feature from './components/Feature';
import Duwu from './components/Duwu';
import User from './components/User';
import Cart from './components/Cart';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Fragment>
            <Route path="/" exact component={Feature} />
            <Route path="/Duwu" exact component={Duwu} />
            <Route path="/User" exact component={User} />
            <Route path="/Cart" exact component={Cart} />
          </Fragment>



          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
