/* This is the abstract structure queue
With this function, it will add the item to the back of the queue
while returning the element that was removed
 */



//change the item variable to
// less than 5, between 5 and 10 and more than 10 to obtain different results
let item1 = 2;
let item2 = 6;
let item3 = 15;
let arr1 = [1,2,3,4,5];


function queueFunction(arr, next){
    arr.push(next);
    if(next < 5) {
        return ("This will return the element that was removed from queue: "
            + arr.shift() + " \nand we added a small item: " + next);
    } else if( next > 5 && next < 10){
        return ("This will return the element that was removed from queue: "
            + arr.shift() + " \nand we added a medium item: " + next);
    } else {
        return ("This will return the element that was removed from queue: "
            + arr.shift() + " \nand we added a large item: " + next);
    }
}

//The changes that are made to the queue are permanent
console.log("Before change: " + arr1);
console.log(queueFunction(arr1,item1));
console.log("After change: " + arr1);
console.log(queueFunction(arr1,item2));
console.log("After change: " + arr1);
console.log(queueFunction(arr1,item3));
console.log("After change: " + arr1);

/*
Switch statement can be a good replacement for too many else if statements
personal preference though
 */
