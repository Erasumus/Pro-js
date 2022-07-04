"use strict";
console.log("Получаем запрос...");
const req = new Promise((resolve, reject) => { //resolve обещание выполнено, reject невыполнено
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

       resolve(product);
    }, 2000);
});

req.then((product)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            product.status = 'order';
            resolve(product);
        }, 2000);
    }).then(data => {
        data.modify = true;
        return data;
    }).then(data => {
        console.log(data);
    }).catch(()=>{
        console.log("Произошла ошибка");
    }).finally(()=>{
        console.log("Конец");
    });
});

////////////////////////////////////////////////////

const test = time => {
    return new Promise(resolve =>{
        setTimeout(() => resolve(), time);
    });
};

/* test(1000).then(() => console.log('1000ms'));
test(1000).then(() => console.log('2000ms')); */

Promise.all([test(1000), test(2000)]).then(() =>{
    console.log("Promise all");
}).catch(() => {
    console.log("Ошибка");
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('First promise');
});


