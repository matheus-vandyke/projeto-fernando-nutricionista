var botaoAdicionar = document.querySelector("#adicionar-paciente");
var tabela = document.querySelector("#tabela-pacientes");
var pacientes = document.querySelectorAll(".paciente");

var pacienteTr = null; 
var erros = null;

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    pacienteTr = montaTr(paciente);

    erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    });

function validaPeso(peso){

    return peso >= 0 && peso <= 1000 ? true : false;
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);

function validaPaciente(paciente) {
   
    var erros = [];

    if (paciente.nome.lenght == 0) {
        erros.push("O nome nao pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso invalido")
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura invalida")
    }
    
    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagens-erro");
        mensagemErro.textContent = erros;
    }

    return erros;
}

// var pacienteTr = montaTr(paciente);
// var erros = validaPaciente(paciente);

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
function montaTr(paciente) {
    //Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return pacienteTr;  
}

calculaImc( 478554, 8596521);
main();