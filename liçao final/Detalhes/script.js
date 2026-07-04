const container = document.getElementById("detalhesContainer");

const cardsListagem = [
  {
    id: 1,
    titulo: "Pomada com Efeito Matte",
    frasecop: "Pomada Premium",
    subtitulo: "Fixação forte com acabamento natural e sem brilho. Ideal para penteados modernos e estruturados o dia todo.",
    sobreproduto: "Uma combinação nobre de óleos vegetais leves que penetram profundamente na estrutura dos fios. Perfeito para eliminar o aspecto espetado e ressecado da barba, enquanto atua na derme acalmando irritações provocadas pelo crescimento dos fios.",
    Destaquesdoproduto: "Toque seco que não deixa a barba oleosa ou pesada  Enriquecido com Vitamina E para proteção celular enquanto atua na derme acalmando irritações provocadas pelo crescimento dos fios",
    volume: "30ml",
    precoexclusivo: "R$ 55,00",
    precoreal: "R$ 39,90",
    imagem: "https://static.vecteezy.com/ti/vetor-gratis/t2/10071559-barbearia-logo-barbearia-logo-modelo-vetor.jpg"
  },
  {
    id: 2,
    titulo: "Óleo Premium Hidratante",
    frasecop: "Óleo Premium ",
    subtitulo: "Formulado com óleos essenciais para amaciar os fios rebeldes e hidratar a pele sob a barba profunda.",
    sobreproduto: "O cuidado sofisticado que a sua pele precisa para brilhar Mais que um hidratante um ritual de luxo para o seu corpo",
    Destaquesdoproduto: "Toque seco que não deixa a barba oleosa ou pesada  Enriquecido com Vitamina E para proteção celular enquanto atua na derme acalmando irritações provocadas pelo crescimento dos fios",
    volume: "80ml",
    precoexclusivo: "R$ 130,00",
    precoreal: "R$ 78,90",
    imagem: "https://static.vecteezy.com/ti/vetor-gratis/t2/10071559-barbearia-logo-barbearia-logo-modelo-vetor.jpg"
  }
];

const idSelecionado = Number(localStorage.getItem("cardSelecionadoId"));

if (idSelecionado) {
  const item = cardsListagem.find(t => t.id === idSelecionado);

  if (item) {
    container.innerHTML = `
            <article class="detalhes-layout">
                <div class="detalhes-info-secao">
                    <div class="detalhes-header-topo">
                        <div>
                            <div class="detalhes-titulo-wrapper">
                                <h2>${item.titulo}</h2>
                                <span class="badge-promo-exclusiva">PROMOÇÃO</span>
                            </div>
                            <p class="detalhes-resumo-texto">${item.frasecop}</p>
                        </div>
                    </div>
                    
                    <div class="detalhes-descricao-longa">
                        <h4>Sobre o Produto</h4>
                        <p>${item.sobreproduto}</p>
                    </div>
                    
                    <div class="detalhes-descricao-longa">
                        <h4>Destaques do produto</h4>
                        <p class="detalhes-lista-texto">${item.Destaquesdoproduto}</p>
                    </div>
                </div>

                <div class="detalhes-sidebar-exclusiva">
                    <div class="especificacoes-caixa">
                        <h4>Especificações de Envio</h4>
                        <div class="especificacao-linha">
                            <div>
                                <span class="especificacao-rotulo">Volume</span>
                                <strong class="especificacao-dado">${item.volume}</strong>
                            </div>
                        </div>
                        <div class="especificacao-linha">
                            <div>
                                <span class="especificacao-rotulo">Disponibilidade</span>
                                <strong class="especificacao-dado">Pronta entrega imediata</strong>
                            </div>
                        </div>
                    </div>

                    <div class="preco-compra-caixa">
                        <span class="especificacao-rotulo">Preço Exclusivo</span>
                        <div class="detalhes-valores-bloco">
                            <span class="price-old-exclusivo">${item.precoexclusivo}</span>
                            <span class="detalhes-preco-valor">${item.precoreal}</span>
                        </div>
                        <div class="detalhes-botoes">
                            <a href="../Listagem/index.html" class="btn-detalhes btn-detalhes-voltar">Voltar à Loja</a>
                            <a href="../Resumo/index.html" class="btn-detalhes btn-detalhes-adicionar">Comprar Agora</a>
                        </div>
                    </div>
                </div>
            </article>
        `;
  } else {
    container.innerHTML = "<p>Item não encontrado.</p>";
  }
} else {
  container.innerHTML = "<p>Nenhum card foi selecionado.</p>";
}
