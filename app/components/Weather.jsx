var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        };
    },
    handleNewLocation: function (location) {
        this.setState({
            location: location,
            temp: 23
        });
    },
    render: function() {
        var {temp, location} = this.state;
        return (
            <div>
              <h2>Get Weather</h2>
              <WeatherForm onNewLocation={this.handleNewLocation}/>
              <WeatherMessage location={location} temp={temp}/>
            </div>
            
        );
    }
});

module.exports = Weather;
