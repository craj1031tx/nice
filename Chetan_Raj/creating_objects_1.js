//Creating Objects 1

function VehicleConstructor(name, num_wheels, num_pax){
	var car = {};
	car.name = name;
	car.num_wheels = num_wheels;
	car.num_pax = num_pax;
	car.makeNoise = function() {
		console.log("vrooooommmmm")
	}
	return car
}

var bike = VehicleConstructor('GT', 2, 1);
bike.makeNoise();
bike.makeNoise = function() {
	console.log("ring ring!")
}
bike.makeNoise();

var sedan = VehicleConstructor('Alero', 4, 5);
sedan.makeNoise = function() {
	console.log("Honk Honk!");
}

var bus = VehicleConstructor('Schoolbus', 6, 30);
bus.pickUp = function(num) {
	console.log("picking up", num, " pax!");
	bus.num_pax += num;
	console.log("pax on the bus:", bus.num_pax)
}

bus.pickUp(5);