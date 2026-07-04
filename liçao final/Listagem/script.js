const container = document.getElementById("cardContainer");

const listaProdutos = [
    {
        id: 1,
        titulo: "Pomada Efeito Matte 100g",
        subtitulo: "Forte fixação sem brilho. Ideal para penteados modernos e estruturados com alta durabilidade.",
          imagemUrl: "../img/cadeiras.jpg",
        imagemAlt: "Logotipo BarberShop do produto Pomada Efeito Matte",
        tag: "Mais Vendido",
        tagClasse: "",
        preco: "R$ 45,00"
    },
    {
        id: 2,
        titulo: "Óleo Hidratante Premium 30ml",
        subtitulo: "Amacia e perfuma os fios da barba. Enriquecido com óleos naturais que cuidam da pele por baixo.",
          imagemUrl: "../img/cadeiras.jpg",
        imagemAlt: "Logotipo BarberShop do produto Óleo Hidratante Premium",
        tag: "",
        tagClasse: "",
        preco: "R$ 38,90"
    },
    {
        id: 3,
        titulo: "Shampoo Ice Mentol 250ml",
        subtitulo: "Limpeza profunda com sensação refrescante imediata. Controla a oleosidade e estimula o couro cabeludo.",
          imagemUrl: "../img/cadeiras.jpg",
        imagemAlt: "Logotipo BarberShop do produto Shampoo Ice Mentol",
        tag: "",
        tagClasse: "",
        preco: "R$ 32,00"
    },
    {
        id: 4,
        titulo: "Balm Alinhador de Fios 90g",
        subtitulo: "Reduz o frizz e alinha a barba e cabelos curtos de forma natural. Proteção térmica integrada.",
        imagemUrl: "../img/cadeiras.jpg",
        imagemAlt: "Logotipo BarberShop do produto Balm Alinhador de Fios",
        tag: "Desconto",
        tagClasse: "tag-promocao",
        preco: "R$ 29,90"
    },
    {
        id: 5,
        titulo: "Shaving Gel Transparente 500g",
        subtitulo: "Permite enxergar a linha da lâmina perfeitamente para desenhos de barba ultra precisos.",
          imagemUrl: "../img/cadeiras.jpg",
        imagemAlt: "Logotipo BarberShop do produto Shaving Gel Transparente",
        tag: "",
        tagClasse: "",
        preco: "R$ 42,00"
    },
    {
        id: 6,
        titulo: "Pente de Madeira de Jacarandá",
        subtitulo: "Elimina a eletricidade estática dos fios, evitando o frizz na barba e no cabelo comprido.",
        imagemUrl: "../img/cadeiras.jpg",
        imagemAlt: "Logotipo BarberShop do produto Pente de Madeira",
        tag: "",
        tagClasse: "",
        preco: "R$ 25,00"
    }
];

container.innerHTML = "";

listaProdutos.forEach((produto) => {
    let tagHTML = "";
    if (produto.tag) {
        tagHTML = `<div class="produto-tag-destaque ${produto.tagClasse}">${produto.tag}</div>`;
    }

    const cardHTML = `
        <article class="card-produto" onclick="verDetalhes(${produto.id})">
            <div class="produto-imagem-wrapper">
                ${tagHTML}
                <img src="${produto.imagemUrl}" alt="${produto.imagemAlt}" class="produto-foto-render">
            </div>
            <div class="produto-detalhes">
                <h3>${produto.titulo}</h3>
                <p>${produto.subtitulo}</p>
                <div class="produto-preco-acao">
                    <span class="preco-valor">${produto.preco}</span>
                    <a href="../Resumo/index.html" class="btn-adicionar-carrinho" onclick="event.stopPropagation();">Adicionar</a>
                </div>
            </div>
        </article>
    `;
    container.innerHTML += cardHTML;
});

function verDetalhes(id) {
    localStorage.setItem("cardSelecionadoId", id);
    window.location.href = "../detalhes/index.html";
}
