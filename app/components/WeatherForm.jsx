var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
       e.preventDefault();
           
       var city = this.refs.city.value;

       if(city.length > 0) {
         this.refs.city.value = '';
         this.props.onNewCity(city);
       }
       
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
              <div>
                <input type = "text" ref = "city" placeholder="Enter City" /> 
              </div>
               <button>Submit</button> 
            </form> 
        );
    }
});
module.exports = WeatherForm;