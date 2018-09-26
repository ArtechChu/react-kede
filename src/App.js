import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header';
import Footer from './components/bottom';
import Feature from './components/Feature';
import Duwu from './components/Duwu';
import User from './components/User';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Search from './components/Search';
class App extends Component {

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <div className="App">
            <div>
              {this.props.isShowHeader ? <Header /> : null}
              <Fragment>
                <Route path="/:seocode([a-zA-z]*\d+).html" exact component={Detail} />
                <Route path="/" exact component={Feature} />
                <Route path="/Duwu" exact component={Duwu} />
                <Route path="/User" exact component={User} />
                <Route path="/Cart" exact component={Cart} />
                <Route path="/Search" exact component={Search} />
              </Fragment>

              {this.props.isShowFooter ? <Footer /> : null}

            </div>

          </div>
        </BrowserRouter>
      </Fragment>
    );
  }

  componentDidMount() {
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isShowHeader: state.showHeader,
    isShowFooter: state.showFooter,
  }
}

export default connect(mapStateToProps, null)(App);
