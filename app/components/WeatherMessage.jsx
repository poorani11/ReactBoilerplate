var React =  require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
          <h3 className="text-center">The temp is {temp} in {location}!</h3>
         </div>
    );
};


module.exports = WeatherMessage;