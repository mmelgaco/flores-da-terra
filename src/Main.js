import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import More from './More';
import Home from './Home';
import Testimonials from './Testimonials';
import Social from './Social';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <More />
        <Testimonials />
        <Social />
      </React.Fragment>
    );
  }
}
