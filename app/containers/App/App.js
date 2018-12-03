/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import {
  About,
  ArrowNav,
  Contact,
  Careers,
  FrequentlyAsked,
  Front,
  Legal,
  NavBar,
  NotFound,
  ProjectDetails,
  Work,
  Services,
} from 'containers'; // eslint-disable-line import/extensions

import { FooterBar } from 'components';
import config from '../../config';
import './style.scss';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Helmet {...config.app.head} />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Front} />
          { /* Routes */ }
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/faq" component={FrequentlyAsked} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/work" component={Work} />
          <Route path="/work/:projectName" component={ProjectDetails} />
          <Route exact path="/services" component={Services} />
          { /* Catch all route */ }
          <Route path="*" component={NotFound} status={404} />
        </Switch>
        <FooterBar />
      </div>
    );
  }
}

export default App;
