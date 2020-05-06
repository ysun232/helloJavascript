/*
This is the start of functions for javascript
 */
function reusableFunction(a,b){
    console.log(a + " " + b);
}
// reusableFunction("Hello", "World!");

//if you forget to add var infront of a variable, it will become a global variable
let myGlobal = 10;
function fun2() {
    var output="";
    if (typeof myGlobal != "undefined"){ //this will become a very common trend
                                        // dont forget about this way of defining loops
        output += "myGlobal variable is: "+myGlobal;
    }
    console.log(output);
    return console.log(myGlobal += 10);
} //Function should return 10 and 20
fun2();
