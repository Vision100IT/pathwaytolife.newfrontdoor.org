import React, { Component } from 'react';
import _ from 'lodash';
import AudioPlayer from 'react-responsive-audio-player';
import { decode } from 'he'

import { getFromDrupalAPI } from '../../utils/fetchJSON';

import '../../assets/css/audioplayer.css'
import sermonSeriesImage from '../../assets/img/sermonSeriesImage.jpg';

class LatestSermon extends Component {
  constructor() {
    super();
    this.state = { latestSermon: null }
  }

  componentWillMount() {
    var that = this;

    getFromDrupalAPI('all_sermons_api?limit=1', function (data) {
      that.setState({ latestSermon: data });
    });

  }
  render() {
    var sermonDetails;
    if (!this.state.latestSermon) {
      sermonDetails = <div>Loading...</div>
    }
    else {
      sermonDetails = _.map(this.state.latestSermon, (sermon) => {
        return (
          <div key={_.uniqueId()} className="content">
            <div className="view view-latest-sermon view-id-latest_sermon view-display-id-block view-dom-id-78390e62fd38513a05d7e159bfdf897a">
              <div className="view-content">
                <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">

                  <div className="views-field views-field-field-front-page-thumbnail">
                    <div className="field-content">
                      <img className="latestSermon-img" src={sermonSeriesImage} width="600" height="450" alt="" />
                    </div>
                  </div>

                  <span>        <div><a href={`/sermon/${sermon.nid}`}>{sermon.node_title ? decode(sermon.node_title) : 'Untitled'}</a></div>  </span>
                  <span>        <div>{decode(sermon.preacher)}</div>  </span>
                  <span className="views-field views-field-field-sermon">
                    <span className="field-content">
                      <AudioPlayer playlist={[{ url: sermon.url }]} controls={['playpause', 'spacer', 'progress']} />
                    </span>
                  </span>
                  <span className="views-field views-field-field-sermon-1">
                    <span className="field-content">
                      <a href={sermon.url}>Download Sermon</a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      });

    }

    return (
      <section>
        <div className="col-md-4 col-xs-12">  <div className="region region-content-2-1">
          <div className="block block-views">
            <h2>Latest Sermon</h2>
            {sermonDetails}
          </div>
        </div>
        </div>
      </section>
    );
  }
}

export default LatestSermon;
