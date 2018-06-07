var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 88
        };
    },
    handleNewLocation: function (location) {
        var self = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            self.setState({
            location: location,
            temp: temp
          });
        }, function(errorMessage){
            alert(errorMessage);
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
