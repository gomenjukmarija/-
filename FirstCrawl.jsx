var React = require('react');
var Calculator = require('pcl/Calculator');
var AdvantagesTop = require('pcl/AdvantagesTop');
// var OrderPresetsStore = require('st/OrderPresetsStore');
var Actions = require('../../actions');

import FirstCrawlCSS from './FirstCrawlCSS';
import FreeQuoteBlock from 'pcl/FreeQuoteBlock';

var FirstLineBlock = React.createClass({  


    render: function(){
        var data = {
            upperSlogan: 'ACADEMIC EDITING & PROOFREADING HELP',
            lowerSlogan: 'The easiest way to get professional proofreading service',
            qualityIconTitle: 'High quality',
            qualityIconText: 'The best qualified proofreaders will work on your paper',
            deliveryIconTitle: 'On Time delivery',
            deliveryIconText: 'No late submissions with our Proofreading services',
            supportIconTitle: '24/7 support',
            supportIconText: 'Our professional Support Team works round-the-clock to provide you with the best backup',
        };

        // var presets = OrderPresetsStore.get();
        // var route = this.props.route;
        // presets.map(function(preset) {

        //     if(preset.url == route) {
        //         data = preset;
        //     }
        // });

        return (
            <section className="top-background">
              <FirstCrawlCSS/>
                <div className="guy-block">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="top-form text-center form-for-client">
                                <h1 className="sub-heading" style={{lineHeight:1.4}}>{data.upperSlogan}</h1> // мой код!
                                <span className="yellow-span-header">{data.lowerSlogan}</span>
                            </div>
                        </div>
                    
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <Calculator />
                        </div>
                    </div>
                    <div className="row">
                        <AdvantagesTop data = {data}/>
                    </div>

                </div>
                <FreeQuoteBlock/>
            </section>
        );
    }
});

module.exports = FirstLineBlock;