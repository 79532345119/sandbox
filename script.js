'use strict';

// callback function // простейший пример callback-функции
function learn(arg, callbackFn) {
    console.log(arg);
    callbackFn();
}
function second() {
    console.log("вторая");
}
learn("FIRST", second);




// recurcion for array / простейший перебор массива рекурсией
let arr = [1, 2, 3, 4, 5, [11, 12, 13]];

function show(arr) {
    arr.forEach(element => {
        if(typeof(element) == 'object') {
            show(element);
        } else {
            console.log(element);
        }
    });
}
show(arr);



// recurcion for object / простейший перебор объекта рекурсией
let obj = {
    name: "John",
    age: 25,
    job: ["one", "two", "three"],
    nums: [1, 2, 3, [11, 12, 13]]
    };
function showObj(obj) {
    for(let key in obj) {

         if(typeof(obj[key]) == 'object') {
            showObj(obj[key]);
            
        } else {
            console.log(obj[key]);

        } 
    }
}
showObj(obj);

