// This is the abstract structure queue

function queueFunction(arr, item){
    arr.push(item);
    return arr.shift();
}

let arr1 = [1,2,3,4,5];

console.log("Before change: " + arr1);
console.log(queueFunction(arr1,6));
console.log("After change: " + arr1);
