/* eslint-disable */
import React, { Component } from 'react';
import ptlLogo from '../../assets/img/logo.png'
import crcaLogo from '../../assets/img/CRCA-logo.png'
import motto from '../../assets/img/motto.png'


class Welcome extends Component {
  render() {
    return (
      <section>
        <div id="content-region">
          <div className="container">
            <div className="row">
              <div id="main-content-region" className="main-content col-xs-12">

                <div className="region region-content">

                  <div className="block block-system">


                    <div className="content">
                      <div className="node node-page clearfix">

                        <div className="content">
                          <div className="field field-name-body field-type-text-with-summary field-label-hidden"><div className="field-items">
                            <div className="field-item even">



                              <img className="img img-responsive padding-bottom-40" src={motto} alt="logo" />
                              <div className="row">
                                <div className="col-md-3 col-xs-12">
                                  <img className="img img-responsive" src={ptlLogo} alt="logo" />
                                </div>
                                <div className="col-md-9 col-xs-12 padding-top-20">
                                  <p>PATHWAY TO LIFE is passionate about...</p>
                                  <p><b>ENCOURAGING</b> people in Christ through: <b>Worship, Prayer</b> and <b>Fellowship</b></p>
                                  <p><b>EMPOWERING</b> people with Christ through: <b>Sound Biblical Teaching, Discipleship</b> and <b>Service</b></p>
                                  <p><b>IGNITING</b> people for Christ through: <b>Evangelism</b></p>
                                </div>
                              </div>

                              <div className="row padding-top-15">
                                <div className="col-md-3 col-xs-12">
                                  <img width="125" height="136" className="crcaLogo" src={crcaLogo} alt="" />
                                </div>
                                <div className="col-md-9 col-xs-12 padding-top-50">
                                  PATHWAY TO LIFE is part of the <em><a href="https://crca.org.au/" target="_blank" rel="noreferrer noopener">Christian Reformed Churches of Australia</a></em>

                                </div>
                                {/*<div className="clearfix"></div>
                                <div className="row">
                                 <hr style={{ borderTop: "6px solid #0054a1" }} />
                                  <p className="text-center" style={{ fontSize: "27px" }}>
                                    <b>ENCOURAGE &nbsp;&nbsp;&nbsp; EMPOWER &nbsp;&nbsp;&nbsp; IGNITE</b>
                                  </p>
                                </div>*/}


                              </div>

                            </div>
                          </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div> {/* /main-content-region */}
            </div> {/* /row */}
          </div> {/* /container */}
        </div> {/* /content-region */}
      </section >
    );
  }
}

export default Welcome;
