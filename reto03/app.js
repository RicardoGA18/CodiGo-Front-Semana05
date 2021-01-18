// las primeras 3 citas son $200 -> 1-3 
// las siguientes 2 son $150 -> 4-5 
// las siguientes 3 son $100 -> 6-8 
// las restantes son $50 -> 10 a mas 

//if, else, else if

function calcularCosto(NC){
    let CC, TOT;
    if((NC > 0) && (NC <= 3)){ // 1 -> 200 , 2 -> 200 , 3 -> 200
        CC = 200;
        TOT = NC * CC;
    }
    else if((NC > 3) && (NC <= 5)){ // 4 -> 150 , 5 -> 150
        CC = 150;
        TOT = 600 + ( (NC - 3) * CC );
    }
    else if((NC > 5) && (NC <= 8)){ // 6 -> 100 , 7 -> 100 , 8 -> 100
        CC = 100;
        TOT = 900 + ( (NC - 5) * CC );
    }
    else if(NC > 9){
        CC = 50;
        TOT = 1200 + ( (NC - 8) * CC );
    }
    let respuesta = {
        costoCita: CC,
        totalTrat: TOT
    };
    return respuesta;
}

let boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    // validacion de dato de entrada
    // el numero sea un entero positivo

    let numCita = parseFloat(document.getElementById("numCita").value);

    if((Number.isInteger(numCita)) && ( numCita > 0 ) ){
        let resultado = document.getElementById("resultado");
        
        let cita = calcularCosto(numCita);
        let texto = `El costo de su cita actual es: S/. ${cita.costoCita}\nEl costo de su tratamiento hasta el momento es: S/. ${cita.totalTrat}`;
        resultado.innerHTML = texto
    }
    else{
        alert("Ingrese un valor valido por favor!");
    }
})

