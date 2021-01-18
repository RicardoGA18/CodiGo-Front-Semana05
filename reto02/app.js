function calcularPrecio(N, TI){
    let TP, PA, CA = 0 , TO = 0,TOT = 0;

    if(TI == 'sen'){
        PA = 20;
    }
    else if(TI == 'dob'){
        PA = 25;
    }
    else if(TI == 'tri'){
        PA = 28;
    }

    TO = N * PA;

    if(TP == 'tarjeta'){
        CA = (TO * 5)/100;
    }

    TOT = TO + CA;

    return TOT;
}

let form = document.getElementById("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    
    let num = parseFloat(document.getElementById("num").value);

    let tipo = document.getElementById("tipo").value;

    if((Number.isInteger(num)) && (num > 0)){
        let texto = `El costo de su pedido es: ${calcularPrecio(num,tipo)}`;

        let resultado = document.getElementById("resultado");

        resultado.innerHTML = texto;
    }
    else{
        alert("Ingrese valores validos por favor!");
    }
})