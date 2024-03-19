
/////   programs in anonymous function & IIFE   //////


///   A)   print odd number in  an array 

//  iife function

(function(){
    var b = "";
 for(var i = 0;i <= 10;i++){
     var a = "";
  if(i%2 != 0){
   a = i;
  }
  if(b != ""){
  b += " " + a;
  }else{
      b = a;
  }
 }
 console.log(b)
})();

//  anonymous function 

var result = function (){
    var b = "";
 for(var i = 0;i <= 10;i++){
     var a = "";
  if(i%2 != 0){
   a = i;
  }
  if(b != ""){
  b += " " + a;
  }else{
      b = a;
  }
 }
 console.log(b)
}

result();

//// b) Convert all the strings to title caps in a string array

//  iife function

(function(){
    var str = "the name is srini";
    var arr = str.split(" ");
    var result = "";
    for(var i = 0;i <= arr.length - 1;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    result = arr.join(" ");
    console.log(result);
 })();

//  anonymous function 

var run = function(){
    var str = "the name is srini";
    var arr = str.split(" ");
    var result = "";
    for(var i = 0;i <= arr.length - 1;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    result = arr.join(" ");
    console.log(result);
 };
 
 run();

//// c) Sum of all numbers in an array

//  iife function

(function(){
    var str = "1 2 3 4";
    var arr = str.split(" ");
    var result = 0;
    for(var i = 0; i <= arr.length - 1; i++){
      result += parseInt(arr[i]);
    }
    console.log(result);
  })();

//  anonymous function 

var solution = function(){
    var str = "1 2 3 4";
    var arr = str.split(" ");
    var result = 0;
    for(var i = 0; i <= arr.length - 1; i++){
      result += parseInt(arr[i]);
    }
    console.log(result);
  }
  solution();

//// d) Return all the prime numbers in an array

//  iife function

(function(){
    var result = [];
    for(var i = 2 ; i <= 10 ; i++){
        if( i%2 != 0){
            result.push(i);
        }
    }
    console.log(result);
})();

//  anonymous function

var solution = function(){
    var result = [];
    for(var i = 2 ; i <= 10 ; i++){
        if( i%2 != 0){
            result.push(i);
        }
    }
    console.log(result);
}
solution();

///////// e) Return all the palindromes in an array

//  iife function

(function(){
    var a = [];
    var result = "madam";
   var reverse = result.split("").reverse().join("");
   if(result == reverse){
       for(var i = 0; i <= result.length - 1;i++){
           a.push(result[i]);
       }
   }else{
       // it is not palindrome
   }
    console.log(a);
})();

//  anonymous function

var solution = function(){
    var a = [];
    var result = "madam";
   var reverse = result.split("").reverse().join("");
   if(result == reverse){
       for(var i = 0; i <= result.length - 1;i++){
           a.push(result[i]);
       }
   }else{
       // it is not palindrome
   }
    console.log(a);
}
solution();

///////// f) Return median of two sorted arrays of the same size.

//  iife function

(function(){
   let arr1 = [1,4,7];
   let arr2 = [2,6,8];
   let a = arr1.length;
   let b = Math.floor(a/2);
   let c = (arr1[b] + arr2[b])/2;
   console.log(c);
})();

//  anonymous function

var solution = function(){
   let arr1 = [1,4,7];
   let arr2 = [2,6,8];
   let a = arr1.length;
   let b = Math.floor(a/2);
   let c = (arr1[b] + arr2[b])/2;
   console.log(c);
}
solution();

//////  g) Remove duplicates from an array

//  iife function

(function(){
   let arr = [1,2,3,3,4,5,5,3,6,7,7];
  let res = Array.from(new Set(arr));
  console.log(res);
})();

//  anonymous function

var solution = function(){
   let arr = [1,2,3,3,4,5,5,3,6,7,7];
  let res = Array.from(new Set(arr));
  console.log(res);
}
solution();

//////////  h) Rotate an array by k times

//  iife function

(function(){
   let arr = [1,2,3,4,5];
   let k = 2;
   let n = arr.length;
   for(var i = 0;i < k;i++){
       var lastElement = arr[n-1];
       for(var j = n - 1; j > 0 ;j--){
           arr[j] = arr[j-1];
       }
       arr[0] = lastElement;
       var res = arr;
   }
  
  console.log(res);
})();

//  anonymous function

var solution = function(){
   let arr = [1,2,3,4,5];
   let k = 2;
   let n = arr.length;
   for(var i = 0;i < k;i++){
       var lastElement = arr[n-1];
       for(var j = n - 1; j > 0 ;j--){
           arr[j] = arr[j-1];
       }
       arr[0] = lastElement;
       var res = arr;
   }
  
  console.log(res);
}
solution();


// Programs in Arrow function


//  a) Print odd numbers in an array

var b = Array.from({length:11},(_,i) => i).filter(i => i%2 !== 0).join(' ');
console.log(b)

//  b) Convert all the strings to title caps in a string array

var b = "the name is srini".split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(b)

//  c) Sum of all numbers in an array

var b = [1,2,3,4,5].reduce((acc,curr) => acc + curr,0);
console.log(b)

//  d) Return all the prime numbers in an array

var b = Array.from({length:20},(_,i) => i+1).filter(num => num >1 && (num === 2 || Array.from({length:Math.floor(Math.sqrt(num))},(_,j) => j+2).every(d => num%d !== 0)));
console.log(b)

//  e) Return all the palindromes in an array

var b = str => str === str.split('').reverse().join('');
console.log(b('madam') ? 'it is palindrome' : 'it is palindrome');





