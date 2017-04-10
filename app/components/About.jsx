var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather app built on React</p>
      <p>
        Here are some of the tools that I have used:
      </p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - This was the JavaScript framework that I have used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map was used to search for weather by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
