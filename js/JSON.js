"use strict";

const AM = {
    name: 'Alex',
    tel: '+777777777',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

//Глубокий клон AM
const clone = JSON.parse(JSON.stringify(AM)); //Stringify -> JSON // Parse -> object JS
clone.parents.mom = 'Anna';
console.log(AM);
console.log(clone);

//Поверхостный клон, когда создаешь клон и изменения клона влияет на основной объект
/* const clone2 = AM;
clone2.name = "test";
console.log(AM);
console.log(clone2); */



