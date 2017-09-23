import React from 'react';
import styled from 'styled-components';
import envCheck from 'utils/envCheck';

import RaisedButton from 'material-ui/RaisedButton';

import checkBrowser from 'utils/checkBrowser';

const TitleTextH1 = styled.h1`
	text-transform: uppercase;
	font-size: 33px;
	color: #fff;
	text-align: right;
	margin: 0;
	line-height: 50px;
	@media(max-width: 1200px){
		font-size: 27px;
	}
	@media (max-width: 991px){
		text-align: center;
		margin: 5px 0;
	}
	@media(max-width: 767px){
		font-size: 35px;
	}
`;

const StyledDollars = styled.p`
	font-size: 20px;
	text-transform: uppercase;
	color: #fff;
	@media(max-width: 767px){
		font-size: 18px;
	}
`;

const StartButton = styled.div`
	float: right;
	text-align: center;
	@media (max-width: 991px){
		float: none;
	}
`;

const StyledArrow = styled.div`
	float: right;
	text-align: center;
	clear: both;
    width: 430px;
`;

const Back = styled.div`
    position: relative;
    bottom: 60px;
	margin-top: 15px;
	overflow: hidden;
	@media(max-width: 1200px){
		font-size: 27px;
	}
	@media(max-width: 991px){
	    margin-top: 300px;
	}
`;

const StyledImg = styled.img`
	position:relative;
	top:26px;
	right: 170px;
	@media(max-width: 1200px){
	   right: 30px;
       width: 50px;
       height: 30px;
       top:30px;
	}
`;

const StyledP = styled.p`
    position:relative;
    top:10px;
    right: 30px;
    clear: both;
	font-size: 19px;
	color: #fff;
	text-align: right;
    padding-left:10px;
	@media(max-width: 1200px){
		font-size: 14px;
		top:10px;
		right: 5px;
	}
`;

var Title = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        navigator: React.PropTypes.object
    },

    _go(route){
        this.context.router.push(route);
    },

    render() {

        var userAgent = (this.context.navigator.userAgent || navigator.userAgent).toLowerCase();

        var isIE = userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf('edge') > -1;
        var ButtonStyle = {
            background: 'linear-gradient(rgb(176, 255, 171), rgb(108, 195, 110), rgb(176, 255, 171))',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 6px, rgba(0, 0, 0, 0.2) 0px 2px 5px',
            borderRadius: 10,
            height: 60,
            marginTop: 10,
            marginBottom: 15,
        };
        var LabelStyle = {
            position: 'relative',
            opacity: 1,
            fontSize: 23,
            letterSpacing: 0,
            textTransform: 'none',
            fontWeight: 500,
            margin: 0,
            paddingLeft: 25,
            paddingRight: 25,
            color: 'rgb(54, 99, 55)',
            bottom: 2,
        };
        var RippleStyle = {
            borderRadius: 10
        };
        return (
            <Back style={isIE ? {marginTop: 40} : {}}>
                <TitleTextH1 className="regular">
                    <span className="regular" style={{color: '#9cd299'}}>Партнерская программа</span><br/>
                    под зарубежный студенческий трафик
                </TitleTextH1>
                <StartButton>
                    <RaisedButton
                        backgroundColor="transparent"
                        style={ButtonStyle}
                        rippleStyle={RippleStyle}
                        className="semi-bold"
                        children={<span className="semi-bold" style={LabelStyle}>Начать зарабатывать</span>}
                        // onTouchTap={() => {this._go('/dasboard/login')}.bind(this)}
                        href='/dashboard/signup'
                        />
                    <StyledDollars className="light">
                        $220 с одного клиента
                    </StyledDollars>
                </StartButton>
                <StyledArrow className="hidden-sm hidden-xs">
                    <StyledImg src={require('i/edu/arrow.png')} alt = "Зарегистрируйся прямо сейчас"/>
                    <StyledP>
                        <span className="regular">Зарегистрируйся прямо сейчас</span><br/>
                        <span className="regular" style={{color: '#9cd299'}}>и купи машину своей мечты </span><span className="regular">уже завтра</span>
                    </StyledP>
                </StyledArrow>
            </Back>

        );
    }
});

module.exports = Title;