import React, { Component } from 'react';
import menImg from '../../assets/img/men.png';
import womenImg from '../../assets/img/women.png';
import youthImg from '../../assets/img/youth.png';
import kidsImg from '../../assets/img/kids.png';
import fsmImg from '../../assets/img/fsm.png';
import smallGroupImg from '../../assets/img/smallGroups.png';
import prayerImg from '../../assets/img/prayer.png';

class MinistryPrograms extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Pathway Ministries and Programs</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">Community Life</span>
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

                                    <div className="content">
                                        <div className="row">
                                            <div className="col-md-8 col-xs-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-xs-12">
                                                        <img src={menImg} alt="" className="img img-responsive ministryImg" /><br />
                                                        A team of men who <strong>encourage</strong> each other and seek to serve with an aim to <strong>ignite</strong> people for Christ.<br /><br />
                                                        <strong>Coordinator</strong><br />
                                                        John de Jonge
                                                        <ul className="no-list-style">
                                                            <li>0418 501 298</li>
                                                        </ul>

                                                        <img src={kidsImg} alt="" className="img img-responsive ministryImg padding-top-15" /><br />
                                                        A Sunday service program <strong>encouraging</strong> and <strong>empowering</strong> our primary aged children.
                                                        A team facilitating a Sunday service four times a year with a focus on <strong>empowering</strong> the next generation.<br /><br />
                                                        <strong>Coordinator</strong><br />
                                                        Bianca Niebuur
                                                        <ul className="no-list-style">
                                                            <li>0408 319 931</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6 col-xs-12">
                                                        <img src={womenImg} alt="" className="img img-responsive ministryImg padding-top-15" /><br />
                                                        A group of women meeting regularly for a time of <strong>encouraging</strong> fellowship, and with events focusing on <strong>igniting</strong> people for Christ.<br /><br />
                                                        <strong>Coordinators</strong><br />
                                                        Jessica de Jonge
                                                        <ul className="no-list-style">
                                                            <li>0467 376 767</li>
                                                        </ul>
                                                        Anna De Haan<br />
                                                        Dana de Wilzem<br />

                                                        <img src={youthImg} alt="" className="img img-responsive ministryImg padding-top-15 " /><br />
                                                        A Bible study <strong>encouraging</strong> and <strong>empowering</strong> young people. A team facilitating yearly family events with a focus on <strong>igniting</strong> people for Christ.<br /><br />
                                                        <strong>Coordinators</strong><br />
                                                        Ryan and Bianca Niebuur
                                                        <ul className="no-list-style">
                                                            <li>0408 319 931</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 col-xs-12">
                                                        <img src={fsmImg} alt="" className="img img-responsive ministryImg" /><br />
                                                        Incorporated into the Pathway Kids' program is Pathway's Eastern Shore Ministries (ESM). The goal of ESM is to provide a safe and encouraging space for young kids where they can build
                                                        relationships with positive role models and encounter Christ.
                                                </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-xs-12">
                                                <img src={smallGroupImg} alt="" className="img img-responsive ministryImg padding-top-15 padding-bottom-15" /><br />
                                                <strong>Monday Night Growth Group</strong><br />
                                                Philip Kamphuis
                                                <ul className="no-list-style">
                                                    <li>0417 144 480</li>
                                                </ul>
                                                <strong>Steps Small Group</strong><br />
                                                John Groenewold
                                                <ul className="no-list-style">
                                                    <li>(03) 6426 2205</li>
                                                </ul>
                                                <strong>Tuesday Night Weekly</strong><br />
                                                Bec Foster
                                                <ul className="no-list-style">
                                                    <li>0407 043 980</li>
                                                </ul>
                                                <strong>Pitstop Small Group</strong> &nbsp;<i className="icon ion-female size-24" /><br />
                                                Kristine Bull
                                                <ul className="no-list-style">
                                                    <li>0437 225 767</li>
                                                </ul>
                                                <strong>Pitstop Small Group</strong> &nbsp;<i className="icon ion-male size-24" /><br />
                                                Ettiene de Wilzem
                                                <ul className="no-list-style">
                                                    <li>0403 720 501</li>
                                                </ul>
                                                <strong>Women’s Bible Study</strong><br />
                                                Ruth Atkins
                                                <ul className="no-list-style">
                                                    <li>0449 763 207</li>
                                                </ul>

                                                <img src={prayerImg} alt="" className="img img-responsive ministryImg padding-bottom-15 padding-top-15" /><br />
                                                <strong>Turners Beach</strong><br />
                                                John de Jonge
                                                <ul className="no-list-style">
                                                    <li>0418 501 298</li>
                                                </ul>

                                                <strong>Latrobe</strong><br />
                                                John Groenewold
                                                <ul className="no-list-style">
                                                    <li>(03) 6426 2205</li>
                                                </ul>

                                                <strong>Devonport</strong><br />
                                                Ettiene de Wilzem
                                                <ul className="no-list-style">
                                                    <li>0403 720 501</li>
                                                </ul>

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

export default MinistryPrograms;