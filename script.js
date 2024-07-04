const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As mudanças climáticas estão exacerbando a frequência e intensidade de eventos climáticos extremos ao redor do mundo. Enchentes devastadoras inundam comunidades inteiras, destruindo infraestruturas e deslocando pessoas de seus lares. Secas prolongadas escasseiam recursos hídricos essenciais, ameaçando a segurança alimentar e intensificando incêndios florestais que consomem vastas áreas naturais. Estes eventos não são apenas fenômenos isolados, mas sintomas alarmantes de um planeta em desequilíbrio. Mitigar as mudanças climáticas tornou-se crucial para proteger vidas, ecossistemas e economias vulneráveis aos impactos cada vez mais severos desses desastres naturais.-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "É preocupante como as mudanças climáticas estão intensificando eventos extremos e impactando tão drasticamente tantas pessoas e ecossistemas ao redor do mundo.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "É crucial agir rapidamente para mitigar as mudanças climáticas e proteger nossas comunidades e recursos naturais contra os impactos cada vez mais severos desses desastres naturais.",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Quais são as principais causas por trás do aumento das enchentes relacionadas às mudanças climáticas?",
        alternativas: [
            {
                texto: "Intensificação das chuvas: O aquecimento global aumenta a evaporação da água dos oceanos, resultando em maior umidade atmosférica e, consequentemente, em chuvas mais intensas e frequentes, o que pode causar enchentes",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Alterações nos padrões de precipitação: Mudanças climáticas provocam desequilíbrios nos padrões de chuvas, levando a períodos de precipitação mais concentrada em curtos períodos, aumentando o risco de enchentes repentinas e severas.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Quais são os principais fatores que contribuem para o aumento da frequência e intensidade das secas devido às mudanças climáticas?",
        alternativas: [
            {
                texto: "Mudanças nos padrões de precipitação: As mudanças climáticas estão alterando os padrões de chuvas, resultando em períodos de seca mais prolongados e intensos em algumas regiões devido à diminuição da precipitação.",
                afirmacao: "Aumento da evaporação: Com o aumento da temperatura global, há maior evaporação da água, o que pode esgotar mais rapidamente os recursos hídricos disponíveis e agravar as condições de seca em áreas vulneráveis."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Como as mudanças climáticas estão contribuindo para o aumento da frequência e intensidade dos incêndios florestais em várias partes do mundo?",
        alternativas: [
            {
                texto: "Aumento das temperaturas: As mudanças climáticas estão elevando as temperaturas médias globais, criando condições mais propícias para incêndios florestais, aumentando a evaporação da umidade e tornando a vegetação mais seca e inflamável.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Secas mais severas e prolongadas: Mudanças climáticas estão causando períodos de seca mais intensos e prolongados em muitas regiões, o que reduz a umidade do solo e das plantas, criando combustíveis secos que facilitam a propagação de incêndios florestais.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: " Quais são os principais indicadores científicos que mostram que estamos enfrentando uma crise climática global?",
        alternativas: [
            {
                texto: "Aquecimento global: A elevação das temperaturas médias globais ao longo das últimas décadas é um indicador claro da crise climática, refletida em registros históricos de temperatura e observações contínuas por satélites e estações meteorológicas.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Derretimento das geleiras: O rápido derretimento das geleiras e das calotas polares é um indicador preocupante da crise climática, evidenciado por medições de perda de massa de gelo e alterações no nível do mar ao redor do mundo.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();