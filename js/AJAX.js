"use strict";

const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('load', ()=>{
        if(request.status == 200){
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRUB.value/data.current.usd).toFixed(2);
        }else{
            inputUSD.value = "Что-то пошло не так";
        }

    });
});






































/* const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => { //change
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, password);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); */

    /*request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            //console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = parseFloat(+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Что-то пошло не так";
        }
    }); */

    //Чаще в связке с XMLHttpRequest()
/*     request.addEventListener('load', ()=>{
        if(request.status === 200){
            //console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = parseFloat(+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Что-то пошло не так";
        }
    }); 

    // status 
    // statusText
    // response
    //readyState


/* }); */