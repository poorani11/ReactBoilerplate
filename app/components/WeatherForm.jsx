var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
       e.preventDefault();
           
       var location = this.refs.location.value;

       if(location.length > 0) {
         this.refs.location.value = '';
         this.props.onNewLocation(location);
       }
       
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
              <div>
                <input type = "text" ref = "location" placeholder="Enter Location" /> 
              </div>
               <button className="button expanded hollow">Get Weather</button> 
            </form> 
        );
    }
});
module.exports = WeatherForm;