let obj1 = {name:"person 1", age:5};
	let obj2 = {age:5,name:"person 1"};
	var result = false;
	
	if(Object.keys(obj1).length == Object.keys(obj2).length){
	    for(var key in obj1){
	        if(obj2.hasOwnProperty(key) && obj1[key] == obj2[key]){
	            result = true;
	        }
	    }
	    if(result){
	        display();
	    }
	}
	
	function display(){
	    console.log("In Both Objects key and values are same")
	    return true;
	}
