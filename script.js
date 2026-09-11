import { aleatorio, nome } from './aleatorio.js';

const caixaIntroducao = document.querySelector(".caixa-introducao");
const textoIntroducao = document.querySelector(".texto-introducao");
const botaoIniciar = document.querySelector(".btn-iniciar");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".btn-novamente");

const perguntas = [
    {
        enunciado: `Assim que saiu da escola, ${nome} se depara com uma nova tecnologia: um chat de Inteligência Artificial. Qual o seu primeiro pensamento?`,
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você teve receio das transformações promovidas pela IA."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você ficou entusiasmado com as possibilidades da IA desde o primeiro instante."
            }
        ]
    },
    {
        enunciado: `A professora de ${nome} decide fazer uma aula prática sobre como a IA pode ajudar nos estudos. Como você age?`,
        alternativas: [
            {
                texto: "Utiliza ferramentas de IA para gerar resumos e organizar ideias.",
                afirmacao: "Aprendeu a usar a tecnologia como uma aliada para otimizar suas tarefas diárias."
            },
            {
                texto: "Prefere fazer a pesquisa inteiramente sem o auxílio de IA.",
                afirmacao: "Optou por manter métodos tradicionais para garantir a originalidade do trabalho."
            }
        ]
    },
    {
        enunciado: "Ao final da aula, a turma precisa debater o futuro da automação no trabalho. O que você defende?",
        alternativas: [
            {
                texto: "Defende que a IA criará novas profissões e oportunidades.",
                afirmacao: "Passou a enxergar a IA como uma ferramenta de evolução e inovação."
            },
            {
                texto: "Defende que devemos limitar o uso da IA para proteger os empregos atuais.",
                afirmacao: "Passou a defender a regulamentação rigorosa e o cuidado com os impactos sociais."
            }
        ]
    }
];

let posicaoAtual = 0;
let perguntaAtual;
let historiaFinal = "";

// 1. Exibe o texto de introdução
function exibeIntroducao() {
    textoIntroducao.textContent = `Em um futuro não muito distante, o mundo vive uma grande revolução tecnológica impulsionada pela Inteligência Artificial. Nosso protagonista, ${nome}, está prestes a tomar decisões cruciais que moldarão sua trajetória acadêmica e profissional. Cada escolha influenciará o resultado final dessa jornada!`;
}

// 2. Inicia o jogo após clicar no botão
function iniciarJogo() {
    caixaIntroducao.style.display = "none";
    mostraPergunta();
}

function mostraPergunta() {
    if (posicaoAtual >= perguntas.length) {
        exibeResultado();
        return;
    }
    
    perguntaAtual = perguntas[posicaoAtual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    posicaoAtual++;
    mostraPergunta();
}

function exibeResultado() {
    caixaPerguntas.textContent = `Em 2049, a trajetória de ${nome}:`;
    caixaAlternativas.textContent = "";
    
    let textoFormatado = historiaFinal.replace(/IA/g, "Inteligência Artificial");
    textoResultado.textContent = textoFormatado;
    
    caixaResultado.classList.add("mostrar");
}

function jogarNovamente() {
    posicaoAtual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    caixaIntroducao.style.display = "block";
    exibeIntroducao();
}

// Eventos de clique
botaoIniciar.addEventListener("click", iniciarJogo);
botaoJogarNovamente.addEventListener("click", jogarNovamente);

// Executa a introdução no início
exibeIntroducao();
