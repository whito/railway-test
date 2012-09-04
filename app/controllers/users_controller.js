load('application');


// CRUD actions removed for test

action(function login() {
	console.log("GET called for custom login action");
	this.title= "Login Page";
	layout("login");
    render({
        title: this.title
    });
});

action(function testpost() {
	console.log("-------------> Test POST was called");
	send(200);	
});