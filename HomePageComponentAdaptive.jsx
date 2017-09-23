var React = require('react');
import RaisedButton from 'material-ui/RaisedButton';
var Stats = require('pcl/Stats');
var OrderForm = require('pcl/OrderForm');
var HowItWorks = require('pcl/HowItWorks');
var MoreAdvantages = require('pcl/MoreAdvantages');
var FirstCrawl = require('./FirstCrawl');
var Testimonials = require('pcl/Testimonials');
var WeAccept = require('pcl/WeAccept');
var StartWorking = require('pcl/StartWorking');
import LandingLinksHomePageComponent from 's/seo_landings/LandingLinksHomePageComponent';

import Helmet from 'react-helmet';

// import roboto from 'css/roboto'; //20kb
// import bootstrap from 'css/bootstrap_pc'; //90kb

// import bootstrapSquare from 'css/bootstrap-square';
// import common from 'css/common';
// import pc_landing_bare_minimum from './css/pc_landing_bare_minimum';

import css from './css/full_pc';


// var PCSchema = require('components/Schema');

// const schema = {
//     'PC' : <PCSchema />,
// }

var HomePageComponentAdaptive = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired,
        project_names: React.PropTypes.object,
        page_info: React.PropTypes.object
    },

    render: function () {


        // var s = (this.context.project_names) ? schema[this.context.project_names.xs] : <span />;

        return (
            <div id="front-page-wrapper" className='homepage front-page-wrapper'>
			
			// Прописать JSON c разметкой для главной.
                <Helmet
                    title={this.context.page_info.title || "Home"}
                    script={[
                        { "type": "application/ld+json",  "innerHTML": `{"@context":"http://www.schema.org","@type":"service",
                        "serviceType":"Writing assistance","name":"Correctmywriting.com","url":"https://correctmywriting.com/"}` }
                    ]} />

                <FirstCrawl route={this.context.location.pathname}/>
                <MoreAdvantages />
                <Stats/>
                <HowItWorks/>
                <StartWorking
                    text={<span>Want us to start proofreading your paper right now &nbsp;<b>ORDER&nbsp;NOW</b></span>}/>
                <section className='slider-reviews'>
                    <div className='container'>
                        <div className='text-center row'>
                            <h2>Check what our customers have to say!</h2>
                        </div>
                        <div className='row'>
                            <Testimonials chevron_color='#4EBA6F' chevron_hover_color='#3c763d'/>
                        </div>
                    </div>
                </section>
                <div className="bottom-form-wrapper">
                    <div className="bottom-form text-center">
                        <p className="sub-heading">Place an order now. &nbsp;<b>Pay later</b></p>
                        <OrderForm label="Check"/>
                    </div>
                </div>
                <WeAccept />
                <LandingLinksHomePageComponent/>
            </div>
        );

    }

});

module.exports = HomePageComponentAdaptive;