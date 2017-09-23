/* @flow */
var React = require('react');
var Helmet = require("react-helmet");

import Link from 'react-router/lib/Link';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardText, CardActions} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';

import UserStore from 'st/UserStore';
import ConnectsToStores from 's/cts';
import Centerer from 's/Centerer';
import actions from 's/actions';
import Email from 's/Email';
import Password from 's/Password';
import RememberMe from 's/RememberMe';
import LoginFacebook from './LoginFacebook';


function getState()
{
	return {
		isLoading : UserStore.isLoading()
	};
}

var Login = React.createClass({

	contextTypes: {
        router: React.PropTypes.object,
        project_names: React.PropTypes.object,
        is: React.PropTypes.func,
        translates: React.PropTypes.object
    },

    componentDidMount: function() {
      setTimeout(() => actions.a('CHANGE_IS_NEW_USER', 'old'), 0);
    },

	clickLogin: function(e) {
		e.preventDefault();
		actions.a("LOGIN_ATTEMPT");
	},

	_go:function(route, e) {
		e.preventDefault();
		if (this.context.is('EE') && window && route == "/") {
			window.location = 'https://essay.express/';
		}
		this.context.router.push(route);
	},

	helmetHardcode: function() {

		let HelmetDescription = {}

		if (this.context.is("PE")) {
			HelmetDescription = {"name": "description", "content": "Log into your ProEssays account to place a new essay order," +
			"download a completed paper or check your earlier orders’ status."};
		} else if (this.context.is("NU")) {
			HelmetDescription = {"name": "description", "content": "Do you already have an account with us? Simply log into your" +
			"profile to order a quality nursing paper, check on the order’s status or contact your writer."};
		}

			if(this.context.is('EOL')) {
				return <Helmet
                      title="Login"
                      titleTemplate="Login to Order Your Essay"
                      meta={[
                          {"name": "description", "content": "Enter your email and password to deliver your assignment into our hands and get the needed academic writing help"},
                          {"name": "title", "content": "Login to Order Your Essay"}
                      ]}/>;
        }
        return <Helmet title = "Login" meta={[{"name": "robots", "content": "noindex,nofollow"}, HelmetDescription]}/>;
	},

	render: function() {
		let log_in_translates = this.context.translates && Object.keys(this.context.translates.log_in).length ? this.context.translates.log_in : false;

		let default_labels = log_in_translates ? log_in_translates : {
			email:'Email',
			password:'Password',
			helmet_text: 'Login',
			remember_me : 'Remember me',
			button_content: 'login',
			loading_button_content: 'Login',
			sign_up_button_content : 'signup',
			forgot_password_button_content: 'forgot password',
			back_to_home_page_button_content : 'back to home page',
			email_placeholder_content : 'Enter your e-mail here',
			password_placeholder_content : 'Enter your password',
			log_in_header_text: 'Login',
			show_checkbox_button: 'Show',
		};
		return (

			<Centerer>
				{this.helmetHardcode()}

				<Card zDepth={2}  style={{width:"100%", margin: "0 auto", maxWidth: 320}} >

					<AppBar
			            title={default_labels.log_in_header_text+" | "+this.context.project_names.sm}
			            showMenuIconButton={false}
			            style={{textAlign: 'center'}}
			            id="login-menubar"
			            />


					<CardText>

						<div className="row" >
							<div className="col-xs-12" >
								<Email
									placeholder={default_labels.email_placeholder_content}
									label={default_labels.email}
									labelClassName="col-xs-12"
									wrapperClassName="col-xs-12"
								/>
								<Password
									checkbox_label={default_labels.show_checkbox_button}
									placeholder={default_labels.password_placeholder_content}
									label={default_labels.password}
									labelClassName="col-xs-12"
									wrapperClassName="col-xs-12"
								/>
								<RememberMe label={default_labels.remember_me}/>
							</div>
						</div>

						<RaisedButton
							onClick={this.clickLogin}
							id="login-btn"
							disabled={this.props.isLoading}
							label={(this.props.isLoading) ? default_labels.loading_button_content : default_labels.button_content}
							primary={true}
							fullWidth={true}
							style={{minWidth: '100%'}}
						/>

					</CardText>

					<div style={{padding: '0px 16px', textAlign: 'center', fontSize: 12}} >
					{
						this.context.project_names.xs == 'CW'?
														<LoginFacebook />
                            :
                            <span/>
                            }
						<FlatButton onClick={this._go.bind(this, '/signup')} href="/signup" id="signup-link" secondary={true} label={default_labels.sign_up_button_content}  />
						<FlatButton onClick={this._go.bind(this, '/forgot')} href="/forgot" id="forgot-link" secondary={true} label={default_labels.forgot_password_button_content} />
					</div>
					<div style={{padding: '0px 16px 8px 16px', textAlign: 'center', fontSize: 12}} >
						<FlatButton
							style={{width: '100%'}}
							onClick={this._go.bind(this, '/')}
							secondary={true}
							label={default_labels.back_to_home_page_button_content}
							href="/"
							id="home-link"
						/>
					</div>
				</Card>

			</Centerer>

		);
	}

});

var Login = ConnectsToStores(Login, [UserStore], getState);

module.exports = Login;