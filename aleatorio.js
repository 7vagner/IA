const nomes = ["Fernanda", "Gabriel", "Juliana", "Vagner", "Rafael"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
