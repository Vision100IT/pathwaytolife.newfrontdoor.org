import React, { Component } from 'react';

class SocialBlock extends Component {

    render() {
        return (
            <section>
                <div className="col-md-4 col-xs-12">  <div className="region region-content-2-3">

                    <div className="block block-block">

                        <h2 className="header-lightBlue">What's Happening?</h2>

                        <div className="content">
                            <div className="upcoming-events">
                                {/*<p>Pathway has gone online with a weekly Zoom service. Information for this is passed onto known contacts and more can be found through contacting the church or visiting the Facebook page.</p>*/}
                                <p>The best place to go to find out what's coming up and happening at Pathway is the Church <a href="https://www.facebook.com/PathwaytoLifeChurch/" target="_blank" rel="noreferrer noopener">Facebook page</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        );
    }
}

export default SocialBlock;
