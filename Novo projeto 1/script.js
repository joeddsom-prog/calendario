// ======================================
// CALENDÁRIO DE DATAS COMEMORATIVAS
// BRASIL - 2026
// ======================================


const nomeMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


const nomeDias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];


// ======================================
// DATAS COMEMORATIVAS
// ======================================

const datas = {

    "01-01": {
        nome: "Confraternização Universal",
        tipo: "feriado"
    },

    "01-06": {
        nome: "Dia da Gratidão",
        tipo: "comemorativa"
    },

    "01-07": {
        nome: "Dia do Leitor",
        tipo: "comemorativa"
    },

    "01-09": {
        nome: "Dia do Astronauta",
        tipo: "comemorativa"
    },

    "01-20": {
        nome: "Dia do Farmacêutico",
        tipo: "comemorativa"
    },


    "02-02": {
        nome: "Dia de Iemanjá",
        tipo: "comemorativa"
    },

    "02-13": {
        nome: "Dia Mundial do Rádio",
        tipo: "comemorativa"
    },


    "03-08": {
        nome: "Dia Internacional da Mulher",
        tipo: "comemorativa"
    },

    "03-14": {
        nome: "Dia Nacional da Poesia",
        tipo: "comemorativa"
    },

    "03-15": {
        nome: "Dia do Consumidor",
        tipo: "comemorativa"
    },

    "03-21": {
        nome: "Dia Internacional das Florestas",
        tipo: "comemorativa"
    },

    "03-22": {
        nome: "Dia Mundial da Água",
        tipo: "comemorativa"
    },


    "04-07": {
        nome: "Dia Mundial da Saúde",
        tipo: "comemorativa"
    },

    "04-19": {
        nome: "Dia dos Povos Indígenas",
        tipo: "comemorativa"
    },

    "04-21": {
        nome: "Tiradentes",
        tipo: "feriado"
    },

    "04-22": {
        nome: "Descobrimento do Brasil",
        tipo: "comemorativa"
    },


    "05-01": {
        nome: "Dia Mundial do Trabalho",
        tipo: "feriado"
    },

    "05-13": {
        nome: "Abolição da Escravatura",
        tipo: "comemorativa"
    },

    "05-15": {
        nome: "Dia Internacional da Família",
        tipo: "comemorativa"
    },


    "06-05": {
        nome: "Dia Mundial do Meio Ambiente",
        tipo: "comemorativa"
    },

    "06-12": {
        nome: "Dia dos Namorados",
        tipo: "comemorativa"
    },

    "06-24": {
        nome: "Dia de São João",
        tipo: "comemorativa"
    },


    "07-20": {
        nome: "Dia do Amigo",
        tipo: "comemorativa"
    },

    "07-26": {
        nome: "Dia dos Avós",
        tipo: "comemorativa"
    },


    "08-11": {
        nome: "Dia do Estudante",
        tipo: "comemorativa"
    },

    "08-22": {
        nome: "Dia do Folclore",
        tipo: "comemorativa"
    },

    "08-25": {
        nome: "Dia do Soldado",
        tipo: "comemorativa"
    },
     "08-27": {
        nome: "Dia do Psicólogo",
        tipo: "comemorativa"
    },
  
    
    
    "08-28": {
        nome: "Dia do Bancario",
        tipo: "comemorativa"
    },
    

    
    "08-31": {
        nome: "Dia do Nutricionista",
        tipo: "comemorativa"
    },
    



    "09-07": {
        nome: "Independência do Brasil",
        tipo: "feriado"
    },

    "09-21": {
        nome: "Dia da Árvore",
        tipo: "comemorativa"
    },

    "09-22": {
        nome: "Dia Mundial sem Carro",
        tipo: "comemorativa"
    },
     "10-01": {
        nome: "Dia do idoso",
        tipo: "comemorativa"
    },
     "10-05": {
        nome: "Dia mundial do professor",
        tipo: "comemorativa"
    },
     "10-28": {
        nome: "Dia do servidor público",
        tipo: "comemorativa"
    },
  
     "10-12": {
        nome: "Nossa Senhora Aparecida",
        tipo: "feriado"
    },

    "10-12": {
        nome: "Nossa Senhora Aparecida / Dia das Crianças",
        tipo: "feriado"
    },

    "10-15": {
        nome: "Dia do Professor",
        tipo: "comemorativa"
    },

    "10-18": {
        nome: "Dia do Médico",
        tipo: "comemorativa"
    },


    "11-02": {
        nome: "Finados",
        tipo: "feriado"
    },
     "11-08": {
        nome: "Dia do radialista",
        tipo: "comemorativa"
    },
  

    "11-15": {
        nome: "Proclamação da República",
        tipo: "feriado"
    },

    "11-19": {
        nome: "Dia da Bandeira",
        tipo: "comemorativa"
    },

    "11-20": {
        nome: "Dia Nacional de Zumbi e da Consciência Negra",
        tipo: "feriado"
    },


    "12-01": {
        nome: "Dia Mundial de Combate à AIDS",
        tipo: "comemorativa"
    },
     "12-12": {
        nome: "Dia do mecânico",
        tipo: "comemorativa"
    },
  

    "12-25": {
        nome: "Natal",
        tipo: "feriado"
    },

    "12-31": {
        nome: "Véspera de Ano Novo",
        tipo: "comemorativa"
    }

};


// ======================================
// DATAS MÓVEIS DE 2026
// ======================================

