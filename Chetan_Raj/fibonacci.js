function fib(){
	var first = 0;
	var second = 1;
	var temp;
	function nacci(){
		if(first == 0){
			console.log(first);
			console.log(second);
		}
		temp = first+second;
		first = second;
		second = temp;
		console.log(second)
	}
	return nacci;
}

var fibCounter = fib();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
