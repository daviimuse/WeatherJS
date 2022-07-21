const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
	let city = req.query.city;
	var request = require('request');
	request(`https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=a421f8d94ecd45f88adffba81708fe1f`,
		function(error, response, body) {
			let data = JSON.parse(body);
			console.log(body);
			if (response.statusCode === 200) {
				res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}, the temperature is ${data.list[0].main.temp}`);
				//${(data.list[0].main.temp-275).toFixed(2)}C
			}
		}
	);
});

app.listen(3000, () => console.log('Server started on port 3000'));