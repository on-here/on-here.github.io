var textoEncriptar = document.querySelector("#texto-encriptar");
var bottonEncriptado = document.querySelector("#boton-encriptar");
var bottonDesencriptado = document.querySelector("#boton-desencriptar");
var Copy = document.querySelector("#resultado");
var resultado = document.querySelector("#resultado");
textoEncriptar.focus();

//Encripta
function encriptando(){
    setTimeout(function(){
        //animacion
        animacionEn;
        //Encripta
        var texto = textoEncriptar.value;
        var encripta = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("u", "ufat").replaceAll("o", "ober");
        resultado.value = encripta;
}, 1000); 
}

//Desencripta
function desencriptado(){
    setTimeout(function(){
        //animacion
        animacionDe;
        //Encripta
        var texto = textoEncriptar.value;
        var desencripta = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ufat", "u").replaceAll("ober", "o");
        resultado.value = desencripta;
}, 1000); 
}

//Copy
function copiando(){
    var res = resultado.value;
    navigator.clipboard.writeText(res);
    resultado.select();
}

// animacion
var animacionEn = document.getElementById('boton-encriptar').addEventListener('click', function () {
    document.querySelector('.gift').classList.add('giftActivo');reset_animation()});

var animacionDe = document.getElementById('boton-desencriptar').addEventListener('click', function () {
    document.querySelector('.gift').classList.add('giftActivo');reset_animation()});

function reset_animation() {
    var el = document.getElementById('id');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}

bottonEncriptado.onclick = encriptando;
bottonDesencriptado.onclick = desencriptado;
Copy.onclick = copiando;