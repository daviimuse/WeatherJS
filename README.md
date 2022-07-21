# WeatherJS
## _A simple Javascript project that can show you weather informations about a locatioon you choose_

> Using 'Weather-JS', a node module for obtaining weather information

### Installation

```
npm install weather-js
```
### Usage

```
var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});
```

### I divided the Web App ideas in few steps
- [ ] Initialising website;
- [ ] FrontEnd development;
- [ ] Working with Weather-JS;
- [ ] Adding a user login/registration for handle favorites cities;
- [ ] Final adjustments;

> [Weather-JS Official Docs](https://openbase.com/js/weather-js).
