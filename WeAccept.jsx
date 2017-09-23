var React = require('react');

var WeAccept = React.createClass({

    contextTypes: {
        project_names: React.PropTypes.object,
        editing_service: React.PropTypes.bool,
        is: React.PropTypes.func,
    },

	render: function() {

        // ”никальные alt дл€ картинок CorrectMyWriting.com
        var alt_text = "";
        if (this.context.is('CMW')) {
            alt_text =" for correctmywriting.com";
        }

		return (
			<div id="accept">
                <div className="container">
                    <div className="row">
                        <p style={{fontSize: 26}} className="text-center">We accept:</p>
                        <div className="col-xs-6 col-md-2 text-center payment">
                            <img src={require("i/c/amex-min.jpg")} style={{maxHeight:130, maxWidth: "100%"}}
                                 alt={"Amex payment system" + alt_text}/>
                        </div>
                        <div className="col-xs-6 col-md-2 text-center payment">
                            <img src={require("i/c/visa-min.jpg")} style={{maxHeight:130, maxWidth: "100%"}}
                                 alt={"Visa payment system" + alt_text}/>
                        </div>
                        <div className="col-xs-6 col-md-2 text-center payment">
                            <img src={require("i/c/mastercard-min.jpg")} style={{maxHeight:130, maxWidth: "100%"}}
                                 alt={"Master Card payment system" + alt_text}/>
                        </div>
                        <div className="col-xs-6 col-md-2 text-center payment">
                            <img src={require("i/c/paypal-min.jpg")} style={{maxHeight:130, maxWidth: "100%"}}
                                 alt={"PayPal payment system" + alt_text}/>
                        </div>
                        <div className="col-xs-6 col-md-2 text-center payment">
                            <img src={require("i/c/jcb-min.jpg")} style={{maxHeight:130, maxWidth: "100%"}}
                                 alt={"JCB payment system" + alt_text}/>
                        </div>
                        <div className="col-xs-6 col-md-2 text-center payment">
                            <img src={require("i/c/discover-min.jpg")} style={{maxHeight:130, maxWidth: "100%"}}
                                 alt={"Discover payment system" + alt_text}/>
                        </div>
                    </div>
                </div>
            </div>
		);
	}

});

module.exports = WeAccept;