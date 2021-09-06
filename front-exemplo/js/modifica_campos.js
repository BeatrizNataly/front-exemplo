function apagaCampo(idAluno) {
    var newAlunos = self.alunos.filter(aluno => aluno.id != idAluno)
    self.alunos = newAlunos
    updateAlunosList()
}

function setCampos(aluno) {
    console.log(aluno)
    alunoFields.name.value = aluno.first_name
    alunoFields.phone.value = aluno.phone
    alunoFields.lastName.value = aluno.last_name
    alunoFields.email.value = aluno.email
    alunoFields.curso.value = aluno.curso
}

function getCampos() {
    return { first_name: alunoFields.name.value, phone: alunoFields.phone.value, last_name: alunoFields.lastName.value, email: alunoFields.email.value, curso: alunoFields.curso.value }
}

function validaCampos() {
    let erros = ""
    let validacao = []
    let resultadoValidacao = 0

    validacao = testaValidacao(alunoFields.name, "Nome em branco. ")
    erros += validacao[0]; resultadoValidacao += validacao[1]

    validacao = testaValidacao(alunoFields.lastName, "Sobrenome em branco. ")
    erros += validacao[0]; resultadoValidacao += validacao[1]

    validacao = testaValidacao(alunoFields.email, "Email em branco. ")
    erros += validacao[0]; resultadoValidacao += validacao[1]

    validacao = testaValidacao(alunoFields.phone, "Telefone em branco. ")
    erros += validacao[0]; resultadoValidacao += validacao[1]

    validacao = testaValidacao(alunoFields.curso, "Nenhum curso selecionado. ")
    erros += validacao[0]; resultadoValidacao += validacao[1]

    if(resultadoValidacao >= 3){
        erros = "Muitos campos em branco. Preencha todos para criar um novo aluno."
    }

    return [erros, resultadoValidacao]
}

function releaseValidacao(resultado) {
    let infoNewAluno = getCampos()
    if (resultado == 0) {
        infoNewAluno.id = getRandomInt(1, 100000)
        clearCampos()
        createNewAluno(infoNewAluno)
        updateAlunosList()

        return true
    } else {
        return false
    }
}

function testaValidacao(campo, erro) {
    var campoLido = campo
    var resultadoValidacao = 0
    let erros = ""

    if (campo.value == "") {
        campoLido.classList.add("is-invalid")
        erros = erro
        resultadoValidacao++

    } else {
        campoLido.classList.remove("is-invalid")
    }
    return [erros, resultadoValidacao]
}

function throwErro(text) {
    var exibeErro = document.getElementById("exibe-erros")
    exibeErro.textContent = text
}

function clearCampos() {
    alunoFields.name.value = ""
    alunoFields.phone.value = ""
    alunoFields.lastName.value = ""
    alunoFields.email.value = ""
    alunoFields.curso.value = ""
}