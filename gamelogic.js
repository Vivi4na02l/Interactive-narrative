let isEmerTimer = Math.floor(Math.random() * 15)
let time = 5 * 60
let isTimerOn = false
document.querySelector("#timer").style.visibility = 'hidden'

setInterval(coundown5Min, 1000);
function coundown5Min() {
    if (isTimerOn) {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        document.querySelector("#timer").innerHTML = `${minutes}:${seconds}`
        time--
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
                txt: "Olhas em volta e vês os elementos do elevador: um painel de controlo, o botão de emergência, o teto do elevador, as portas do elevador e uma janela panorâmica. Sentes um aperto no coração. Por algum motivo, achas que isto não é um simples bloqueio do elevador. A inquietação cresce à medida que pensas que podes entrar em queda livre a qualquer momento. A urgência de sair dali é avassaladora. Cada ferramenta que escolheste agora parece crucial para a tua sobrevivência. A tua inteligência e habilidade são a tua única esperança para interagir com os elementos do elevador e encontrar uma saída antes que seja tarde demais.",
                img: "images/elevator_vermelho.png"
            }
        ]
    },
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


document.querySelector("#btnNext").addEventListener('click', e => {
    id++

    if ((currentScene == "intro" && id >= arrayNarrador[0].narrador.length) || currentScene == "none") {
        currentScene = "none"

        choosingPath()
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

        } else if (id != 1 && arrayNarrador.find(item => item.scene == currentScene).narrador[id-1].isChoice) {
            document.querySelector("#btnBefore").style.visibility = 'hidden'
        } else {
            document.querySelector("#btnBefore").style.visibility = 'visible'
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
                        currentScene = path
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