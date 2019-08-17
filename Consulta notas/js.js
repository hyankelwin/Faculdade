let quantidade = 0;
let aluno;
let listaInstanciada;
let situacao;
let elements;
function criarAluno() {
    let codigo = document.getElementById('codigo').value;
    let nome = document.getElementById('nome').value;
    let curso = document.getElementById('curso').value;
    let notaA = document.getElementById('notaA').value;
    let notaB = document.getElementById('notaB').value;
    let frequencia = document.getElementById('frequencia').value;
    let nota = (parseFloat(notaA) + parseFloat(notaB)) / 2;
    let calculaMedia = nota.toPrecision(2);
    if (frequencia >= 75 && nota >= 6) {
        situacao = 'APROVADO';
    } else {
        situacao = 'REPROVADO';
    };
    this.aluno = {
        codigo: codigo,
        nome: nome,
        curso: curso,
        notaA: notaA,
        notaB: notaB,
        frequencia: frequencia,
        situacao: situacao,
        media: calculaMedia
    };
    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('notaA').value = '';
    document.getElementById('notaB').value = '';
    document.getElementById('frequencia').value = '';
    this.criarLista();
};
function criarLista() {
    while (quantidade == 0) {
        this.listaInstanciada = new lista();
    };
    this.listaInstanciada.append(this.aluno);
    this.listaInstanciada.getHead();
    this.mostraAlunos();
};
function lista() {
    let construtor = function (aluno) {
        this.aluno = aluno,
            this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = function (element) {
        let node = new construtor(element);
        let current;
        if (!head) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            };
            current.next = node;
        };
        length++;
    };
    this.returnLength = function () {
        return length;
    };
    this.getHead = function () {
        return head;
    };
    quantidade = quantidade + 1;
};
function mostraAlunos() {
    let current = this.listaInstanciada.getHead();
    document.getElementById('showCard').innerHTML = null;
    for (let i = 0; i < this.listaInstanciada.returnLength(); i++) {
        let elements = document.getElementById('showCard').innerHTML += "<div class='containerAluno' id='containerAlunoId'><div class='nomeCodigo'><h4>" + current.aluno.nome + "</h4><div class='divisao'>|</div><h4>" + current.aluno.codigo + "</h4></div><table style='width:100%'><tr><th>Disciplina</th><th>1º Bimestre</th><th>2º Bimestre</th><th>Frequência</th><th>Média</th><th>Situação</th></tr><tr><td>" + current.aluno.curso + "</td><td>" + current.aluno.notaA + "</td><td>" + current.aluno.notaB + "</td><td>" + current.aluno.frequencia + "%" + "</td>" + "<td>" + current.aluno.media + "</td>" + "<td id='corSituacao" + i + "'>" + current.aluno.situacao + "</td></tr></table></div>";
        if (current.aluno.situacao == 'REPROVADO') {
            document.getElementById('corSituacao' + i).style.color = 'red';
        } else {
            document.getElementById('corSituacao' + i).style.color = '#4CAF50';
        }
        current = current.next;
    }
};
function pesquisar() {
    let text = document.getElementById('textoPesquisa').value;

    if (text == this.listaInstanciada.getHead().aluno.codigo) {
        let alunoPesquisado = this.listaInstanciada.getHead().aluno;
        document.getElementById('showCard').innerHTML = '';
        this.mostraPesquisa(alunoPesquisado);
    } else {
        let current = this.listaInstanciada.getHead();
        while (current.next) {
            current = current.next;
            if (current.aluno.codigo == text) {
                let alunoPesquisado = current.aluno;
                document.getElementById('showCard').innerHTML = '';
                this.mostraPesquisa(alunoPesquisado);
            };
        };
    };
};
function verificarPesquisa() {
    if (event.target.value == '') {
        this.mostraAlunos();
    };
};
function mostraPesquisa(alunoPesquisado) {
    document.getElementById('showCard').innerHTML += "<div class='containerAluno' id='containerAlunoId'><div class='nomeCodigo'><h4>" + alunoPesquisado.nome + "</h4><div class='divisao'>|</div><h4>" + alunoPesquisado.codigo + "</h4></div><table style='width:100%'><tr><th>Disciplina</th><th>1º Bimestre</th><th>2º Bimestre</th><th>Frequência</th><th>Média</th><th>Situação</th></tr><tr><td>" + alunoPesquisado.curso + "</td><td>" + alunoPesquisado.notaA + "</td><td>" + alunoPesquisado.notaB + "</td><td>" + alunoPesquisado.frequencia + "</td>" + "<td>" + alunoPesquisado.media + "</td>" + "<td id='corSituacao'>" + alunoPesquisado.situacao + "</td></tr></table></div>";
    if (alunoPesquisado.situacao == 'REPROVADO') {
        document.getElementById('corSituacao').style.color = 'red';
    } else {
        document.getElementById('corSituacao').style.color = '#4CAF50';
    };
};





