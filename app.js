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
    exibirTextoNaTela('h2', 'Acrescente o nome dos sesus amigos');
}

function adicionarAmigo() {
    let nomeAcrescentado = document.querySelector('input').value;

    if (nomeAcrescentado.trim() === "") {
        alert("O campo nome não pode estar vazio.");
    } else {
        nomeDosAmigos.push(nomeAcrescentado);
        exibirTextoNaTela('h2', 'Acrescente o nome dos sesus amigos');
        atualizarNumeroLimite();
        console.log(`${nomeDosAmigos .length} ${nomeAcrescentado}`);

        // Criar um novo item de lista numerada e adicioná-lo à lista de amigos
        let listaAmigos = document.getElementById('lista-amigos');
        let novoItem = document.createElement('li');
        novoItem.textContent = `${nomeAcrescentado}`;
        listaAmigos.appendChild(novoItem);

        // Limpar o campo de entrada após adicionar o nome
        document.getElementById('amigo').value = "";
    }
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