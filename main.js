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
const resParcial = document.querySelector('#resultado-parcial');
const borrar = document.querySelector('#borrar');
const punto = document.querySelector('#punto')

var resultado;
var n1 = "",n2 = "";
var operadorClick = false;
var ultOpr;
var puntoClick = false;
let borre = false;

function clean(){
    n1 = "";
    n2 = "";
    pres.innerHTML = "";
    resParcial.innerHTML = "";
    operadorClick = false;
    puntoClick = false;
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
punto.addEventListener('click', () => {if(puntoClick == false) numero('.'); puntoClick = true})

btnsuma.addEventListener('click', () => {operar('+')})
btnresta.addEventListener('click', () => {operar('-')})
btnprod.addEventListener('click', () => {operar('*')})
btndiv.addEventListener('click', () => {operar('/')})
igual.addEventListener('click', () => {eventoIgual(), pres.innerHTML = n1})
borrar.addEventListener('click',() => {borrarUltDig()})

function borrarUltDig(){
    if(n2 != ""){
        n2 = n2.substring(0,n2.length-1);
        pres.innerHTML = n2;
        resParcial.innerHTML = resParcial.innerHTML.substring(0, resParcial.innerHTML.length-1)
    }else
    if(n2 == "" && borre == false){
        resParcial.innerHTML = resParcial.innerHTML.substring(0, resParcial.innerHTML.length-1);
        operadorClick = false;
        borre = true;
    }else if(n1 != ""){
        n1 = n1.substring(0,n1.length-1);
        pres.innerHTML = n1;
        resParcial.innerHTML = resParcial.innerHTML.substring(0, resParcial.innerHTML.length-1)
    }
}

function suma(){
    if(n2 != "")
    n1 = parseFloat(n1) + parseFloat(n2);
}

function resta(){
    n1 = Math.floor(n1) - Math.floor(n2);
}

function multiplicar(){
    if(n2 != "")
        n1 = Math.floor(n1) * Math.floor(n2);
}

function dividir(){
    if(n2 != "")
    n1 = Math.floor(n1) / Math.floor(n2);
}

function eventoIgual(){
    if(n1 == "" || isNaN(n1)){
        n1 = 0;
    }
    if(ultOpr == '+'){
        suma();
    }else if(ultOpr == '-'){
        resta();}
    else if(ultOpr == '*'){
        multiplicar();}
    else if(ultOpr == '/'){
        dividir();}
    resParcial.innerHTML = n1; 
    n2 = '';
    ultOpr = undefined;
}

function numero(n){
    pres.innerHTML += n;
    if(operadorClick == false){
        n1 = pres.innerHTML;
        resParcial.innerHTML += n;
    }
    else{
        n2 += `${n}`;
        resParcial.innerHTML += n;
    }
}

function operar(op){
    puntoClick = false;
    pres.innerHTML = "";
    if(operadorClick == false){
        operadorClick = true;
        if(op == '+')
        suma();
    else if(op == '-')
        resta();
    else if(op == '*')
        multiplicar();
    else if(op == '/')
        dividir();
        n2 = "";}
    else{
        if(ultOpr == '+')
        suma();
    else if(ultOpr == '-')
        resta();
    else if(ultOpr == '*')
        multiplicar();
    else if(ultOpr == '/')
        dividir();
        n2 = "";
    }
    ultOpr = op;
    n2 = "";
    resParcial.innerHTML += op;
}

document.addEventListener('keydown', (e) =>{
    if(e.key >= 0 || e.key == 9){
        numero(e.key);
    }
    if(e.key == '+')
        operar('+')
    if(e.key == '-')
        operar('-')
    if(e.key == '*')
        operar('*')
    if(e.key == '/')
        operar('/')
    if(e.key == 'Enter'){
        eventoIgual();
        pres.innerHTML = n1;
    }   
    if(e.key == 'Backspace')
        borrarUltDig()
})