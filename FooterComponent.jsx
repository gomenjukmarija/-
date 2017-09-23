var React = require('react');
import Link from 'react-router/lib/Link';
import Legal from 's/Legal';
var CallbackDialog = require('./CallbackDialog.jsx');

import FooterComponentEOL from 'eoll/FooterComponent';
import FooterComponentSP from 'spl/Footer';

import styled from 'styled-components';

const FooterSocialLink = styled.a`
    & img {
        width: 24px;
    }
    margin-left: 10px;
    margin-right: 10px;
`;

var FooterComponent = React.createClass({

    contextTypes: {
        project_names: React.PropTypes.object,
        editing_service: React.PropTypes.bool,
        is: React.PropTypes.func,
    },

    render : function (){

       var blog = this.context.project_names.xs == 'ET' ? <Link to="blog"><b>Blog</b></Link> : <span/>;
   var social_logo = null;

   if(this.context.is("PC"))
   {
       social_logo = (
           <div className="col-xs-12 text-center" style={{paddingTop:15}}>
               <FooterSocialLink href="https://www.facebook.com/papercoach" target="_blank"><img src={require('pcl/img/facebook-footer.png')}/></FooterSocialLink>
               <FooterSocialLink href="https://twitter.com/_papercoach" target="_blank"><img src={require('pcl/img/twitter-footer.png')}/></FooterSocialLink>
               <FooterSocialLink href="https://plus.google.com/103857188210306910850" target="_blank"><img src={require('pcl/img/google-plus-footer.png')}/></FooterSocialLink>
           </div>
       )
   }

   var alt_text = "", alt_mcafee = "";

   // ”никальныe alt дл€ картинок CorrectMyWriting.com
   if (this.context.is('CMW')) {
       alt_text =" for correctmywriting.com";
       alt_mcafee =" on correctmywriting.com";
   }
        return (
            <div className="footer">
                <div className="layout-footer">
                    <div className="row">
                        <div className="footer-inner">
                            <div className="layout-container">
                                <div className="footer-links-block">
                                    <div className="footer-links col-xs-12 text-center">
                                        <Link id="footer-about" to="about"><b>About us</b></Link>
                                        <Link id="footer-prices" to="prices"><b>Prices</b></Link>
                                        <Link id="footer-faq" to="faq"><b>FAQ</b></Link>
                                        <Link id="footer-how" to="how"><b>How it works</b></Link>
                                        {blog}
                                        <Link id="footer-contact" to="contact"><b>Contact</b></Link>
                                        <Legal buttonClassName="legal-button" />
                                        <CallbackDialog />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="footer-images text-center hidden-xs">
                        <ul className="footer-list">
                            <li><img src={require("i/ga_small.jpeg")} alt={"Google Analytics" + alt_text}/></li>
                            <li><img src={require("i/c/credit-card-logos.jpg")} alt={"Payment systems" + alt_text}/></li>
                            <li><img src={require("i/c/accepting_paypal-min.png")}  alt={"Pay Pal payment system" + alt_text}/></li>
                            <li><img src={require("i/c/mcafee_secure-min.jpeg")} alt={"McAfee secure" + alt_mcafee}/></li>
                        </ul>
                    </div>

                    <div className="col-xs-12 hidden-xs text-center">
                        <br/>
                        {this.props.disclaimer}
                        {this.props.speedyLLC}
                    </div>
                    {social_logo}
                    <div className="col-xs-12 text-muted text-center copyright-margined">
                        <b>{this.context.project_names.sm} &copy; {new Date().getFullYear()}
                         &nbsp; All rights reserved.</b><br/>
                    </div>
                </div>
            </div>
		);
    }

});

module.exports = FooterComponent;