//creating objects 3
function VehicleConstructor(name, num_wheels, num_pax, speed){
	this.distance_travelled = 0;
	this.name = name;
	this.num_wheels = num_wheels;
	this.num_pax = num_pax;
	this.speed = speed
}

VehicleConstructor.prototype.makeNoise = function(){
	console.log('vrooooommmmm');
}
VehicleConstructor.prototype.checkMiles = function() {
	console.log('the distance tranvelled is', this.distance_travelled)
}
VehicleConstructor.prototype.updateDistanceTravelled = function() {
	this.distance_travelled += this.speed;
}
VehicleConstructor.prototype.move = function() {
		this.updateDistanceTravelled();
		this.makeNoise();
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
bus.makeNoise();
bus.checkMiles();
bus.updateDistanceTravelled();
bus.move();
bus.checkMiles();