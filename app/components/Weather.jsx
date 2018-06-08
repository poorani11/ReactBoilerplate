var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        };
    },
    handleNewLocation: function (location) {
        var self = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        openWeatherMap.getTemp(location).then(function (temp) {
            self.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
        }, function(e){
            self.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;
        function renderMessage (){
          if (isLoading) {
            return <h3 className="text-center">Fetching Weather...</h3>;
          } else if (temp && location) {
            return <WeatherMessage location={location} temp={temp}/>;
          }
        }
        
        function renderError () {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }       
        return (
            <div>
              <h1 className="text-center page-title">Get Weather</h1>
              <WeatherForm onNewLocation={this.handleNewLocation}/>
              {renderMessage()}
              {renderError()}
            </div>
            
        );
    }
});

module.exports = Weather;
