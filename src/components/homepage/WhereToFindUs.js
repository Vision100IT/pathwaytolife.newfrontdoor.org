/* eslint-disable */
import React, { Component } from 'react';
import GoogleMap from '../models/GoogleMap';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className="col-md-4 col-xs-12">
          <div className="region region-content-2-2">
            <div className="block block-block">
              <h2 >Where to Find Us</h2>
              <div className="content">
                <GoogleMap id="map_canvas" height="270px" /><br/>
                <div><a href="https://goo.gl/maps/phw9emfUYm52">Pathway To Life</a></div>
                <div>9:30am Sunday</div>
                <div>20-22 Nicholls St</div>
                <div>Devenport, Tasmania</div>  </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhereToFindUs;
