//Suponiendo que el precio del galon es 3.50 soles
let PG = 3.5;

//scope
function calcularGanacia(L){ // milk = leche
    //Calculando la cantidad de galones
    let TG = L / 3.785;

    //Calculando la ganancia
    let GA = TG * PG;

    //retornando la ganancia
    return GA;
}

//Escuchando el evento click del boton para calcular la ganancia
document.getElementById('boton').addEventListener("click",()=>{
    //Obteniendo el numero de litros ingresados
    let litros = parseFloat(document.getElementById("litros").value);

     //obteniendo el parrafo donde se escribira el resultado
    parrafo = document.getElementById("resultado");

    //validando
    if( litros >= 0 ){
        //Definiendo el texto
        let texto = "Se realizara el siguiente calculo: GA = (L / 3.785) * PG<br>";
        texto += "La ganancia de este dia es: S/. " + calcularGanacia(litros);

        //Escribiendo
        parrafo.innerHTML = texto;
    } 
    else{
        parrafo.innerHTML = "Ingrese un valor válido por favor."
    }
})