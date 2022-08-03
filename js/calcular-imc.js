var erroresFondo = "red";
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdIMC = paciente.querySelector(".info-imc");
    var pesoV = true;
    var alturaV = true;

    if (peso < 0 || peso > 1000) {
        tdIMC.textContent= "Peso Incorrecto";
        console.log("Peso Incorrecto");
        pesoV = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (altura < 0 || altura >= 3.00) {
        tdIMC.textContent= "Altura Incorrecta";
        console.log("Altura Incorrecta");
        alturaV = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoV && alturaV) {

        tdIMC.textContent = calcularIMC(peso, altura);
    }   
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}