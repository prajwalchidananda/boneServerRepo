var express = require('express');
var app = express(); 
//var MongoClient = require("mongodb").MongoClient;



app.configure(
function()
{
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
}
);

app.get('/boneGet', 
	function(req,res)
	{
		
		 var items = [{name:'Giza Necropolis', location: 'Giza, Eqypt'},
		 	{name:'Great Wall of China', location: 'China'},
		 	{name:'Petra', location: 'Maan Governorate, Jordan'},
		 	{name: 'Colosseum', location: 'Rome, Italy'},
		 	{name: 'Chichen Itza', location: 'Yucatan, Mexico' },
		 	{name: 'Machu Picchu', location: 'Cuzco, Peru'},
		 	{name: 'Taj Mahal', location:'Agra, Uttar Pradesh, India'},
		 	{name: 'Christ the Redeemer', location: 'Rio de Janeiro, Brazil'}];
		res.send(items);
	}
);

app.post('/bonePost', function (req, res) {
  
  res.send('Got a POST request');
  console.log(req.body);
});



app.listen(process.env.PORT);
console.log('Listening on process.env.PORT');