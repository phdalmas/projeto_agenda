const form = document.getElementById('form-agenda');
const nomes = [];
const ddd = [];
const numero = [];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNome = document.getElementById('nome');
    const inputDDD = document.getElementById('ddd');
    const inputNumero = document.getElementById('numero');

    if (nomes.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi adicionado`);
    } else {
        nomes.push(inputNome.value);
        ddd.push(parseInt(inputDDD.value))
        numero.push(parseInt(inputNumero.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputDDD.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>'
        linhas += linha;
    }
    inputNome.value='';
    inputDDD.value='';
    inputNumero.value='';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
