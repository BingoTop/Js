var promise1 = new Promise(function(resolve,reject){
    global.setTimeout(function(){

        console.log("첫번째 Promise 완료");
        resolve("1111");
    },Math.random() * 20000 + 1000);
});

var promise2 = new Promise(function(resolve,reject){
    global.setTimeout(function(){

        console.log("두번째 Promise 완료");
        resolve("2222");
    },Math.random() * 10000 + 1000);
});

Promise.all([promise1,promise2]).then(function(values){
    console.log("모두 완료됨",values);
});
