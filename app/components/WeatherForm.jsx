var React = require('react');

var WeatherForm = React.createClass({
  getInitialState: function() {
    return {
      location: ''
    }
  },

  handleChange: function(e) {
    this.setState({ location: e.target.value });
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.state.location;

    if (location.length > 0) {
      this.state.location = '';

      this.props.onSearch(location);
    }
  },

  render: function() {
    var {location} = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="search" value={location} placeholder="Search weather by city" onChange={this.handleChange}/>
        </div>
        <div>
          <button className="button expanded hollow" type="submit">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
