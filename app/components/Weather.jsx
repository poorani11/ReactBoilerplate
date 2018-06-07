var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        };
    },
    handleNewLocation: function (location) {
        var self = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function (temp) {
            self.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
        }, function(errorMessage){
            self.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;
        function renderMessage (){
          if (isLoading) {
            return <h3>Fetching Weather...</h3>;
          } else if (temp && location) {
            return <WeatherMessage location={location} temp={temp}/>;
          }
        }
        return (
            <div>
              <h2>Get Weather</h2>
              <WeatherForm onNewLocation={this.handleNewLocation}/>
              {renderMessage()}
            </div>
            
        );
    }
});

module.exports = Weather;
