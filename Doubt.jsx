import React from 'react';
import styled from 'styled-components';
import Actions from 's/actions';
import DialogStore from 'st/DialogStore';
import PhoneStore from 'st/PhoneStore';
import UserStore from 'st/UserStore';
import CallbackStore from 'st/CallbackStore';

import HeaderService from './components/HeaderService';
import Advantages from './components/Advantages';
import Slider from './components/Slider';
import ViewSamples from './components/ViewSamples';
import PricesBlock from './components/PricesBlock';
import Phone from './components/Phone';
import N from 'react-material-notification';



const WrapDoubt = styled.div`
	overflow: hidden;
	background: #122d4f;
	background-size: cover;
	background-image: url(${require('img/c/doubt.jpg')});
	background-position: 70%;
	height: 450px;
	position: relative;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
	@media(max-width: 767px){
	    height: inherit;
		padding-top: 40px;
		padding-bottom: 60px;
	}
	@media(max-width: 991px){
        height: inherit;
		padding-bottom: 80px
	}
	&:before{
		position: absolute;
		content: '';
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
	&:after{
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(17, 58, 97, 0.8);
	}
`;


const WrapPhone = styled.div`
    display: inline-block;
    color: #4f4f4f;
    width: 65%;
    vertical-align: top;
    & input{
    	height: 50px;
    }
	@media(max-width: 991px){
	   width: 40%;
	}
	@media(max-width: 414px){
	   margin-top: 20px;
	   margin-left: 18px;
	   width: 70%;
	}
    & .phone div{
    	margin-left: 0px;
    }
    @media(max-width: 375px){
	   width: 81%;
	}
    @media(max-width: 320px){
	   width: 95%;
	}
`;

const OpenChatNow = styled.button`
	-webkit-font-smoothing: antialiased;
	display: inline-block;
	vertical-align: middle;
	zoom: 1;
	padding: 13px 32px;
	font-weight: 400;
	font-size: 17px;
	color: #fff !important;
	text-shadow: rgba(0, 0, 0, 0.2) 0 -1px 0;
	border: 0px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px, inset rgba(255, 255, 255, 0.88) 0px 1px 3px -1px;
	background-color: #5da4ff;
	text-decoration: none !important;
	-webkit-transition: all 0.2s linear;
	-moz-transition: all 0.2s linear;
	-ms-transition: all 0.2s linear;
	-o-transition: all 0.2s linear;
	transition: all 0.2s linear;
		&:hover{
			color: #fff;
			text-decoration: none;
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
			background-color: #328CFF;
		}
		&:active{
		    box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.29);
		}
	@media(max-width: 414px){
	   width: 65%;
	}
    @media(max-width: 375px){
	   width: 75%;
	}
    @media(max-width: 320px){
	   width: 87%;
	}
`;

const DoubtH1 = styled.h1`
	margin-top: 100px;
	font-family: "Roboto", "Helvetica Neue", Arial;
	line-height: 36px;
	text-align: left;
	font-size: 40px;
	font-weight: 500px;
	color: #ffffff;
	@media(max-width: 991px){
		text-align: center;
		font-size: 43px;
		line-height: 39px;
	}
	@media(max-width: 767px){
		font-size: 35px;
		line-height: 28px;
		margin-top: 30px;
		text-align: center;
	}
`;

const DoubtH2 = styled.h2`
	font-size: 22px;
	color: #ffffff;
	font-weight: 300;
	line-height: 40px;
	@media(max-width: 991px){
		text-align: center;
	}
`;

const DoubtP = styled.p`
	position: relative;
	margin-top: 25px;
	font-family: "Roboto", Arial;
	color: #fff;
	height: 19px;
	font-size: 19px;
	font-weight: 400;
	line-height: 40px;
	@media(max-width: 991px){
		text-align: center;
		line-height: 20px;
	}
	@media(max-width: 320px){
	    margin-bottom: 25px;
	}
`;

const SheldonImg = styled.img`
	position: relative;
	z-index: 1;
	top: 60px;
	left: 80px;
	height: 406px;
	width: 264px;
`;

const EllipseImg = styled.img`
	position: absolute;
	top: 70px;
	right: 80px;
	width: 355px;
	height: 366px;
`;

const WrapForm = styled.div`
	@media(max-width: 991px){
		text-align: center;
		position: relative;
		bottom: 20px;
	}
`;

const LineBreak = styled.br`
    display: none;
	@media(max-width: 414px){
		display: block;
	}
`;



class Doubt extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: this._getState()
		};
	}
	_getState() {
		return {
			show: DialogStore.callbackIsOpened(),
		}
	}

	_handleCustomDialogSubmit(){

		PhoneStore.valueCheck();
		PhoneStore.emitChange();

		if(!PhoneStore.getCheck()) {
			var v = PhoneStore.getValidity();
			var help = (v && v.help) ? v.help : 'You have errors in your form!';
			N.Add(help);

			return ;
		}

		var user = UserStore.get();
		var user_id = user.id || '';
		var user_name  = user.first_name || '';

		setTimeout(() => Actions.a(
			'CALLBACK_REQUEST_ATTEMPT',
			{
				name: user_name,
				phone: PhoneStore.get(),
				user_id: user_id
			}
		), 0);
	}

    render() {
			  return (
				  <WrapDoubt>
					  <div className="container"  style={{position:"relative", zIndex: "33"}} >
						  <div className="row">
							  <div className="col-md-6">
								  <DoubtH1>
									  Having doubts ?<br/>
								  </DoubtH1>
								  <DoubtH2>
									  Our writer will call you back <LineBreak /> within 30 seconds.<br/>
									   Just enter your phone number.<br/>
								  </DoubtH2>
								  <DoubtP className="doubt-text">
									  How cool is that ? <LineBreak /> Enter your number now to check it out!
								  </DoubtP><br/>
								  <WrapForm>
									  <WrapPhone>
										  <Phone />
									  </WrapPhone>
									  <OpenChatNow type="button" onClick={this._handleCustomDialogSubmit}>Call me now</OpenChatNow>
								  </WrapForm>
							  </div>
							  <div className="hidden-sm hidden-xs">
								  <SheldonImg src={require("../img/sheldon.png")} />
								  <EllipseImg src={require("../img/ellipse.png")} />
							  </div>
						  </div>
					  </div>
				  </WrapDoubt>
			  );
    }
};

module.exports = Doubt;