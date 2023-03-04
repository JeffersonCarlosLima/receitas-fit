"use strict";

var semResultado = document.getElementById("mensagem");

function search() {
  // Obtenha o valor do campo de entrada de texto
  var searchValue = document.getElementById("search-input").value; // Obtenha o div onde deseja realizar a pesquisa

  var div = document.getElementById("pesquisa"); // Obtenha todos os elementos filhos do div

  var elements = div.getElementsByTagName("*"); // Percorra todos os elementos filhos do div

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]; // Verifique se o texto do elemento corresponde à pesquisa

    if (element.innerText.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
      // Se o elemento corresponder, exiba-o
      element.style.display = ""; //oculta a mensagem

      semResultado.style.display = "none";
    } else {
      // Caso contrário, oculte-o
      element.style.display = "none"; //texto caso não encontre nada

      semResultado.textContent = "Não encontramos a receita digitada, por favor tente novamente!";
    }
  }
}