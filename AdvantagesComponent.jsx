import React from 'react';

import styled from 'styled-components';
import Link from 'react-router/lib/Link';

const ChooseUsStyled = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #FFFFFF;
	@media (min-width: 1199px) {
	    padding-bottom: 50px;
	    padding-top: 70px;
	}
`;
const SpecialContainerStyled = styled.div`
	@media (min-width: 1200px) {
		 width: 970px !important;
	}
`;
const ChooseUsTitleStyled = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
    margin-top: 15px;
`;
const ChooseUsDescriptionStyled = styled.p`
    font-size: 18px;
    margin: 0 0 10px;
    color: #474747;
    opacity: 0.8;
`;
const FeatureStyled = styled.div`
    text-align: center;
`;
const FeatureTitleStyled = styled.h4`
    display: block;
    font-weight: 400;
    font-size: 19px;
    color: #474747;
    margin-top: 25px;
    text-align: center;
`;
const HrStyled = styled.hr`
    width: 12%;
    height: 2px;
    padding: 0px;
    background: #5F5F5F;
    margin: 10px auto;
`;
const FeaturePStyled = styled.p`
    font-size: 15px;
    color: #797979;
    margin-top: 10px;
    line-height: 24px;
    text-align: center;
`;
const OrderButtonContainerStyled = styled.div`
    text-align:center;
	  margin-top: 28px !important;
`;
const OrderButtonStyled = styled(Link)`
    color: #FFFFFF;
    margin-top: 15px;
    text-transform: none;
    -webkit-cursor: pointer;
    cursor: pointer;
    background: #ed4e4d;
    padding: 16px 18px;
    border-radius: 11px;
    font-size:22px;
    display: inline-block;
    box-shadow:inset rgba(158,0,0,0.8) 0 -7px 8px,inset rgba(255,255,255,.2) 0 3px 8px,rgba(0,0,0,.8) 0 3px 8px -3px;
    &:hover{
      background:#ff3b42 !important;
     }
     &:focus{
      background:#ff3b42 !important;
      color:#FFFFFF;
     }
`;
var AdvantagesComponent = React.createClass({
	render: function() {
    var features_info = [
      {
        key: 1,
        image: 'clock',
        title: '24/7 Support',
        alt: "24/7 Support writing service from Rocketpaper.net",
        width: "70px",
        content: 'Not only we provide our customers with the most professional writing services of unmatched quality,but when ordering essay writer help from Rocket Paper. You are treated like a friend. We are the best round-the-clock backup.'
      },
      {
        key: 2,
        image: 'note',
        title: 'Free Revisions',
        alt: "Free Revision with Rocketpaper.net",
        width: "70px",
        content: 'Not only we provide our customers with the most professional writing services of unmatched quality,but when ordering essay writer help from Rocket Paper. You are treated like a friend. We are the best round-the-clock backup.'
      },
      {
        key: 3,
        image: 'truck_4',
        title: 'On-time Delivery',
        alt: "On time delivery from Rocketpaper.net",
        width: "70px",
        content: 'Only You decide whether your custom written essay 100% meets your requirements and expectations. We are not done with your paper until You are completely satisfied with your paper. We set exemplary customer service.'
      },
      {
        key: 4,
        image: 'check',
        title: '100% Plagiarism Free',
        alt: "Plagiarism Free with writing service Rocketpaper.net",
        width: "70px",
        content: 'Each custom written assignment is unique and has no plagiarism at all. Every essay is checked for any instances of similarity at all stages of your order to make sure you receive the final product exactly as you specified it initially. TurnItIn is not an issue for us!'
      },
      {
        key: 5,
        image: 'medal',
        title: 'Hight quality papers',
        alt: "Hight quality writing help with Rocketpaper.net",
        width: "70px",
        content: 'More than 1000 satisfied customers chose and are still using our essay writing help services and we never let them down. Satisfaction is guaranteed with each and every single completed custom essay. You will not be disappointed.'
      },
      {
        key: 6,
        image: 'man',
        title: 'Individual approach to every client',
        alt: "Individual approach to every client from Rocketpaper.net support team",
        width: "60px",
        content: 'Getting in touch with us will make your day. You ask for academic essay writing help? You got it. Relax and let us easily deal with your homework online. Our professional essay writers will take care of it. Chats with us will make your day!'
      }
    ];
    var features = features_info.map(function(item, index){
        return (
            <FeatureStyled style={{marginTop:50}} key={item.key} className="col-md-4 col-sm-12">
                <img src={require('i/rp/'+item.image+'.png')} width={item.width}
                     alt={item.alt}/>
                <FeatureTitleStyled className="regular">{item.title}</FeatureTitleStyled>
                <HrStyled/>
                <FeaturePStyled className="regular">{item.content}</FeaturePStyled>
            </FeatureStyled>
        );
    });
		return (
			<ChooseUsStyled className="">
              <SpecialContainerStyled className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-12 col-md-offset-2">
                    <ChooseUsTitleStyled className="medium">Why choose our essay writing help?</ChooseUsTitleStyled>
                    <ChooseUsDescriptionStyled className="regular">Buy essay online for the best price of the top-notch quality </ChooseUsDescriptionStyled>
                  </div>
                </div>
                <div className="row flow-offset-1">
                {features}
                   <OrderButtonContainerStyled className="col-md-4 col-sm-12">
                    <OrderButtonStyled className="medium" to="new-order">
                       Order now
                    </OrderButtonStyled>
                  </OrderButtonContainerStyled>
                </div>
              </SpecialContainerStyled>
            </ChooseUsStyled>
		);
	}

});

module.exports = AdvantagesComponent;