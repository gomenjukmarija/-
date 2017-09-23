var React = require('react');
import Link from 'react-router/lib/Link';
var Stats = require('./Stats.jsx');
import Testimonials from './Testimonials';
import NewTestimonials from './NewTestimonials';
import Advantages from './Advantages';
import HowHomePage from './HowHomePage';
import Done from 'ic/action/done';
import TrustPilotAB from './TrustPilotABComponents/TrustPilotAB.jsx';
import LandingLinksHomePageComponent from 's/seo_landings/LandingLinksHomePageComponent';
import SocialMedia from './SocialMedia';
import VideoTestimonials from './VideoTestimonials';
import envCheck from 'utils/envCheck';
import Doubt from './WritingService/Doubt';

const d = <Done style={{color: '#417bff'}} />

var HomePageStaticContent = React.createClass({

	contextTypes: {
        project_names: React.PropTypes.object,
        is: React.PropTypes.func,
		abs: React.PropTypes.object,
		translates: React.PropTypes.object,
    },

	initFacebook: function() {
		if(typeof(FB) !== 'undefined' && typeof(FB.XFBML) !== 'undefined') FB.XFBML.parse();
		else setTimeout(this.initFacebook, 5000);
	},

	initGoogle: function() {
		if(typeof(gapi) !== 'undefined' && typeof(gapi.person) !== 'undefined') gapi.person.go();
		else setTimeout(this.initGoogle, 5000);
	},

	componentDidMount: function() {
	    this.initGoogle();
		this.initFacebook();
	},

	onGoToOrder: function(e) {
		if(this.props.onGoToOrder) this.props.onGoToOrder(e);
	},

    renderTrustPilot: function() {
    	if(this.context.abs.trustpilot_home && this.context.abs.trustpilot_home === true) {
				return <TrustPilotAB />;
			}
    },

	render: function() {
		let scroll2_translated_parts = this.context.translates && this.context.translates.landing.scroll2 || false;
		let order_button_text = scroll2_translated_parts ? scroll2_translated_parts.order_button : 'Order now';
		let scroll3_translated_parts = this.context.translates && this.context.translates.landing.scroll4 || false;
		let default_page_content = scroll3_translated_parts ? scroll3_translated_parts :{
			title: "Why go with "+this.context.project_names.sm+" Writing service?",
			accept_title:"We accept:",
			security_title:"Security guaranteed by:",
			stats_title:"Our stats"
		};
		let default_advantages = scroll3_translated_parts ? scroll3_translated_parts.guarantees :[
			'On-time delivery',
			'Plagiarism Report',
			'100% satisfaction guaranteed',
			'Complete confidentiality',
			'Money Back Guarantee'
		];
		let default_stats = scroll3_translated_parts ? scroll3_translated_parts.stats :[
			'64058 completed orders 64058',
			'793 qualified writers',
			'590 writers online',
			'4.58/5 from 15322 reviews'
		];


		return (
			<div>
				<div style={{position: 'relative'}}>
					{this.context.abs ? this.renderTrustPilot() : ''}
				</div>
				<Advantages />
				<div className="cta text-center">
					<Link onClick={this.onGoToOrder} to="new-order" className="button order-button">
						{order_button_text}
					</Link>
				</div>
				<HowHomePage />
				{
					this.context.is(['SP'])
					?
					<VideoTestimonials />
					:
					""
				}
				<div id="stats">
					<div className="container">
						<div className="content col-xs-12">
							<div className="row advantages">

								<div className="col-md-6 col-xs-12">
									<div className="text-center">
										<h3>{default_page_content.title}</h3>
									</div>
									<ul>
										{default_advantages.map(function(advantage,index) {
											return(
												<li>
													{d}
													<span>{advantage}</span>
												</li>
											)
										})}

									</ul>
								</div>
								<div className="col-md-6 col-xs-12 stats">
									<Stats stats_title={default_page_content} default_stats={default_stats}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="accept">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-md-6 text-center">
								<p className="tt">{default_page_content.accept_title}</p>
								<img src={require("./img/payment-methods.png")} style={{maxHeight:130, maxWidth: "100%"}} />
							</div>
							<div className="col-xs-12 col-md-6 text-center security">
								<p className="tt">{default_page_content.security_title}</p>
								<ul style={{padding: 0}} >
									<li>
										<img src={require("./img/comodo_sa_100x85_transp.png")} style={{maxWidth: "100%"}} />
									</li>
									<li>
										<a href="http://www.dmca.com/Protection/Status.aspx?ID=575cf48f-821c-40ef-baef-500e6a9b50fa" title="DMCA.com Protection Status" className="dmca-badge">
											<img style={{maxWidth: "100%"}} src="https://images.dmca.com/Badges/dmca_protected_18_120.png?ID=575cf48f-821c-40ef-baef-500e6a9b50fa" alt="DMCA.com Protection Status" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<SocialMedia />


				{
					this.context.is(['SP']) ?
						<Doubt />
						:
						<span />
				}

				{
					this.context.is(['SP']) ?
						<NewTestimonials {...this.props} />
					:
						<Testimonials {...this.props} />
				}

				<LandingLinksHomePageComponent />

			</div>
		)
	}
});
module.exports = HomePageStaticContent;