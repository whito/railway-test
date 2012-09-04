exports.routes = function (map) {

    map.resources('users');

    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    //map.all(':controller/:action');
    //map.all(':controller/:action/:id');

	// test routes 
	map.get('login', 'users#login');
	map.post('login', 'users#testpost');

};