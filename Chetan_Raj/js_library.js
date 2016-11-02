//JavaScript Library

var _ = {
   map: function(arr, callback) {
     for(i = 0; i < arr.length; i++){
		arr[i] = callback(arr[i]);
     }
     return arr
   },
   reduce: function(arr, callback, start) { 
     start = start;
     for(var i = 0; i<arr.length; i++){
     	start = callback(start, arr[i])
     }
     return start;
   },
   find: function(arr, callback) {   
     for(i = 0; i < arr.length; i++){
     	if(callback(arr[i])){
     		return (arr[i]);
     	}
     }
     return 'not present'
   },
   filter: function(arr, callback) { 
     new_list = []
     for(i =0; i<arr.length;i++){
     	if(callback(arr[i])){
     		new_list.push(arr[i]);
     	}
     }
     return new_list
   },
   reject: function(arr, callback) { 
     new_list = [];
     for(var i=0; i<arr.length; i++){
     	if(!callback(arr[i])){
     		new_list.push(arr[i]);
     	}
     }
     return new_list
   }
 }

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// console.log(sum);

// var somethingsomething = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 3; });
// console.log(somethingsomething)

// var findthis = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(findthis)

// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); 

// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(odds);