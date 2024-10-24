// script.js
let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produto, preco) {
    const produtoExistente = carrinho.find(item => item.produto === produto);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ produto, preco, quantidade: 1 });
    }

    total += preco;
    atualizarCarrinho();
}

function removerDoCarrinho(produto) {
    const produtoExistente = carrinho.find(item => item.produto === produto);

    if (produtoExistente) {
        total -= produtoExistente.preco;
        produtoExistente.quantidade -= 1;

        if (produtoExistente.quantidade === 0) {
            carrinho = carrinho.filter(item => item.produto !== produto);
        }

        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco.toFixed(2)} (x${item.quantidade})`;
        
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerDoCarrinho(item.produto);

        li.appendChild(botaoRemover);
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function toggleCarrinho() {
    const carrinhoSection = document.getElementById('carrinho');
    if (carrinhoSection.style.display === 'none') {
        carrinhoSection.style.display = 'block';
    } else {
        carrinhoSection.style.display = 'none';
    }
}
