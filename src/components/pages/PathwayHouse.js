import React, { Component } from 'react';
import pathwayHouseImg from '../../assets/img/pathwayHouseLogo.png';

class PathwayHouse extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Pathway House</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">Pathway House</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-region">
                    <div className="container">
                        <div className="row">
                            <div id="main-content-region" className="main-content col-xs-12">
                                <div className="region region-content">
                                    <div id="block-system-main" className="block block-system">
                                        <div className="content">
                                            <div className="node node-page clearfix">

                                                <div className="content">
                                                    <div className="row">
                                                        <div className="col-md-3"><img src={pathwayHouseImg} alt="" className="img img-responsive ministryImg" /></div>
                                                        <div className="col-md-9"><p>Pathway House is an associated ministry of Pathway to Life.</p>
                                                            <p>The facility currently hosts education and allied health professionals.</p>
                                                            <p>Pathway House seeks to support people in the community, with a particular focus on people living with an Autism Spectrum Disorder (ASD).</p>
                                                            <p>To find out more about Pathway House and contact information for the people involved please visit <a href="/PathwayHouse">this page</a>.</p>
                                                        </div>
                                                    </div>


                                                    <div className="row margin-top-50">
                                                        <h4>Pathway House Facilitators & Contacts</h4>
                                                        <div className="padding-top-15 col-md-12 pathwayHouseContact">
                                                            <h5><strong>Kristine Bull</strong></h5>
                                                            <h6>Psychologist</h6>
                                                            <h6><strong>Phone:</strong> (03) 6427 3456</h6>
                                                            <h6><strong>Mobile:</strong> 0437 225 767</h6><br />


                                                            <p className="margin-top-20">
                                                                <strong>Providing</strong> individual therapy for children, adolescents and adults. Cognitive, Academic, ASD and ADHD assessments.
                              </p>

                                                            <p className="margin-top-20">
                                                                <strong>Co-facilitator</strong> along side Bianca Niebuur for the Secret Agent Society (SAS): a social skills small group program aimed at kids around the ages of 8-12 years.
                                                                This program is designed to improve the emotional regulation and social skills of children with high-functioning Autism/Aspergers Syndrome, Anxiety Disorders, ADHD, anger management difficulties
                                and other general challenges with friendship, team work, conversations or staying calm. For more information visit <a href="https://www.sst-institute.net/" target="_blank" rel="noreferrer noopener">www.sst-institute.net</a>.
                              </p>
                                                        </div>


                                                        <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                            <h5><strong>Bianca Niebuur</strong></h5>
                                                            <h6>BEd (Hons)</h6>
                                                            <h6>ASD Support</h6>
                                                            <h6><strong>Mobile:</strong> 0408 319 931</h6><br />

                                                            <p className="margin-top-20">
                                                                <strong>Co-facilitator</strong> alongside Kristine Bull for the Secret Agent Society (SAS).
                              </p>
                                                        </div>


                                                        <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                            <h5><strong>Lucy Karafilis</strong></h5>
                                                            <h6>Psychologist</h6>
                                                            <h6><strong>Mobile:</strong> 0411 779 978</h6><br />

                                                            <p className="margin-top-20">
                                                                (more information to come)
                              </p>
                                                        </div>

                                                        <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                            <h5><strong>Rosie Butler</strong></h5>
                                                            <h6>Paediatric Occupational Therapist</h6>
                                                            <h6>North West Kids Paediatric Occupational Therapy</h6>
                                                            <h6><strong>Mobile:</strong> 0435 900 096</h6><br />

                                                            <p className="margin-top-20">
                                                                <strong>Providing</strong> assessment and intervention for children and young adults experiencing difficulties with the following issues (sleeping, toileting, feeding, pretend play, handwriting, early school skills including drawing and cutting, responding to sensory input, attention and concentration, social skills and emotional regulation).
                              </p>
                                                        </div>

                                                        <div className="padding-top-30 col-md-12 pathwayHouseContact">
                                                            <h5><strong>Anne Barker</strong></h5>
                                                            <h6>BA (Hons) Dip.Ed.</h6>
                                                            <h6><strong>Email:</strong> <a href="mailto:annepgeale65@gmail.com">annepgeale65@gmail.com</a></h6><br />

                                                            <p>
                                                                <strong className="margin-top-20">Providing</strong> tutoring for students with learning issues including dyslexia.<br />
                                                                Available Tuesdays, Wednesdays and Thursdays 3 to 5pm.
                              </p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default PathwayHouse;