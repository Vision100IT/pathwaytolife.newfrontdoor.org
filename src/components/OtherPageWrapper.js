/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';


import OurPeople from './pages/OurPeople';
import About from './pages/About';
import Events from './pages/Events';


import ContactUs from './pages/ContactUs';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/node/:nid" component={SermonPage} />
          <Route exact path="/node/:nid/:title" component={SermonPage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Events} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
