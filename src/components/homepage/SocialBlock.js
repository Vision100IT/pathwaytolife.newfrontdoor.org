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
                                <p>
                                    <strong>Please note that this Sunday the 10th of November our Sunday Service will be off-site at our <a href="https://www.facebook.com/events/341010700185412/" target="_blank" rel="noreferrer noopener">Church Camp</a> at <a href="https://goo.gl/maps/PxXXMhM3FdyW75y5A" target="_blank" rel="noreferrer noopener">Paton Park</a> at 11am. All welcome.</strong><br />
                                </p>
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
