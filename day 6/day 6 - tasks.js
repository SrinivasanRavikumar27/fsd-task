
///   movie base class  

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
    getPG(movies){
        return movies.filter(movie => movie.rating === "PG");
    }
}
var film = new Movie("Casino Royale","Eon Productions","PG13");
console.log(film);


///  Circle base class

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
   getRadius(){
      return this.radius;
   }
   
   setRadius(radius){
       return this.radius = radius;
   }
   
   getColor(){
       return this.color;
   }
   
   setColor(color){
       return this.color = color;
   }
   
   toString(){
    return `Circle[radius=${this.radius},color=${this.color}]`;
   }
   
   getArea(){
       return Math.PI * this.radius * this.radius;
   }
   
   getCircunference(){
       return 2 * Math.PI * this.radius;
   }
}
var round = new Circle(1.0,"red");
console.log(round);

console.log(round.toString());

round.setColor("blue");
round.setRadius(1.2);
console.log(round.toString());

console.log(round.getArea());

console.log(round.getCircunference());


////   Person base class

class Person{
    constructor(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    getPerson(){
        return "name of the person is " + this.name;
    }
}
var per = new Person("Srini","male",24);
console.log(per);


/////  Uber base class


class Uber{
    constructor(carName,price,otp,driverName,carColor,driverNumber,carType,pickup,drop){
        this.carName = carName;
        this.price = price;
        this.otp = otp;
        this.driverName = driverName;
        this.carColor = carColor;
        this.driverNumber = driverNumber;
        this.carType = carType;
        this.pickup = pickup;
        this.drop = drop;
    }
    getPerson(){
        return "name of the Driver is " + this.driverName;
    }
    
    fristRide(){
        return "50% offer coupon applied ,now price is "+this.price/2;
    }
    
    getPrice(){
        return this.price;
    }
    
    seatCapacity(){
        var seats = "";
        if(this.carType === "MINI"){
            seats = "one - four members only";
        }else if(this.carType === "SUV"){
            seats = "one - seven members only";
        }
        return seats;
    }
    
    getOtp(){
        return this.otp;
    }
    
    cancelRide(){
        return "Your ride Cancelled Sucessfully";
    }
    
    rideDetails(){
        return this.pickup + " to " + this.drop;
    }
    
}
var perRide = new Uber("Ford Mustang",123,2322,"srini","Blue",123445566,"SUV","Chennai","Goa");

console.log(perRide.getPerson());
console.log(perRide.getPrice());
console.log(perRide.fristRide());
console.log(perRide.seatCapacity());
console.log(perRide.getOtp());
console.log(perRide.rideDetails());
console.log(perRide.cancelRide());



