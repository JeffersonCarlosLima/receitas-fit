function receitas(){

    fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
            <h2>${item.nome}</h2>
            <p>Ingredientes: ${item.ingredientes}</p>
            <p>Modo de Preparo: ${item.modo_preparo}</p>
            `;
            document.body.appendChild(div);
        });
    })
    .catch(error => console.error(error));
}
fetch('receitas.json')
.then(response => response.json())
.then(data => {
    // Cria um elemento para cada receita e adiciona no HTML
    const divReceitas = document.getElementById('receitas');
    data.receitas.forEach(receita => {
        // Cria um card para a receita
        const card = document.createElement('div');
        card.className = 'card receita';

        // Cria o corpo do card
        const corpo = document.createElement('div');
        corpo.className = 'card-body';

        // Adiciona o título da receita
        const titulo = document.createElement('h2');
        titulo.className = 'card-title';
        titulo.textContent = receita.titulo;
        corpo.appendChild(titulo);

        // Adiciona os ingredientes
        const ingredientes = document.createElement('ul');
        ingredientes.className = 'list-group list-group-flush';
        receita.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = ingrediente;
            ingredientes.appendChild(li);
        });
        corpo.appendChild(ingredientes);

        // Adiciona o modo de preparo
        const modoPreparo = document.createElement('ol');
        modoPreparo.className = 'list-group list-group-flush';
        receita.modo_preparo.forEach(passo => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = passo;
            modoPreparo.appendChild(li);
        });
        corpo.appendChild(modoPreparo);

        // Adiciona o corpo ao card e o card à lista de receitas
        card.appendChild(corpo);
        divReceitas.appendChild(card);
    });
})
.catch(error => console.error(error));