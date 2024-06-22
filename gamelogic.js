let isEmerTimer = Math.floor(Math.random() * 15)
let emergengyLucky = false

let time = 5 * 60
let isTimerOn = false
let minutes
document.querySelector("#timer").style.visibility = 'hidden'

setInterval(coundown5Min, 1000);
function coundown5Min() {
    if (isTimerOn) {
        minutes = Math.floor(time / 60)
        let seconds = time % 60

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        document.querySelector("#timer").innerHTML = `${minutes}:${seconds}`
        time--

        if (minutes == 0 && seconds == "00") {
            isTimerOn = false
        }
    }
}


let arrayNarrador = [
    {
        scene: "intro",
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Estás numa festa exuberante no rooftop de um dos edifícios mais altos da cidade. A noite está iluminada pelas luzes brilhantes da cidade abaixo e pelo brilho das estrelas acima. Foste contratado para garantir que a iluminação da festa funcione perfeitamente. O organizador da festa, um magnata da tecnologia, quis impressionar os convidados com um espetáculo de luzes deslumbrante.",
                img: "images/rooftop.jpg"
            },
            {
                id: 2,
                isChoice: false,
                txt: 'Enquanto ajustas as luzes, percebes que uma das principais luzes está piscando intermitentemente. "Preciso de um novo fusível para resolver isso," pensas. Decides que tens de descer até à tua carrinha de serviço para buscar a caixa de fusíveis. Antes de descer, observas o ambiente da festa. Existem várias ferramentas à tua disposição que podes levar contigo: um pé de cabra, uma chave de fendas, um martelo, um alicate de corte, uma lanterna, um multímetro, uma corda e fita isolante. Sabes que não podes carregar todas, então escolhes duas ferramentas que achas que podem ser úteis.',
                img: "images/tools.jpg"
            },
            {
                id: 3,
                isChoice: true,
                choices: [
                    {
                        group: "chooseTools",
                        id: "lantern",
                        txt: "Lanterna"
                    },
                    {
                        group: "chooseTools",
                        id: "peCabra",
                        txt: "Pé de cabra"
                    },
                    {
                        group: "chooseTools",
                        id: "hammer",
                        txt: "Martelo"
                    },
                    {
                        group: "chooseTools",
                        id: "rope",
                        txt: "Corda"
                    },
                ],
                txt: "Que ferramentas queres levar contigo? (Só podes escolher duas)",
                img: "images/tools.jpg"
            },
            {
                id: 4,
                isChoice: false,
                txt: "Com as ferramentas escolhidas, entras no elevador. É um elevador moderno, com uma janela panorâmica que oferece uma vista deslumbrante da cidade. Começas a descer, quando abruptamente, o elevador empanca. O teu coração acelera enquanto tentas manter a calma. De repente, as luzes do elevador apagam-se, mergulhando-te na escuridão. Segundos depois, as luzes vermelhas de emergência acendem-se, banhando o espaço num brilho inquietante.",
                img: "images/elevator.jpg"
            },
            {
                id: 5,
                isChoice: false,
                txt: "Olhas em volta e vês possíveis opções de fuga: acionar o botão de emergência, escapar pelo teto do elevador, forçar abertura das próprias portas do elevador e partir a janela panorâmica. Sentes um aperto no coração. Por algum motivo, achas que isto não é um simples empanco de elevador. A inquietação cresce à medida que pensas que podes entrar em queda livre a qualquer momento. A urgência de sair dali é avassaladora. Cada ferramenta que escolheste agora parece crucial para a tua sobrevivência. A tua inteligência e habilidade são a tua única esperança para interagir com os elementos do elevador e encontrar uma saída antes que seja tarde demais.",
                img: "images/elevator_vermelho.png"
            }
        ]
    },
    {
        scene: "teto",
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Depois de alguns segundos a escanear a área à tua volta, apercebes-te que a tua única opção é subir ou descer uma escada vertical. Reparas também que, apesar de conseguires ver as portas, fechadas, de cada andar, não consegues acessá-las, pois a escada encontra-se num ângulo que impossibilita o uso do pé de cabra.",
                img: "images/elevator_shaft.jpg"
            },
            {
                id: 2,
                isChoice: false,
                txt: "Enquanto examinas a situação, ocorre-te uma ideia. Poderás chegar o mais próximo possível de uma porta de algum andar e berrar por ajuda. Talvez, com sorte, alguém ouça os teus gritos e abra as portas por fora, garantindo a tua saída.",
                img: "images/elevator_shaft.jpg"
            },
            {
                id: 1,
                isChoice: true,
                choices: [
                    {
                        id: "goUp",
                        txt: "Subir",
                        ending: false,
                        consequences: [
                            {
                                id: 1,
                                isChoice: false,
                                txt: "Decides subir pela escada vertical, movendo-te com cuidado a cada passo. Depois de subires por alguns segundos, chegas a um andar onde consegues ouvir pessoas a caminhar pelo corredor. No entanto, quando tentas berrar por ajuda, as mesmas não te ouvem. Provavelmente por causa do facto de que estes andares mais para cima se encontram perto da festa do rooftop, que está a colocar música nas alturas.",
                                img: "images/elevator_shaft.jpg"
                            },
                            {
                                id: 2,
                                isChoice: false,
                                txt: "Concluis que descer é a melhor opção. Os andares mais abaixo são provavelmente mais silenciosos e, consequentemente, aumentam as tuas chances de seres ouvido por alguém. Esta é uma rota mais lógica.",
                                img: "images/elevator_shaft.jpg"
                            },
                            {
                                id: 3,
                                isChoice: false,
                                txt: "Descer é mais assustador do que subir. As tuas mãos começam a ficar suadas de tanto nervosismo e do esforço prolongado nas escadas. De repente, ouves estalos inquietantes vindos dos cabos que seguram o elevador. Sendo eletricista, sabes muito bem que esses sons são sinais alarmantes de que algo está prestes a falhar.",
                                img: "images/elevator_shaft.jpg"
                            },
                            {
                                id: 4,
                                isChoice: false,
                                txt: "Apressas-te a descer mais rapidamente, na esperança de encontrar socorro antes que ocorra uma explosão ou que o elevador caia em queda livre. No entanto, a combinação de mãos suadas e a pressa em descer não é ideal.",
                                img: "images/elevator_shaft.jpg"
                            },
                            {
                                id: 5,
                                isChoice: false,
                                txt: "Antes que possas reagir, escorregas da escada e...",
                                img: "images/black.jpg"
                            },
                        ]
                    },
                    {
                        id: "goDown",
                        txt: "Descer",
                        ending: true,
                        consequences: [
                            {
                                id: 1,
                                isChoice: false,
                                txt: "Decides descer pela escada vertical. É um bocado assustador, já que isso significa que estás por debaixo do elevador. No entanto, quanto mais longe estiveres do som estridente da festa no rooftop, maiores serão as chances de alguém te ouvir a berrar.",
                                img: "images/elevator_shaft.jpg"
                            },
                            {
                                id: 2,
                                isChoice: false,
                                txt: "Após alguns segundos a descer pelas escadas, começas a ouvir pessoas a caminhar pelo corredor. Em desespero, berras por ajuda, e, para tua surpresa, ouviram-te. O que parece ser um casal, tendo em conta as suas vozes, para para tentar ajudar-te. Enquanto o homem vai buscar algo para abrir as portas, a mulher fica a falar contigo.",
                                img: "images/elevator_shaft.jpg"
                            },
                            {
                                id: 3,
                                isChoice: false,
                                txt: "Ouvir uma voz humana depois de te meteres num buraco escuro como este é uma bênção, mesmo que não tenhas ficado nesse buraco durante muito tempo. O homem entretanto volta e consegue abrir a porta. Ele estende a mão e tu és oficialmente salvo.",
                                img: "images/black.jpg"
                            },
                        ]
                    },
                ],
                txt: "Com um plano já pensado, só resta colocá-lo em ação. No entanto, para tal, é preciso tomar uma decisão crucial: descer ou subir?",
                img: "images/elevator_shaft.jpg"
            },
        ]
    },
    {
        scene: "janela",
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Ao saíres do elevador, deparas-te com a bela vista da cidade, acompanhada por uma brisa refrescante que te acaricia o rosto, proporcionando um ligeiro alívio à tensão acumulada.",
                img: "images/city.jpg",
            },
            {
                id: 2,
                isChoice: true,
                choices: [
                    {
                        id: "goUp",
                        txt: "Escalar",
                        ending: false,
                        consequences: [
                            {
                                id: 1,
                                isChoice: false,
                                txt: "Decides escalar para cima, determinado a alcançar o rooftop. Cada movimento é feito com precisão e cuidado, consciente do perigo que a altura representa. A vista da cidade torna-se cada vez mais deslumbrante à medida que sobes, e a brisa fresca oferece um breve momento de paz, distraindo-te momentaneamente. Nesse instante de distração, agarras algo em falso e perdes o equilíbrio.",
                                img: "images/city.jpg"
                            },
                            {
                                id: 2,
                                isChoice: false,
                                txt: "A queda súbita é interrompida pela corda, que se aperta bruscamente, impedindo-te de cair para a tua morte. Ficas suspenso no ar, salvo pela corda, absolutamente em choque. A situação quase-morte parece quase cómica, e a adrenalina no teu corpo provoca uma reação inesperada: começas a rir escandalosamente de nervoso. As lágrimas correm-te pelo rosto enquanto ris, a mistura de alívio e terror a tomar conta de ti.",
                                img: "images/city.jpg"
                            },
                            {
                                id: 3,
                                isChoice: false,
                                txt: "Quando finalmente páras de rir, exausto, começas a reajustar-te, tentando puxar-te para cima. No entanto, nesse momento crucial, a corda rebenta subitamente...",
                                img: "images/black.jpg"
                            },
                        ]   
                    },
                    {
                        id: "stayLevel",
                        txt: "Permanecer no mesmo nível",
                        ending: true,
                        consequences: [
                            {
                                id: 1,
                                isChoice: false,
                                txt: "Optas por seguir no mesmo nível, movendo-te cuidadosamente pelo exterior do edifício. Cada passo é tomado com extrema cautela, atento a cada detalhe do caminho à tua frente. A brisa refrescante continua a soprar, ajudando a manter a tua mente focada e calma. Enquanto avanças, encontras uma janela entreaberta. Com um esforço calculado, consegues abri-la completamente e entrar.",
                                img: "images/city.jpg"
                            },
                            {
                                id: 2,
                                isChoice: false,
                                txt: "Ao entrar, deparas-te com um apartamento bem decorado, iluminado por luzes suaves. O ambiente é acolhedor, com móveis modernos e objetos pessoais espalhados pela sala, evidenciando o conforto e a vida familiar do local. Antes que possas processar e explicar o que aconteceu, ouves um grito. Várias pessoas estão na sala de estar, e ao verem-te entrar inesperadamente pela janela, ficam aterrorizadas.",
                                img: "images/city.jpg"
                            },
                            {
                                id: 3,
                                isChoice: false,
                                txt: "A família residente, composta por um casal e duas crianças, recua em pânico. O homem tenta proteger a sua família enquanto a mulher, com mãos trémulas, pega no telefone e chama a polícia. Tentaste explicar, mas as tuas palavras saem confusas e apressadas, misturadas com a adrenalina e o choque do momento. Os poucos minutos que se seguem parecem uma eternidade, enquanto aguardas a chegada das autoridades.",
                                img: "images/black.jpg"
                            },
                        ]   
                    }
                ],
                txt: "Observando o teu redor, identificas duas opções viáveis: escalar para cima até alcançar o rooftop, que parece estar apenas a cerca de três andares de distância, ou seguir no mesmo nível onde te encontras atualmente.",
                img: "images/city.jpg",
            },
        ]
    },
    {
        scene: "btnEmer",
        ending: emergengyLucky,
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Decides aguardar, focando-te na respiração e tentando acalmar os pensamentos ansiosos que invadem a tua mente. Apesar do tempo parecer arrastar-se e cada minuto transformar-se numa pequena eternidade, confias que a ajuda está a caminho.",
                img: "images/elevator_vermelho.png"
            }
        ]
    }
]

