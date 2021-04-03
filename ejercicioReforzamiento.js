const prompt = require("prompt-sync")();
var textN0 = "Producto         Codigo           precio"
textN1 = "Chocolate:       xc23             $12.50";
textN2 = "Paleta :         c4f2             $5.75";
textN3 = "Chicle:          gt74             $4.25";
textN4 = "Galleta:         l3k8             $9.10";

//Se imprime la variable textN0 en consola | \n se utiliza para dar un salto de linea 
console.log(textN0, "\n", "\n" + textN1, "\n" + textN2, "\n" + textN3, "\n" + textN4, "\n");

var producto = prompt("Escribe el codigo del producto que quieres comprar:  ");
// el codigo que se escriba en consola se almacena en la var producto
switch(producto){ 
    case "xc23":
        console.log("Quieres comprar un chocolate");
        var dinero = prompt("Ingresa la cantidad de dinero:  "); //lo que se escriba se almacena en var dinero
        if(dinero == 12.50){
            console.log("Compra exitosa :D");
        }else if(dinero > 12.50){
            console.log(("Gracias por su compra su cambio es de: $") + (dinero - 12.50));
        }else{
            console.log("Dinero insuficiente :(");
        }       break; // se coloca break para que el codigo no siga ejecutandose 
    case"c4f2":
        console.log("Quieres comprar una paleta");
        var dinero = prompt("Ingresa la cantidad de dinero:  ");
        if(dinero == 5.75){
            console.log("Compra exitosa :D");
        }else if(dinero > 5.75){
            console.log(("Gracias por su compra, su cambio es de: $") + (dinero - 5.75));
        }else if(dinero < 5.75){
            console.log("Dinero insuficiente :(");
        }      break;
    case "gt74":
        console.log("Quieres comprar un chicle");
        var dinero = prompt("Ingresa la cantidad de dinero:  ");
        if(dinero == 4.25){
            console.log("Compra exitosa :D");
        }else if(dinero > 4.25){
            console.log(("Gracias por su compra, su cambio es de: $") + (dinero - 4.25));
        }else {
            console.log("Dinero insuficiene :(");
        }       break;
    case "l3k8":
        console.log("Quieres comprar una galleta");
        var dinero = prompt("Ingresa la cantidad de dinero:  ");
        if(dinero == 9.10){
            console.log("Compra exitosa :D");
        }else if(dinero > 9.10){
            console.log(("Gracias por su compra, su cambio es de: $") + (dinero - 9.10));
        }else {
            console.log("Dinero insuficiene :(");
        }       break;
};