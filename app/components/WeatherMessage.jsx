var React =  require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var city = this.props.city;
        return (
            <div>
                <h1>The city is {city}!</h1>
            </div>
        );
    }
});

module.exports = WeatherMessage;