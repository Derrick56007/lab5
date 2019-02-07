var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
    var d = {
        'name' : request.query.name,
        'description' : request.query.description,
        'imageURL' : 'http://lorempixel.com/400/400/people'
    };

    data.friends.push(d);

    response.render('index', data);
};