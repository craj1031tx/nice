//mathlib.js
module.exports = {
	add: function(num1, num2){
		return num1+num2;
	},
	multiply: function(num1,num2){
		return num1*num2;
	},
	square: function(num1){
		return num1*num1;
	},
	random: function(){
		return random1();
	}
}
var random1 = function(){
	num = Math.round(Math.random()*100);
	if(num >= 0 && num <= 35){
			return num
	}
	else{
		return random1();
	}
}
