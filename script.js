
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputFrase = document.querySelector("#input-texto");
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var mensajeEncriptado = document.querySelector("#msg");
var botonCopiar = document.querySelector("#btn-copy");

var regexp = /[A-Z]/;

function tomarFrase(evento) {
    evento.preventDefault();
    botonEncriptar.textContent = inputFrase.value;
    if (botonEncriptar.textContent.match(regexp)) {
        alert("Escribir en letras minusculas y sin acento!!!");
    } else {
        inputFrase.value ="";
        return botonEncriptar.textContent
    };
}

function encriptarFrase (frase) {
    var fraseEncriptada = frase.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');

    return fraseEncriptada;
}


function desencriptarfrase (frase) {
    var fraseDesencriptada = frase.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    
    return fraseDesencriptada;
} 

botonEncriptar.addEventListener('click', function (evento){
    var frase = tomarFrase(evento);
    mensajeEncriptado.value = encriptarFrase(frase);
});

botonDesencriptar.addEventListener('click', function (evento){
    var frase = tomarFrase(evento);
    mensajeEncriptado.value = desencriptarfrase(frase);
});


botonCopiar.addEventListener('click', function(evento){
    mensajeEncriptado.select();
    document.execCommand('copy');
    mensajeEncriptado.value='';
});
