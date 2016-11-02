//Creating Objects 2

function VehicleConstructor(name, num_wheels, num_pax, speed){
	var self = this;
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += self.speed;
	}
	this.name = name;
	this.num_wheels = num_wheels;
	this.num_pax = num_pax;
	this.speed = speed
	this.makeNoise = function() {
		console.log("vrooooommmmm")
	}
	this.move = function() {
		updateDistanceTravelled();
		this.makeNoise();
	}
	this.checkMiles = function() {
		console.log('the distance tranvelled is', distance_travelled)
	}
}

var bike = new VehicleConstructor('GT', 2, 1, 20);
bike.makeNoise();
bike.makeNoise = function() {
	console.log("ring ring!")
}
bike.makeNoise();

var sedan = new VehicleConstructor('Alero', 4, 5, 100);
sedan.makeNoise = function() {
	console.log("Honk Honk!");
}

var bus = new VehicleConstructor('Schoolbus', 6, 30, 80);
bus.pickUp = function(num) {
	console.log("picking up", num, " pax!");
	bus.num_pax += num;
	console.log("pax on the bus:", bus.num_pax)
}

bus.pickUp(5);
bus.move();
bus.checkMiles();