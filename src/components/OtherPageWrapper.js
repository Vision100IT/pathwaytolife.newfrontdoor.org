/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';


import OurPeople from './pages/OurPeople';
import About from './pages/About';
import Events from './pages/Events';
import PathwayContacts from './pages/PathwayContacts';
import MorningService from './pages/MorningService';
import MinistryPrograms from './pages/MinistryPrograms';


import ContactUs from './pages/ContactUs';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />

          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/About" component={About} />
          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Events} />
          <Route exact path="/PathwayContacts" component={PathwayContacts} />
          <Route exact path="/SundayMorning" component={MorningService} />
          <Route exact path="/MinistryPrograms" component={MinistryPrograms} />

          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;
