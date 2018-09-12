import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/bottom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div> 内容页</div>
      <Footer />
      </div>
    );
  }
}

export default App;
