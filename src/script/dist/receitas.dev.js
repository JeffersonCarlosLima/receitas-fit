"use strict";

function receitas() {
  fetch('dados.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (item) {
      var div = document.createElement('div');
      div.innerHTML = "\n            <h2>".concat(item.nome, "</h2>\n            <p>Ingredientes: ").concat(item.ingredientes, "</p>\n            <p>Modo de Preparo: ").concat(item.modo_preparo, "</p>\n            ");
      document.body.appendChild(div);
    });
  })["catch"](function (error) {
    return console.error(error);
  });
}

fetch('receitas.json').then(function (response) {
  return response.json();
}).then(function (data) {
  // Cria um elemento para cada receita e adiciona no HTML
  var divReceitas = document.getElementById('receitas');
  data.receitas.forEach(function (receita) {
    // Cria um card para a receita
    var card = document.createElement('div');
    card.className = 'card receita'; // Cria o corpo do card

    var corpo = document.createElement('div');
    corpo.className = 'card-body'; // Adiciona o título da receita

    var titulo = document.createElement('h2');
    titulo.className = 'card-title';
    titulo.textContent = receita.titulo;
    corpo.appendChild(titulo); // Adiciona os ingredientes

    var ingredientes = document.createElement('ul');
    ingredientes.className = 'list-group list-group-flush';
    receita.ingredientes.forEach(function (ingrediente) {
      var li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = ingrediente;
      ingredientes.appendChild(li);
    });
    corpo.appendChild(ingredientes); // Adiciona o modo de preparo

    var modoPreparo = document.createElement('ol');
    modoPreparo.className = 'list-group list-group-flush';
    receita.modo_preparo.forEach(function (passo) {
      var li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = passo;
      modoPreparo.appendChild(li);
    });
    corpo.appendChild(modoPreparo); // Adiciona o corpo ao card e o card à lista de receitas

    card.appendChild(corpo);
    divReceitas.appendChild(card);
  });
})["catch"](function (error) {
  return console.error(error);
});