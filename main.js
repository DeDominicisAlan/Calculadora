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
const btnresta = document.querySelector('#resta');
const btnprod = document.querySelector('#producto');
const btndiv = document.querySelector('#division');
const limpiar = document.querySelector('#limpiar')
const pres = document.querySelector('#pantalla-res')

var resultado;
var n1 = '',n2 = '';
var operadorClick = false;
var ultOpr;

function clean(){
    resultado = 0;
    n1 = '';
    n2 = '';
    pres.innerHTML = '';

}

limpiar.addEventListener('click', () => clean());

nro1.addEventListener('click', () =>  {numero(1)})
nro2.addEventListener('click', () =>  {numero(2)})
nro3.addEventListener('click', () =>  {numero(3)})
nro4.addEventListener('click', () =>  {numero(4)})
nro5.addEventListener('click', () =>  {numero(5)})
nro6.addEventListener('click', () =>  {numero(6)})
nro7.addEventListener('click', () =>  {numero(7)})
nro8.addEventListener('click', () =>  {numero(8)})
nro9.addEventListener('click', () =>  {numero(9)})
nro0.addEventListener('click', () =>  {numero(0)})

btnsuma.addEventListener('click', () => {operar('+')})
btnresta.addEventListener('click', () => {operar('-')})
btnprod.addEventListener('click', () => {operar('*')})
btndiv.addEventListener('click', () => {operar('/')})
igual.addEventListener('click', () => {eventoIgual(), pres.innerHTML = n1, console.log(n1)})

function numero(n){
    pres.innerHTML += n;
    if(operadorClick == false){
        n1 = pres.innerHTML;
        
    }
    else{
        n2 += `${n}`;
    }
    console.log(n1+' '+n2)
}

function suma(){
    n1 = Math.floor(n1) + Math.floor(n2);
    console.log(n1)
}

function resta(){
    n1 = Math.floor(n1) - Math.floor(n2);
    console.log(n1)
}

function multiplicar(){
    n1 = Math.floor(n1) * Math.floor(n2);
    console.log(n1)
}

function dividir(){
    n1 = Math.floor(n1) / Math.floor(n2);
    console.log(n1)
}

function eventoIgual(){
    console.log(n1+' eventoigual '+n2)
    if(ultOpr == '+'){
        suma();
    }else if(ultOpr == '-'){
        resta();}
    else if(ultOpr == '*'){
        multiplicar();}
    else if(ultOpr == '/'){
        dividir();}
    ultOpr = undefined;
}

function operar(op){
    pres.innerHTML = '';
    ultOpr = op;
    if(operadorClick == false){
        operadorClick = true;}
    if(op == '+')
        suma();
    else if(op == '-')
        resta();
    else if(op == '*')
        multiplicar();
    else if(op == '/')
        dividir();
    n2 = '';
}
