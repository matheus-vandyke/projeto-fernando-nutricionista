var teste = 'olá';

function main() {

    var pacientes = document.querySelectorAll(".paciente");

    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Fernando Nutricionista";

    var peso = Array();
    var altura = Array();
    var tdImc = Array();

    for (var i = 0; i < pacientes.length; i ++) {

        var paciente = pacientes[i];
        var pesoEhValido = true;
        var alturaEhValida = true;

        peso.push( paciente.querySelector(".info-peso").textContent ); 
        altura.push( paciente.querySelector(".info-altura").textContent );
        tdImc.push( paciente.querySelector(".info-imc"));

        // peso()
        if (peso[ i ] <= 0 || peso[ i ] >= 1000) {
            console.log("Peso inválido!");
            pesoEhValido = false;
            tdImc[ i ].textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido");
        }
        
        // altura()
        if (altura[ i ] <= 0 || altura[ i ] >= 3.00) {
            console.log("Altura inválida!");
            alturaEhValida = false;
            tdImc[ i ].textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido");
        }

        if (pesoEhValido && alturaEhValida) {
            var imc = calculaImc( peso[ i ], altura[ i ]);
            tdImc[ i ].textContent = imc;
        }
    }    

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc[ i ].textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc[ i ].textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

}

function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    console.log( imc );
    return imc.toFixed(2);
}