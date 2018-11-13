import React, { Component } from "react";
import More from './More';
import Home from './Home';
import Testimonials from './Testimonials';
import Social from './Social';
import Footer from './Footer';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <More />
        <Testimonials />
        <Social />
        <Footer />
      </React.Fragment>
    );
  }
}
