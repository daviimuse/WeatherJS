//API file
var weather = require('weather-js');

weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});