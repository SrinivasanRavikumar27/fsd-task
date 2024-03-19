
////   1)	Rest countries based on Asia region using filter:

var request = new XMLHttpRequest();
// request open
request.open("GET","https://restcountries.com/v3.1/all");
// request onload -- where fucntion works
request.onload = function(){
    // using status code 
    if(request.status == 200){
        // if request sucessfull 

        // convert json to object 
       var details = JSON.parse(request.responseText);

        console.log(details);// to see data

            var result = details.filter((country) => country.region == "Asia");

            console.log(result);
  
    }else{
        // else request fail
        console.log("The Request failed and code is " + request.status)
    }
};
// request send
request.send();



////   2)	Rest countries based on 2 lakh population by filter:     

var request = new XMLHttpRequest();
// request open
request.open("GET","https://restcountries.com/v3.1/all");
// request onload -- where fucntion works
request.onload = function(){
    // using status code 
    if(request.status == 200){
        // if request sucessfull 

        // convert json to object 
       var details = JSON.parse(request.responseText);

        console.log(details);// to see data

            var result = details.filter((country) => country.population < 2000000);

            console.log(result);
  
    }else{
        // else request fail
        console.log("The Request failed and code is " + request.status)
    }
};
// request send
request.send();

///  3)	Name, capital, and flag using foreach:

var request = new XMLHttpRequest();
// request open
request.open("GET","https://restcountries.com/v3.1/all");
// request onload -- where fucntion works
request.onload = function(){
    // using status code 
    if(request.status == 200){
        // if request sucessfull 

        // convert json to object 
       var details = JSON.parse(request.responseText);

        console.log(details);// to see data

        details.forEach(element => {
            var cap = "";
            if(element.hasOwnProperty("capital")){
              cap = element.capital[0];
            }else{
              cap = "";
            }
            console.log("Country Name: " + element.name.official + "\n" + 
            "Country capital: " + cap + "\n" + "Country flag: " + element.flag);
            // console.log(element.capital[0]);
        });    
               
      }else{
        // else request fail
        console.log("The Request failed and code is " + request.status)
    }
};
// request send
request.send();


//////   4)	Total population of countries using reduce function:

var request = new XMLHttpRequest();
// request open
request.open("GET","https://restcountries.com/v3.1/all");
// request onload -- where fucntion works
request.onload = function(){
    // using status code 
    if(request.status == 200){
        // if request sucessfull 

        // convert json to object 
       var details = JSON.parse(request.responseText);

        console.log(details);// to see data

        var result = details.reduce( (acc,result) => acc + result.population,0);

        console.log(result);
               
      }else{
        // else request fail
        console.log("The Request failed and code is " + request.status)
    }
};
// request send
request.send();


////  5)	Print country which has US dollars as currency:

   // request define
   var request = new XMLHttpRequest();
   // request open
   request.open("GET","https://restcountries.com/v3.1/all");
   // request onload -- where fucntion works
   request.onload = function(){
       // using status code 
       if(request.status == 200){
           // if request sucessfull 
   
           // convert json to object 
          var details = JSON.parse(request.responseText);
   
           console.log(details);// to see data
   
           var result = details.filter((res) => res.currencies && res.currencies.USD);
           result.forEach(element => console.log(element.name.common));
                  
         }else{
           // else request fail
           console.log("The Request failed and code is " + request.status)
       }
   };
   // request send
   request.send();