datas["02-16"] = {
    nome: "Carnaval",
    tipo: "comemorativa"
};

datas["02-17"] = {
    nome: "Carnaval",
    tipo: "comemorativa"
};

datas["02-18"] = {
    nome: "Quarta-feira de Cinzas",
    tipo: "comemorativa"
};

datas["04-03"] = {
    nome: "Paixão de Cristo",
    tipo: "feriado"
};

datas["04-05"] = {
    nome: "Domingo de Páscoa",
    tipo: "comemorativa"
};

datas["06-04"] = {
    nome: "Corpus Christi",
    tipo: "comemorativa"
};


// ======================================
// ELEMENTOS DO HTML
// ======================================

const elementoMesAno =
    document.getElementById("mesAno");

const elementoDias =
    document.getElementById("dias");

const listaDatas =
    document.getElementById("listaDatas");

const botaoAnterior =
    document.getElementById("mesAnterior");

const botaoProximo =
    document.getElementById("mesProximo");


// ======================================
// DATA ATUAL
// ======================================

let dataAtual = new Date();

let mesAtual = dataAtual.getMonth();

let anoAtual = 2026;


// ======================================
// FUNÇÃO PARA GERAR O CALENDÁRIO
// ======================================

function gerarCalendario() {

    elementoDias.innerHTML = "";

    elementoMesAno.textContent =
        `${nomeMeses[mesAtual]} ${anoAtual}`;


    const primeiroDia =
        new Date(anoAtual, mesAtual, 1).getDay();


    const quantidadeDias =
        new Date(anoAtual, mesAtual + 1, 0).getDate();


    // Espaços antes do primeiro dia

    for (let i = 0; i < primeiroDia; i++) {

        const espaco =
            document.createElement("div");

        espaco.classList.add(
            "dia",
            "numero-outro-mes"
        );

        elementoDias.appendChild(espaco);
    }


    // Criar os dias

    for (let dia = 1; dia <= quantidadeDias; dia++) {

        const elemento =
            document.createElement("div");

        elemento.classList.add("dia");


        const numero =
            document.createElement("strong");

        numero.textContent = dia;


        elemento.appendChild(numero);


        const chave =
            `${String(mesAtual + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;


        // Verificar se existe data comemorativa

        if (datas[chave]) {

            elemento.classList.add(
                datas[chave].tipo
            );

            elemento.title =
                datas[chave].nome;

        }


        // Verificar dia atual

        const hoje = new Date();

        if (
            dia === hoje.getDate() &&
            mesAtual === hoje.getMonth() &&
            anoAtual === hoje.getFullYear()
        ) {

            elemento.classList.add("hoje");

        }


        // Clique no dia

        elemento.addEventListener(
            "click",
            function () {

                mostrarData(
                    dia,
                    chave
                );

            }
        );


        elementoDias.appendChild(elemento);
    }


    mostrarDatasDoMes();
}


// ======================================
// MOSTRAR DATAS DO MÊS
// ======================================

function mostrarDatasDoMes() {

    listaDatas.innerHTML = "";


    const datasDoMes = [];


    for (const chave in datas) {

        const partes = chave.split("-");

        const mes = Number(partes[0]);

        if (mes === mesAtual + 1) {

            datasDoMes.push({
                dia: Number(partes[1]),
                nome: datas[chave].nome,
                tipo: datas[chave].tipo
            });

        }

    }


    if (datasDoMes.length === 0) {

        listaDatas.innerHTML =
            "<p>Nenhuma data cadastrada neste mês.</p>";

        return;
    }


    datasDoMes.sort(
        (a, b) => a.dia - b.dia
    );


    datasDoMes.forEach(
        data => {

            const evento =
                document.createElement("div");

            evento.classList.add(
                "evento"
            );

            if (data.tipo === "feriado") {

                evento.classList.add(
                    "feriado"
                );

            }


            evento.innerHTML = `
                <strong>
                    ${String(data.dia).padStart(2, "0")}/${String(mesAtual + 1).padStart(2, "0")}
                </strong>

                ${data.nome}
            `;


            listaDatas.appendChild(
                evento
            );

        }
    );
}


// ======================================
// MOSTRAR UMA DATA
// ======================================

function mostrarData(dia, chave) {

    if (datas[chave]) {

        listaDatas.innerHTML = `

            <div class="evento">

                <strong>
                    ${String(dia).padStart(2, "0")}/${String(mesAtual + 1).padStart(2, "0")}/${anoAtual}
                </strong>

                ${datas[chave].nome}

            </div>

        `;

    } else {

        listaDatas.innerHTML = `

            <div class="evento">

                <strong>
                    ${String(dia).padStart(2, "0")}/${String(mesAtual + 1).padStart(2, "0")}/${anoAtual}
                </strong>

                Nenhuma data comemorativa cadastrada.

            </div>

        `;

    }

}


// ======================================
// MÊS ANTERIOR
// ======================================

botaoAnterior.addEventListener(
    "click",
    function () {

        mesAtual--;

        if (mesAtual < 0) {

            mesAtual = 11;
            anoAtual--;

        }

        gerarCalendario();

    }
);


// ======================================
// PRÓXIMO MÊS
// ======================================

botaoProximo.addEventListener(
    "click",
    function () {

        mesAtual++;

        if (mesAtual > 11) {

            mesAtual = 0;
            anoAtual++;

        }

        gerarCalendario();

    }
);


// ======================================
// INICIAR
// ======================================

gerarCalendario();
``