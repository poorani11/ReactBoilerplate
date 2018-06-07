var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            city: 'NewYork',
        };
    },
    getInitialState: function () {
        return {
            city: this.props.city,
        };
    },
    handleNewCity: function (city) {
        this.setState({
            city: city
        });
    },
    render: function() {
        var city = this.state.city;
        return (
            <div>
              <h2>Get Weather</h2>
              <WeatherForm onNewCity={this.handleNewCity}/>
              <WeatherMessage city={city}/>
            </div>
            
        );
    }
});

module.exports = Weather;
