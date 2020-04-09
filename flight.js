var unirest = require("unirest");

var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01");

req.query({
	"inboundpartialdate": "2020-12-01"
});

req.headers({
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "Lhlu6DNa7ymshrZKBtPsub9DnSvep1v77q5jsn4uPI0mi0RsbJ"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});