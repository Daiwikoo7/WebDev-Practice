// 1. ways to print in javascript
// document.write("this is document write");
//  console.warn("this is a warning");
// console.error("this is an error");

// 2. javascript console api
// console.log("hello world", 4 + 2, "another log");
// document.write("this is document write");
// console.warn("this is a warning");
// console.error("this is an error");
        // alert("goru ass hole");


        // javasript variables

        // 3. what are variables - containers to store values 

        var number1 = 8
        var number2 = 7

      //  console.log(number1 + number2);

        // multi 
        // line 
        // comments 
 // ctrl + forward //

           // or


           /*
           multi 
           line 
            comments
            */

 // 4. data types in javascript

 // numbers
  var num1 = 33;
  var num2 = 55;
  var num3 = 88;

  // string

  var str1 = "this is a string" ;
  var str2 = 'this is also string';

  // objects

  var marks = {
      rohit:55,
      goru:33,
      raju:100
  }

  //console.log(marks)

  // Booleans

  var a = true;
  var b = false;

 // console.log(a, b)

  var und;
 // console.log(und);

  var n = null;
 // console.log(null);
/*
  at a very high level, there are two types of data types in javascript

  1. primitive data types: undefine, null, number, string, boolean, symbol
  2. reference data types: arrays and objects
  */

  var arr = [1,2,3,4,5]

  // console.log(arr);

// 5. operators in javascript

// arithmetic operators

var a = 55
var b = 45
console.log("the value of a + b is", a+b );
console.log("the value of a - b is", a-b );
console.log("the value of a * b is", a*b );
console.log("the value of a / b is", a/b );

// assingment operators 

var c = b;
// c += 2;
// console.log(c);
   
// comparison operators

var x = 55;
var y = 45;

// console.log(x > y);
// console.log(x < y);
// console.log(x == y);
// console.log(x >= y);

// logical operators
 
//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// logical or

// console.log(true || true); 
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// logical not

// console.log(!true); 
//  console.log(!false);

// function in javascript

function avg(a, b){
 c = (a + b)/2;
 return c ;
}

// dry principle - do not repeat yourself

c1 = avg(4, 8)
c2 = avg(5, 3)
// console.log(c1, c2);

// conditional in javascript

var age = 44;
// if (age > 10)
// {
//     console.log("you are not a kid");
// }
// else
// {
//     console.log("yor are a kid");
// }
/*
if (age > 32)
{
    console.log("32 se badha hoon me");
}
else if (age >28)
{
    console.log("28 se badha hoon me");
}

else if (age >22)
{
    console.log("22 se badha hoon me");
}
else if (age >18)
{
    console.log("18 se badha hoon me");
}

else {
    console.log("not an adult");
}
console.log("end of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

for(var i=0;i<arr.length;i++)
{
console.log(arr[i]);
}