let arrayPathChoice = [
    {
        path: "teto",
        state: "btnChoice",
        tools: [
            {
                id: "peCabra",
                txt: "Pé de cabra"
            },
            {
                id: "lantern",
                txt: "Lanterna"
            },
        ],
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Olhas para cima e vês o alçapão no teto do elevador. Observas que, embora não esteja selado propriamente, está fechado com força suficiente para que não consigas abri-lo apenas com as mãos. Precisarás de alguma ferramenta para forçar a abertura.",
            },
            {
                id: 2,
                isChoice: true,
                txt: "Com um olhar determinado, lembras-te do <span style='color: #b49c93'>pé de cabra</span> que escolheste. Parece que esta ferramenta funciona perfeitamente nesta situação. Queres usá-la?",
                txt2: "Infelizmente, não parece que tenhas ferramenta alguma que sirva para esta situação. Talvez devesses checar outra opção de saída."
            },
            {
                id: 3,
                isChoice: false,
                txt: "Consegues abrir o alçapão com o <span style='color: #b49c93'>pé de cabra</span> e preparas-te para subir, movendo-te com muito cuidado para não desencadear nenhuma queda livre. Ao chegar ao topo do elevador, percebes que não consegues ver nada na escuridão total.",
            },
            {
                id: 4,
                isChoice: false,
                txt: "Não sabes se é um milagre ou se és simplesmente um génio incompreendido, mas por algum motivo, trouxeste uma <span style='color: #b49c93'>lanterna</span>. A luz forte corta a escuridão, revelando o ambiente ao teu redor. Agora podes usá-la para descobrir como sair daqui.",
                txt2: "Hoje não parece ser o teu dia de sorte. Está demasiado escuro e não tens nada para clarear a situação. Seria muito arriscado movimentares-te a tantos metros de altura sem conseguires ver absolutamente nada. Decides que é melhor voltar para o elevador."
            },
        ]
    },
    {
        path: "porta",
        state: "btnChoice",
        tools: [
            {
                id: "peCabra",
                txt: "Pé de cabra"
            }
        ],
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Ponderas a possibilidade de forçar a abertura das portas do elevador, esperando que a sorte esteja do teu lado e o elevador tenha empancado num andar. Sabes que com a ferramenta certa, poderias forçar a abertura.",
            },
            {
                id: 2,
                isChoice: true,
                txt: "Lembras-te do <span style='color: #b49c93'>pé de cabra</span> que escolheste. Pensas que ele pode ser a chave para abrir as portas. Com o <span style='color: #b49c93'>pé de cabra</span> nas mãos, questionas-te: deverás usá-lo para tentar abrir as portas?",
                txt2: "Infelizmente, não tens nenhuma ferramenta para abrir as portas. Tentando com as mãos, percebes rapidamente que é impossível. Usas toda a tua força, mas a resistência é demasiada. Sentes a frustração crescer enquanto percebes que esta rota está bloqueada. Talvez seja melhor procurar outra opção de saída."
            },
            {
                id: 3,
                isChoice: false,
                txt: "As portas abrem-se para revelar outra camada de portas do próprio andar. Com um suspiro, percebes que ainda há um obstáculo. Usas novamente o <span style='color: #b49c93'>pé de cabra</span>, forçando estas portas a abrirem-se. Com esforço e determinação, consegues finalmente abri-las, revelando um corredor iluminado.",
                txt2: "As portas abrem-se para revelar uma parede cheia de tubos e teias de aranha, claramente não é uma rota de fuga viável. A frustração aperta enquanto percebes que esta saída não é possível. Talvez seja melhor procurar outra opção de saída. Quem sabe, num outro universo, tenhas tido a sorte de te deparares com um corredor."
            },
        ]
    },
    {
        path: "janela",
        state: "btnChoice",
        tools: [
            {
                id: "hammer",
                txt: "Martelo"
            },
            {
                id: "rope",
                txt: "Corda"
            },
        ],
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "O teu olhar fixa-se na janela panorâmica. A vista da cidade iluminada lá fora contrasta com a tensão dentro do elevador. Sabes que a única forma de abrir caminho por ali é quebrando o vidro.",
            },
            {
                id: 2,
                isChoice: true,
                txt: "Lembras-te do <span style='color: #b49c93'>martelo</span> que escolheste. Sabes que podes usá-lo para quebrar o vidro, mas também percebes o perigo que esse caminho representa. Estás a muitos metros de altura e qualquer movimento em falso pode ser fatal. Queres usar o <span style='color: #b49c93'>martelo</span> para partir o vidro e tentar escapar pela janela ou reconsiderar e tentar outra saída?",
                txt2: "Infelizmente, não tens nenhuma ferramenta que possa quebrar o vidro espesso da janela. Olhas para fora, sentindo a frustração crescer. Esta rota não está disponível para ti. Talvez seja melhor considerar outra opção de saída."
            },
            {
                id: 3,
                isChoice: false,
                txt: "Com um golpe certeiro, o vidro estilhaça-se, espalhando pedaços por todo o lado. Com cuidado, decides dar uma espreitadela e apercebes-te que esta é uma ideia completamente maluca.",
            },
            {
                id: 4,
                isChoice: false,
                txt: "Com muito medo, percebes que a única forma de tentar esta fuga é com segurança. Felizmente, por algum motivo, trouxeste contigo uma <span style='color: #b49c93'>corda</span>. Assim, prendes-te com a <span style='color: #b49c93'>corda</span> ao corrimão do elevador, sentindo-te um pouco mais seguro. Apesar do receio, decides explorar esta opção. A <span style='color: #b49c93'>corda</span> oferece-te a confiança necessária para avançar com cuidado e sair do elevador.",
                txt2: "Apercebes-te que há uma superfície, embora bastante estreita, em cada andar, e sabes que, em teoria, poderias usá-la para te apoiar. Infelizmente, não tens nada que te transmita a mínima segurança e respetiva confiança. Sentindo o medo a tomar conta, acovardas-te de volta para dentro do elevador, pensando que talvez outro equipamento tivesse facilitado essa rota de fuga."
            },
        ]
    },
    {
        path: "btnEmer",
        state: "btnChoice",
        tools: [],
        narrador: [
            {
                id: 1,
                isChoice: false,
                txt: "Quase como por instinto, clicaste no botão de ajuda. Ao clicares, estavas com esperanças de ouvir uma voz humana que pudesse trazer-te algum conforto e auxílio. Para teu infortúnio, é uma voz artificial que responde.",
            },
            {
                id: 2,
                isChoice: false,
                txt: '<i>"Olá, vi que clicou no botão de emergência. Após realizar um teste de diagnóstico, constatei que ocorreu um erro fatal no sistema. Infelizmente, sou incapaz de fazer coisa alguma para resolver o problema diretamente. Assim, chamarei ajuda.</i>"',
            },
            {
                id: 3,
                isChoice: false,
                txt: 'Depois de alguns segundos de silêncio excruciante, começas a questionar se o AI realmente está a chamar ajuda ou se simplesmente avariou. "Porque é que deixei o telemóvel na carrinha?" pensas. Antes que a ansiedade te consumisse, o AI volta a falar.',
            },
            {
                id: 4,
                isChoice: false,
                txt: `Relatório de emergência atualizado. Ajuda chegará em ${isEmerTimer} minutos. Aconselho-o a manter a calma e aguardar no local.`,
            },
            {
                id: 5,
                isChoice: true,
                txt: "O tempo estimado parece interminável, e há uma sensação de inquietação que não consegues afastar. Ponderas se deves confiar na promessa do AI ou se deves tomar uma ação imediata para tentar outra rota de fuga. O peso da decisão recai sobre ti, o que vais fazer?",
            },
        ]
    }
]

