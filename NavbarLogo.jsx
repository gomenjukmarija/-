import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import styled from 'styled-components';

//5)Setting up styled component that will handle our logo styles according to the group indicator.
//Main media breakpoints are min-width:768px and min:width:320px
const NavbarLogoImgStyled = styled.img`
	&.speedypaperCloneLogo {
		marginTop: 16px;
		max-width: 160px;
		@media (max-width:320px) {
			maxWidth: 160px !important;
			marginLeft: -8px;
		}
	}
	&.papercoachCloneLogo {
		width: 250px !important;
		@media (max-width: 320px){
			max-width: 160px;
		}
		@media (max-width: 768px) {
			max-width: 160px;
		}
	}
	&.speedypaperCloneLogoBEC {
		marginTop: 5px;
		max-width: 160px;
		@media (max-width:320px) {
			maxWidth: 135px !important;
			marginLeft: -1px;
		}
	}
	&.proessays {
		width: 250px !important;
		@media (max-width: 320px){
			max-width: 160px;
		}
		@media (max-width: 768px) {
			max-width: 160px;
		}
	}
	
	&.re101logo {
		marginTop: 22px;
		maxWidth: 150px;
		marginLeft: -5px;
	}
`;

const logos = {
	'SP' : require("i/sp.png"),
	'PC' : require("i/pc.png"),
	'WW' : require("i/c/ww.png"),
	'EOL' : require("i/c/eol-min.png"),
	'WC' : require("i/wc.png"),
	'CEW24' : require("i/cew24.png"),
	'SW' : require("i/sw.png"),
	'5E' : require("i/5e.png"),
	'CEBZ' : require("i/cebz.png"),
	'WSP' : require("i/wsp.png"),
	'JS' : require("i/js.png"),
	'ES' : require("i/es.png"),
	'NPC' : require("i/npc.png"),
	'CW' : require("i/cw.jpg"),
	'WCN' : require("i/wcn.png"),
	'RP' : require("i/rp.png"),
	'EE' : require("i/esex/e-e.png"),
	'WPF' : require("i/wpf.png"),
	'EB' : require("i/eb.png"),
	'CMW' : require("i/cmw.png"),
	'ET' : require("i/et_logo.png"),
	'BEC' : require("i/bec.png"),
	'EDU' : require("i/edu.png"),
	'RE' : require("i/re.png"),
	'CDW' : require("i/cdw.png"),
	'CPW' : require("i/cpw.png"),
	'PWH' : require("i/pwh.png"),
	'WYP' : require("i/wyp.png"),
	'S4L' : require("i/s4l.png"),
	'PE' : require("i/pe.png"),
	'EST' : require("i/est.png"),
}

class NavbarLogo extends Component {

	getDefaultProps() {
		return {
			isDashboard: false,
		};
	}

	render() {
		if(!logos[this.context.project_names.xs]) console.warn('No logo specified for '+this.context.project_names.md);

		// var logo = '';
		// var alt_text = '';
		var alt_text = this.context.project_names.md;
		var logo = logos[this.context.project_names.xs];

		if (this.context.project_names.xs == 'EE' && this.props.isDashboard)
		{
			logo = require('i/esex/e-e_dash.png');
			return (
				<div style={{height:'100%'}} className="uk-navbar-brand">
						<a style={{height:'100%'}} href="https://essay.express/" className="logo">
								<img src={logo} style={this.state} alt={this.context.project_names.md} />
						</a>
				</div>
			);
		}
		//lets handle our logos! basic approach: we have 3 major groups: papercoach(pc) clones, speedypaper(sp) clones and
		//other projects (see projects_to_build.js and clients.js for decyphering).
		//that means that we can:
		//1)Set base className
		const baseStyleClassName = 'Logo';
		//2) Add string primitive that will indicate our group
		let groupIndicator = '';
		//3) Set group indicator:
		if (this.context.is(['PC','EOL','CEW24', 'CDW', 'CMW', 'CPW', 'ED', 'ES', 'EST', 'JS', 'PWH', 'WC'])) {
			//3.1)Setting indicator for pc clones
			groupIndicator = 'papercoachClone' + baseStyleClassName;
		}
		if (this.context.is(['5E','SW','WW','CW','SP','S4L','WYP'])) {
			//3.2.1)Setting indicator for sp clones
			groupIndicator = 'speedypaperClone' + baseStyleClassName;
		}
		if (this.context.is(['BEC'])) {
			groupIndicator = 'speedypaperClone' + baseStyleClassName + 'BEC';
		}
		if (this.context.is(['RE'])) {
			groupIndicator = 're101logo';
		}
	    if (this.props.isDashboard && this.context.is(['PE'])) {
			logo = require('i/pe_dash.png');
      		groupIndicator = 'proessays';
	    }

		// my code
		if (this.context.is('CMW')) {
			alt_text = alt_text + " - professional proofreading service";
		}

		return (
            <div style={{height:'100%'}} className="uk-navbar-brand">
				<Link style={{height:'100%'}} to="/" className="logo">
					{/*4)Setting up className prop for further usage in styled component. See line 6 for next step*/}
					<NavbarLogoImgStyled className={groupIndicator} src={logo} alt={alt_text} />
                </Link>
            </div>
		);
	}

}

NavbarLogo.contextTypes = {
        project_names: React.PropTypes.object,
        is: React.PropTypes.func
    	}

export default NavbarLogo;