import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Contacts from './Contacts';
import Title from './Title';

import mq from 'utils/mq';

const StyledImg = styled.img`
	position: absolute;
	max-height: 500px;
	bottom: -65px;
	@media(max-width: 1200px){
        max-height: 485px;
	    bottom: -45px;
	}
`;

const TitleWrap = styled.div`
	padding: 0 0 100px 0;
	@media (max-width: 991px){
		padding: 0 0 55px 0;
	}
`;

var Header = React.createClass({
	contextTypes: {
		navigator: React.PropTypes.object
	},

	getInitialState(){
		return {
			contacts: true,
		}
	},

	_mqListen(match)
    {
		if(match) this.setState({contacts: false});
		else this.setState({contacts: true});
    },

	componentDidMount(){
		this._mq = mq('(max-width: 991px)', this._mqListen);
	},

	componentWillUnmount(){
		this._mq.removeListener(this._mq.listener);
	},

	render() {

		var userAgent = (this.context.navigator || navigator).userAgent.toLowerCase();
		var isIE = userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf('edge') > -1;
		var isFirefox = userAgent.indexOf('firefox') > -1;
		var StyledHeader, WhiteTransparentShape, WhiteStripe;
		if (isFirefox)
		{
			StyledHeader = styled.div`
				background: url(${require('i/edu/top-background.png')}) no-repeat;
				background-size: cover;
				position: relative;
				-webkit-clip-path: url(#Header-clip);
				clip-path: url(#Header-clip);
				@media (max-width: 991px){
					-webkit-clip-path: none;
					clip-path: none;
				}
			`;
			WhiteTransparentShape = styled.div`
				height: 100%;
			    width: 100%;
				position: absolute;
				background: url(${require('i/edu/top-background-white.png')});
				background-size: cover;
				background-position-y: 5px;
				-webkit-clip-path: url(#WhiteTransparentShape-clip);
				clip-path: url(#WhiteTransparentShape-clip);
			`;
			WhiteStripe = styled.div`
				margin-top: 20px;
				margin-bottom: 10px;
				background: rgba(255, 255, 255, 0.5);
				-webkit-clip-path: url(#WhiteStripe-clip);
				clip-path: url(#WhiteStripe-clip);
			`;
		}
		else if (isIE)
		{
			StyledHeader = styled.div`
				background: url(${require('i/edu/top-background.png')}) no-repeat;
				background-size: cover;
				position: relative;
			`;
			WhiteStripe = styled.div`
				margin-top: 20px;
				margin-bottom: 10px;
				background: rgba(255, 255, 255, 0.8);
			`;
		}
		else
		{
			StyledHeader = styled.div`
				background: url(${require('i/edu/top-background.png')}) no-repeat;
				background-size: cover;
				position: relative;
				-webkit-clip-path: polygon(50% 85%, 100% 100%, 100% 0, 0 0, 0 100%);
				clip-path: polygon(50% 85%, 100% 100%, 100% 0, 0 0, 0 100%);
				@media (max-width: 991px){
					-webkit-clip-path: none;
					clip-path: none;
				}
			`;
			WhiteTransparentShape = styled.div`
				height: 100%;
			    width: 100%;
				position: absolute;
				background: url(${require('i/edu/top-background-white.png')});
				background-size: cover;
				background-position-y: 5px;
				-webkit-clip-path: polygon(0 0, 32% 0, 50% 90%, 0 100%);
				clip-path: polygon(0 0, 32% 0, 50% 90%, 0 100%);
			`;
			WhiteStripe = styled.div`
				margin-top: 20px;
				margin-bottom: 10px;
				background: rgba(255, 255, 255, 0.5);
				-webkit-clip-path: polygon(0 0, 35.3% 0, 37.1% 100%, 0 100%);
				clip-path: polygon(0 0, 35.3% 0, 37.1% 100%, 0 100%);
			`;
		}
		return (
			<div style={{position: 'relative'}} id="home">
				{isFirefox ?
					<div style={{position: 'absolute'}}>
						<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<clipPath id="Header-clip" clipPathUnits="objectBoundingBox">
									<polygon points="0.5 0.85, 1 1, 1 0, 0 0, 0 1" />
								</clipPath>
							</defs>
						</svg>
						<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<clipPath id="WhiteTransparentShape-clip" clipPathUnits="objectBoundingBox">
									<polygon points="0 0, 0.32 0, 0.5 0.9, 0 1" />
								</clipPath>
							</defs>
						</svg>
						<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<clipPath id="WhiteStripe-clip" clipPathUnits="objectBoundingBox">
									<polygon points="0 0, 0.353 0, 0.371 1, 0 1" />
								</clipPath>
							</defs>
						</svg>
					</div>
					:
					''
				}

				<StyledHeader>

					{isIE ?
						''
					:
						<WhiteTransparentShape className="hidden-sm hidden-xs" />
					}

					{this.state.contacts ?
						<div style={{paddingTop: 110}}>
							<WhiteStripe>
								<div className="container" style={{padding: 0}}>
									<Contacts />
								</div>
							</WhiteStripe>
						</div>
					: ''
					}
					<TitleWrap className="container" style={isIE ? {padding: '0 0 180px 0', marginBottom: 130} : {}}>
						<Title />
					</TitleWrap>
				</StyledHeader>
				<div className="container hidden-sm hidden-xs">
					<StyledImg src={require('i/edu/auto-babe.png')} alt = "Девушка на фоне шедевра итальянского автопрома с сайта партнерской программы EduCashion.net"/>
				</div>
			</div>
		);
	}
});

module.exports = Header;