let chosenTools = [];

let currentScene = "intro"
let id = 0

let path = 'none'
let idChoosing = -1

let ending, isGoodEnding
let idEnding = 0
let endingConsequences = false


document.querySelector("#btnNext").addEventListener('click', e => {
    id++

    if ((currentScene == "intro" && id >= arrayNarrador[0].narrador.length) || currentScene == "none") {
        currentScene = "none"

        choosingPath()
    }

    else {
        if (endingConsequences) {
            idEnding++

            //* BAD ENDING */
            if (idEnding == ending.length && !isGoodEnding) {
                document.querySelector("#txtNarrador").innerHTML = "Parece que falhaste em escapar em segurança do elevador..."
                document.querySelector("#img").src = "images/heaven.jpg"
                document.querySelector("#btnNext").style.visibility = 'hidden'
                document.querySelector("#btnBefore").style.visibility = 'hidden'

                isTimerOn = false
                document.querySelector("#timer").innerHTML = 'Bad ending :('
            }
            //* GOOD ENDING */
            else if (idEnding == ending.length && isGoodEnding) {
                if (currentScene == "janela") {
                    document.querySelector('#txtNarrador').innerHTML = "Pouco depois, ouvem-se sirenes, e os polícias entram rapidamente no apartamento, neutralizando a situação. Sem muito tempo para dar explicações, és algemado e levado para fora do edifício. Agora, estás na parte de trás do carro da polícia, a caminho da esquadra. Sobreviveste, mas de que serviu?"
                    document.querySelector("img").src = "images/police.jpg"
                    document.querySelector("#btnNext").style.visibility = 'hidden'
                    document.querySelector("#btnBefore").style.visibility = 'hidden'

                    isTimerOn = false
                    document.querySelector("#timer").innerHTML = 'Neutral ending?'
                } else {
                    document.querySelector("#txtNarrador").innerHTML = "Conseguiste sobreviver a este acidente do elevador. No entanto, para o teu chefe, escapar de uma situação tão assustadora não significa nada, obrigando-te a prosseguir com o trabalho. Desta vez, quando tiveste que ir à carrinha, fizeste questão de utilizar as escadas..."
                    document.querySelector("img").src = "images/rooftop.jpg"
                    document.querySelector("#btnNext").style.visibility = 'hidden'
                    document.querySelector("#btnBefore").style.visibility = 'hidden'

                    isTimerOn = false
                    document.querySelector("#timer").innerHTML = 'Good ending :)'
                }
            }
            //* NOT ENDING YET */
            else {
                document.querySelector("#txtNarrador").innerHTML = ending[idEnding].txt
                document.querySelector("#img").src = ending[idEnding].img
            }
        }

        //* BOTÃO EMERGÊNCIA */
        else if (id == 1 && currentScene == "btnEmer") {

            //* GOOD ENDING */
            if (arrayNarrador.find(item => item.scene == currentScene).ending) {
                document.querySelector('#txtNarrador').innerHTML = "Os minutos parecem eternos, mas finalmente ouves vozes e passos no corredor. A esperança renasce dentro de ti. Baterias e gritos de socorro são respondidos por vozes tranquilizadoras. Conseguem abrir as portas do elevador e, com cuidado, ajudam-te a sair do espaço confinado. A luz do corredor parece incrivelmente brilhante comparada à penumbra do elevador. A sensação de alívio é esmagadora enquanto és levado para a segurança, rodeado por rostos preocupados mas amigáveis. Estás finalmente a salvo, e a terrível experiência começa a transformar-se em passado."
                document.querySelector("#img").src = "images/techs.jpg"
                document.querySelector("#btnNext").style.visibility = 'hidden'
                document.querySelector("#btnBefore").style.visibility = 'hidden'

                isTimerOn = false
                document.querySelector("#timer").innerHTML = 'Good ending :)'
            }
            //* BAD ENDING */
            else {
                document.querySelector('#txtNarrador').innerHTML = "Os minutos passam e a tensão aumenta. Começas a ouvir estalos vindos dos cabos do elevador, um som que reconheces imediatamente como um sinal de falha iminente. A sensação de pavor toma conta de ti enquanto o elevador dá um solavanco súbito. Num instante aterrador, sentes o elevador começar a cair em queda livre. O pânico consome-te, e apesar dos teus gritos, tudo acontece demasiado depressa. O impacto é devastador, e num piscar de olhos, a escuridão total toma conta de ti."
                document.querySelector("#img").src = "images/black.jpg"
                document.querySelector("#btnNext").style.visibility = 'hidden'
                document.querySelector("#btnBefore").style.visibility = 'hidden'

                isTimerOn = false
                document.querySelector("#timer").innerHTML = 'Bad ending :('
            }
        }

        else {
            document.querySelector("#txtNarrador").innerHTML = arrayNarrador.find(item => item.scene == currentScene).narrador[id].txt;
            document.querySelector("#img").src = arrayNarrador.find(item => item.scene == currentScene).narrador[id].img;

            if (arrayNarrador.find(item => item.scene == currentScene).narrador[id].isChoice) {
                document.querySelector("#btnNext").style.visibility = 'hidden'
                document.querySelector("#btnBefore").style.visibility = 'hidden'

                if (currentScene == "intro") {
                    let choicesBox = `<div class="choicesBox4">`
                    for (const choice of arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices) {
                        choicesBox += `
                            <div id="${choice.group}" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p id="${choice.id}">${choice.txt}</p>
                            </div>
                        `
                    }

                    choicesBox += `</div>`
                    document.querySelector("#interactionsBox").innerHTML += choicesBox

                    for (const btnTool of document.querySelectorAll(`#chooseTools`)) {
                        btnTool.addEventListener('click', e => {
                            if (chosenTools.length < 2 && (chosenTools.length == 0 || !chosenTools.find(item => item.id == btnTool.children[0].id))) {
                                chosenTools.push({
                                    id: btnTool.children[0].id,
                                    txt: btnTool.children[0].innerHTML
                                })
                            }
                            btnTool.classList.add("btnChoiceActive")

                            if (chosenTools.length >= 2) {
                                document.querySelector("#btnNext").style.visibility = 'visible'
                                document.querySelector("#interactionsBox").innerHTML = `<p class="montserrat" id="txtNarrador">
                                    Com um olhar atento, avalias as ferramentas à tua disposição. Decides pegar as ferramentas <span style="color: #b49c93">${chosenTools[0].txt}</span> e <span style="color: #b49c93">${chosenTools[1].txt}</span>, recolhendo-as com determinação. Agora, estás pronto para descer até à tua carrinha de serviço.
                                </p>`
                            }
                        })
                    }
                }

                else {
                    document.querySelector("#interactionsBox").innerHTML += `
                        <div class="dflex fdc jcc aic" style="width: 100%">
                            <div id="btnConsequences" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p id=${arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices[0].id}>
                                    ${arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices[0].txt}
                                </p>
                            </div>

                            <div id="btnConsequences" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p id=${arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices[1].id}>
                                    ${arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices[1].txt}
                                </p>
                            </div>
                        </div>
                    `

                    for (const btnConsequence of document.querySelectorAll("#btnConsequences")) {
                        btnConsequence.addEventListener('click', e => {
                            endingConsequences = true;
                            isGoodEnding = arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices.find(item => item.id == btnConsequence.children[0].id).ending
                            ending = arrayNarrador.find(item => item.scene == currentScene).narrador[id].choices.find(item => item.id == btnConsequence.children[0].id).consequences

                            document.querySelector("#btnNext").style.visibility = 'visible'
                            document.querySelector("#interactionsBox").innerHTML = `<p class="montserrat" id="txtNarrador">${ending[idEnding].txt}</p>`
                        })
                    }
                }

            } else if (id != 0 && id != 1 && arrayNarrador.find(item => item.scene == currentScene).narrador[id-1].isChoice) {
                document.querySelector("#btnBefore").style.visibility = 'hidden'
            } else {
                document.querySelector("#btnBefore").style.visibility = 'visible'
            }
        }
    }
})

