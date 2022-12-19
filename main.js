const nro1 = document.querySelector('#nro1');
const nro2 = document.querySelector('#nro2');
const nro3 = document.querySelector('#nro3');
const nro4 = document.querySelector('#nro4');
const nro5 = document.querySelector('#nro5');
const nro6 = document.querySelector('#nro6');
const nro7 = document.querySelector('#nro7');
const nro8 = document.querySelector('#nro8');
const nro9 = document.querySelector('#nro9');
const nro0 = document.querySelector('#nro0');
const igual = document.querySelector('#igual');
const btnsuma = document.querySelector('#suma');
const limpiar = document.querySelector('#limpiar')
const pres = document.querySelector('#pantalla-res')

var resultado = 0;
var n1 = '',n2 = '';
var operadorClick = false;
var ultOpr;

function clean(){
    resultado = 0;
    n1 = 0;
    n2 = 0;
    return pres.innerHTML = '';

}

limpiar.addEventListener('click', () => clean());

nro1.addEventListener('click', () =>  {pres.innerHTML += 1; numero(1)})
nro2.addEventListener('click', () =>  {pres.innerHTML += 2; numero(2)})
nro3.addEventListener('click', () =>  {pres.innerHTML += 3; numero(3)})
nro4.addEventListener('click', () =>  {pres.innerHTML += 4; numero(4)})
nro5.addEventListener('click', () =>  {pres.innerHTML += 5; numero(5)})
nro6.addEventListener('click', () =>  {pres.innerHTML += 6; numero(6)})
nro7.addEventListener('click', () =>  {pres.innerHTML += 7; numero(7)})
nro8.addEventListener('click', () =>  {pres.innerHTML += 8; numero(8)})
nro9.addEventListener('click', () =>  {pres.innerHTML += 9; numero(9)})
nro0.addEventListener('click', () =>  {pres.innerHTML += 0; numero(0)})

btnsuma.addEventListener('click', () => {operar('+')})
igual.addEventListener('click', () => {pres.innerHTML = resultado})

function numero(n){
    if(operadorClick == false){
        n1 += n;
    }
    else{
        n2 += n;
    }
}


function suma(n1,n2){
    resultado = Math.floor(n1) + Math.floor(n2);
    n1 = 0;
    n2 = 0;
}

function resta(n1,n2){
    return n1 - n2;
}

function multiplicar(n1,n2){
    return n1 * n2;
}

function dividir(n1,n2){
    return n1 / n2;
}

function operar(op){
    if(ultOpr == undefined){
        ultOpr = op;
        operadorClick = true;
    }else{
    if(op == '+'){
        suma(n1,n2);
        pres.innerHTML = '';
        pres.innerHTML = resultado;
        }
    else if(op == '-')
        resta(n1,n2);
    else if(op == '*')
        multiplicar(n1,n2)
    else
        dividir(n1,n2)
    pres.innerHTML = resultado;
    }
}
