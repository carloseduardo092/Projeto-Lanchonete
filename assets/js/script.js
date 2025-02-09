const cardapio = [
  {
    nome: "COMBO-1",
    produtos: "2 X-Salada + refri. 1.5L",
    preco: 22,
    imagem: "https://receitassupreme.net/wp-content/uploads/2022/03/16-680x350.png",
  },
  { nome: "COMBO-2", 
    produtos: "3 X-Salada + Refri. 1,5L", 
    preco: 30,
    imagem: "https://receitassupreme.net/wp-content/uploads/2022/03/16-680x350.png",
  },
  { nome: "COMBO-3", 
    produtos: "4 X-Salada + Refri. 1,5L", 
    preco: 38,
    imagem: "https://receitassupreme.net/wp-content/uploads/2022/03/16-680x350.png",
  },
  { nome: "COMBO-4", 
    produtos: "5 X-Salada  + Refri. 1,5L", 
    preco: 46,
    imagem: "https://receitassupreme.net/wp-content/uploads/2022/03/16-680x350.png", 
  },
  { nome: "COMBO-5",
    produtos: "6 X-Salada + Refri. 1,5L", 
    preco: 54,
    imagem: "https://receitassupreme.net/wp-content/uploads/2022/03/16-680x350.png",
   },
  { nome: "Combo Pizza",
    preco: 25.9,    
    imagem: "https://images5.alphacoders.com/108/1083453.jpg"},
  { nome: "Combo Pizza", 
    preco: 25.9,
    imagem: "https://images5.alphacoders.com/108/1083453.jpg"
   },
  { nome: "Combo Pizza", 
    preco: 25.9,
    imagem: "https://images5.alphacoders.com/108/1083453.jpg"
   }];

const listaProdutos = document.getElementById("lista-produtos");

function exibirCardapio() {
  listaProdutos.innerHTML = "";

  cardapio.forEach((produto) => {
    const produtoHTML = `
        <div class="produto">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.produtos || ""}</p>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho('${produto.nome}', ${
      produto.preco
    })">Adicionar</button>
        </div>`;
    listaProdutos.innerHTML += produtoHTML;
  });
}

exibirCardapio();

function adicionarAoCarrinho(nome, preco) {
  console.log(`Adiconado: ${nome} - R$ ${preco.toFixed(2)}`);
}