document.querySelector("#btnBefore").addEventListener('click', e => {
    id--

    document.querySelector("#txtNarrador").innerHTML = arrayNarrador.find(item => item.scene == currentScene).narrador[id].txt;
    document.querySelector("#img").src = arrayNarrador.find(item => item.scene == currentScene).narrador[id].img;

    if (id == 0 || (id != 1 && arrayNarrador.find(item => item.scene == currentScene).narrador[id-1].isChoice)) {
        document.querySelector("#btnBefore").style.visibility = 'hidden'
    }
})







//* no elevador, na fase em que se tem que escolher um caminho */

function choosingPath() {
    if (!isTimerOn) {
        isTimerOn = true
        document.querySelector("#timer").style.visibility = 'visible'
    }
    idChoosing++

    if (idChoosing == 0) {
        document.querySelector("#btnNext").style.visibility = 'hidden'
        document.querySelector("#btnBefore").style.visibility = 'hidden'

        document.querySelector("#interactionsBox").innerHTML = `
            <p class="montserrat" id="txtNarrador">
                O ambiente tingido de vermelho parece pulsar com urgência. Decides rapidamente: que possibilidades que vais verificar?
            </p>

            <div class="dflex jcc aic" style="width: 100%;">
                <div class="choicesBox4">
                    <div id="btnPathChoice" class="${arrayPathChoice[3].state}  dflex jcc aic" style="width: 100%;">
                        <p id="btnEmer">Botão de emergência</p>
                    </div>
                    <div id="btnPathChoice" class="${arrayPathChoice[2].state} dflex jcc aic" style="width: 100%;">
                        <p id="janela">Janela</p>
                    </div>
                    <div id="btnPathChoice" class="${arrayPathChoice[1].state} dflex jcc aic" style="width: 100%;">
                        <p id="porta">Portas do elevador</p>
                    </div>
                    <div id="btnPathChoice" class="${arrayPathChoice[0].state} dflex jcc aic" style="width: 100%;">
                        <p id="teto">Teto do elevador</p>
                    </div>
                </div>
            </div>
        `
    } else {
        if (path == "btnEmer" || chosenTools.find(item => item.id == arrayPathChoice.find(item => item.path == path).tools[0].id)) {
            if (arrayPathChoice.find(item => item.path == path).narrador[idChoosing].isChoice) {
                document.querySelector("#btnNext").style.visibility = 'hidden'
                document.querySelector("#txtNarrador").innerHTML = arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt
                
                if (path == "btnEmer") {
                    document.querySelector("#interactionsBox").innerHTML += `
                        <div class="dflex fdc jcc aic" style="width: 100%">
                            <div id="btnPathChosen" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p>Esperar pela ajuda</p>
                            </div>

                            <div id="btnPathDenied" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p>Investigar as outras opções.</p>
                            </div>
                        </div>
                    `    

                    arrayPathChoice.find(item => item.path == path).state = "btnDisabled"
                } else {
                    document.querySelector("#interactionsBox").innerHTML += `
                        <div class="dflex fdc jcc aic" style="width: 100%">
                            <div id="btnPathChosen" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p>Usar item</p>
                            </div>

                            <div id="btnPathDenied" class="btnChoice dflex jcc aic" style="width: 100%;">
                                <p>Investigar as outras opções primeiro.</p>
                            </div>
                        </div>
                    `
                }

                document.querySelector("#btnPathChosen").addEventListener('click', e => {
                    if (path == "porta") {
                        
                        let randomNbr = Math.floor(Math.random() * 10); //entre 0 e 9
                        let isDoorEscape = false

                        if (randomNbr >= 8) {
                            isDoorEscape = true
                        }

                        console.log(isDoorEscape);

                        idChoosing++
                        document.querySelector("#btnNext").style.visibility = 'visible'

                        if (isDoorEscape) {
                            document.querySelector("#interactionsBox").innerHTML = `
                                <p class="montserrat" id="txtNarrador">
                                    ${arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt}
                                </p>
                            `

                            id = -1
                            currentScene = path
                        } else {
                            document.querySelector("#interactionsBox").innerHTML = `
                                <p class="montserrat" id="txtNarrador">
                                    ${arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt2}
                                </p>
                            `

                            idChoosing = -1
                            arrayPathChoice.find(item => item.path == path).state = "btnDisabled"
                        }
                    } else if (path == "btnEmer") {
                        id = -1
                        currentScene = path

                        if (isEmerTimer < minutes) {
                            emergengyLucky = true
                            arrayNarrador.find(item => item.scene == currentScene).ending = true
                        }

                        document.querySelector("#btnNext").style.visibility = 'visible'
                        document.querySelector("#interactionsBox").innerHTML = `
                            <p class="montserrat" id="txtNarrador">
                                Não consegues afastar esta sensação de inquietação que te consome, mas tentas racionalizar a situação, parando para pensar logicamente. Simplesmente esperar que a ajuda chegue parece ser a melhor opção. Assim, deixas-te escorregar lentamente até te sentares no chão do elevador. A luz vermelha de emergência ilumina o espaço de forma fantasmagórica, e cada som parece amplificado na tua mente.
                            </p>
                        `
                    } else {
                        idChoosing++
                        document.querySelector("#btnNext").style.visibility = 'visible'
                        document.querySelector("#interactionsBox").innerHTML = `
                            <p class="montserrat" id="txtNarrador">
                                ${arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt}
                            </p>
                        `
                    }
                })

                document.querySelector("#btnPathDenied").addEventListener('click', e => {
                    idChoosing = -1
                    choosingPath();
                })
            } else {
                if (idChoosing == arrayPathChoice.find(item => item.path == path).narrador.length-1) {
                    if (path != "porta" && chosenTools.find(item => item.id == arrayPathChoice.find(item => item.path == path).tools[1].id)) {
                        document.querySelector("#txtNarrador").innerHTML = arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt

                        id = -1
                        currentScene = path
                    } else {
                        document.querySelector("#txtNarrador").innerHTML = arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt2
                        idChoosing = -1
                        arrayPathChoice.find(item => item.path == path).state = "btnDisabled"
                    }
                } else {
                    document.querySelector("#txtNarrador").innerHTML = arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt
                }
            }
        } else {
            document.querySelector("#txtNarrador").innerHTML = arrayPathChoice.find(item => item.path == path).narrador[idChoosing].txt2

            idChoosing = -1
            arrayPathChoice.find(item => item.path == path).state = "btnDisabled"

        }
    }
        
    for (const btnPathChoice of document.querySelectorAll('#btnPathChoice')) {
        btnPathChoice.addEventListener('click', e => {
            if (arrayPathChoice.find(item => item.path == btnPathChoice.children[0].id).state != "btnDisabled") {
                document.querySelector("#btnNext").style.visibility = 'visible'
                document.querySelector("#interactionsBox").innerHTML = `<p class="montserrat" id="txtNarrador"></p>`

                document.querySelector("#txtNarrador").innerHTML = arrayPathChoice.find(item => item.path == btnPathChoice.children[0].id).narrador[idChoosing].txt
                path = btnPathChoice.children[0].id
            }
        })
    }
}