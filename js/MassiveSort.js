"use strict";

var importedFiles = [

    "file:///F:/image2.jpg",
    "file:///F:/image11.jpg",
    "file:///F:/image13.jpg",
    "file:///F:/image1.jpg",
   ];
   var customSort = function (a, b) {
       return (Number(a.match(/(\d+)/g))) - Number((b.match(/(\d+)/g)));
   }
   // use sort() and apply the customSort function
   console.log(importedFiles.sort(customSort));

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);


//map

const answers = ['iVAn', 'AnnA', 'Hello'];
const result = answers.map(item => {
    item = item.toLowerCase();
    const split = item.split("");
    const first = split[0].toUpperCase();
    const rest = [...split];
    rest.splice(0,1);
    const result = [first, ...rest].join("");
    
    return result;
});

console.log(result);


//every/some
//boolean

const some = [4, 'qwq', 'sfreferf'];
console.log(some.some(item =>{
    return typeof(item) === 'number';
}));

console.log(some.every(item =>{
    return typeof(item) === 'number';
}));



