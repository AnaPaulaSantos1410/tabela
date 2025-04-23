window.addEventListener("load", () => {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(produtos => {
      const tabela = document.getElementById("tabelaProdutos");

      const estilos = [
          "table-danger"
        ];

        
//for é usado para definir uma estrutura de loop, para repetir um bloco de codigos ou variaveis disponiveis varias vezes
    //let i permite que voce declare um limite de variaveis, impedindo que elas excedam o limite imposto
    //i++ é usado em laços de repetição
for (let i = 0; i < 10; i++) {
        const produto = produtos[i];
        const estilo = estilos[i % estilos.length]; //length é uma proptiedade usada para retornar dados que foram realmente passados, nada a mais e nada a menos
// i% serve para repetir os dados se caso excedam o limite imposto, como um loop limitado.
        const linha = `
            <tr class="${estilo}">
                <td>${produto.id}</td>
                <td>${produto.title}</td>
                <td>${produto.category}</td>
                <td>$${produto.price.toFixed(2)}</td>
                <td><img src="${produto.image}" alt="${produto.title}" width="50"></td>
            </tr>
        `;
        tabela.innerHTML += linha; //significa adicionar uma variavel (nesse caso linha) de um conteudo que
        //existe dentro de uma tabela html, ele define ou obtem elementos e acrescenta as linhas recorrentes
    }
})
.catch(erro => {
    console.error("Erro ao buscar os produtos:", erro);
});
});

//essa aplicação foi usada por de acordo com minhas pesquisas por trazer mais facilidade ao controle do codigo, ela transformou produtos em i, para aplicar uma
//formatação de repetição nos produtos que foram solicitados, de forma que falicitasse colocar cada produto solicitado na tabela
//utilizando um loop limitado que irá reduzir a formatação do codigo, adicionando cada linha da tabela automaticamente, sem que meu arquivo js ficasse extenso, tendo que adicioar uma auma por meio de variaveis.

//Essa formatação foi usada para incrementar automaticamente os dados solicitados na tabela de modo com que ela repetisse a formatação da tabela, mas não mudando os dados.


