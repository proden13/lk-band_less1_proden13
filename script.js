// console.log("First");
// setTimeout(() => {
//     console.log("Second");
// }, 0);
// setTimeout(() => {
//     console.log("Forth");
// }, 10);
// console.log("Third");
/*
Мама готовит ужин и попросила дочку порезать хлеб.
так же мама попросила сына сходить в магазин за хлебом.

? брат пошел в магазин
- когда вернется брат ?
- а точно ли брат вернется с хлебом ?
! Сестра с ножом ждет брата у двери
- сестра занимается своими делами
- когда будет хлеб, тогда она его порежет

*/

let p1 = new Promise(function(resolve, reject){
    let n = Math.random();
    if(n > 0.5) {
        resolve("Хлеб был куплен.");
    } else {
        reject("Проблемка с хлебушком =(")
    }
});
let p2 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if(n > 0.2) {
        resolve("Хлебушек нарезан");
    } else {
        reject("Что-то пошло не так");
    }
})

p1
    .then(function(result) {
        console.log(result);
        return p2;
    }) 
    .then(function(result2) {
        console.log(result2);
        console.log("Ужин удался");
    })
    .catch(function(err) {
        console.warn(err)
    })