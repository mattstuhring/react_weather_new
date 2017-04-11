var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  getInitialState: function() {
    return {
      location: ''
    }
  },

  handleChange: function(e) {
    this.setState({ location: e.target.value });
  },

  onSearch: function(e) {
    e.preventDefault;

    var location = this.state.location;

    // Converts spaces in the Url path -> %20
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.state.location = '';

      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render: function() {
    var {location} = this.state;

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" value={location} placeholder="Search weather by city" onChange={this.handleChange}/>
              </li>
              <li>
                <input type="submit" className="button" value="Get weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
