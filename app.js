let nomeDosAmigos = [];
let numeroLimite = nomeDosAmigos.length;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function atualizarNumeroLimite() {
    numeroLimite = nomeDosAmigos.length;
}

if (nomeDosAmigos.length < 1) {
    exibirTextoNaTela('h2', 'Acrescente primeiro o seu nome');
} else {
    exibirTextoNaTela('h2', 'Acrescente o nome dos seus amigos');
}

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    let lista = document.getElementById("lista-amigos");

    if (nome === "") {
        alert("O campo nome não pode estar vazio.");
        return;
    }

    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert("O nome deve conter apenas letras, acentos e espaços.");
        return;
    }

    // Formata o nome para ter a primeira letra maiúscula
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (nomeDosAmigos.includes(nome)) {
        alert("Esse nome já foi inserido.");
        return;
    }

    nomeDosAmigos.push(nome);
    exibirTextoNaTela('h2', 'Acrescente o nome dos seus amigos');
    atualizarNumeroLimite();
    console.log(`${nomeDosAmigos.length} ${nome}`);

    // Criar um novo item de lista numerada e adicioná-lo à lista de amigos
    let novoItem = document.createElement('li');
    novoItem.textContent = `${nome}`;
    lista.appendChild(novoItem);

    // Limpar o campo de entrada após adicionar o nome
    input.value = "";
}

function sortearAmigo() {
    let numeroSorteio2 = parseInt(Math.random() * numeroLimite + 1);
    console.log(numeroSorteio2);

    if (numeroSorteio2 < 2) {
       numeroSorteio2++;
    } 

    let amigosSorteados = `O seu amigo secreto é ${nomeDosAmigos[numeroSorteio2 - 1]}!`;
    alert(amigosSorteados);
    nomeDosAmigos = [];
    document.getElementById('amigo').value = "";
    document.getElementById('lista-amigos').innerHTML = "";
    exibirTextoNaTela('h2', 'Acrescente primeiro o seu nome');
}
