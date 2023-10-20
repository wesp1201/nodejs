// Símbolos para os naipes
const naipes = ['♠', '♥', '♦', '♣'];

// Valores das cartas
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Função para desenhar uma carta
function desenharCarta(naipe, valor) {
    const carta = `
    ┌─────────┐
    │ ${valor}      │
    │         │
    │    ${naipe}    │
    │         │
    │      ${valor} │
    └─────────┘
    `;
    return carta;
}

// Função para sortear uma carta aleatória
function sortearCarta() {
    const naipe = naipes[Math.floor(Math.random() * naipes.length)];
    const valor = valores[Math.floor(Math.random() * valores.length)];
    return { naipe, valor };
}

// Sorteie uma carta aleatória
const cartaSorteada = sortearCarta();

// Desenhe a carta sorteada
const cartaDesenhada = desenharCarta(cartaSorteada.naipe, cartaSorteada.valor);

// Exiba a carta no console
console.log('Carta sorteada:');
console.log(cartaDesenhada);