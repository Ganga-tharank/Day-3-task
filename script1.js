let obj1 = { name: "person 1", age: 5};
let obj2 = { age: 5, name: "person 1" };
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);


if(str1 === str2){
    console.log("The object have the same properties(order-independent).");
}else {
    console.log("The object are different.");
}
