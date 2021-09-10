function createNewAluno(data) {
    self.alunos.push(data)
    showAlert("success", `Aluno adicionado com sucesso`)
}

function updateAluno(data) {
    apagaCampo(data.id)
    self.alunos.push(data)
    let criarBtn = document.getElementById("criarAlunoBtn")

    criarBtn.hidden = false
    showAlert("success", `Aluno alterado com sucesso`)
    updateAlunosList()
}

function updateAlunosList() {
    let list = document.getElementById("items")
    var alunoEntries = ""
    self.alunos.forEach(aluno => {
        alunoEntries += `<tr><td>${aluno.first_name}</td><td>${aluno.last_name}</td><td>${aluno.email}</td><td>${aluno.phone}</td><td>${aluno.curso}</td><td><button  class="btn btn-outline-warning" onClick="editAluno(${aluno.id})">Editar</button></td><td><button class="btn btn-outline-danger" onClick="apagaAluno(${aluno.id})">Apagar</button></td></tr>`
    });

    list.innerHTML = alunoEntries
}

function apagaAluno(idAluno) {
    let alunoFiltrados = self.alunos.filter(aluno => aluno.id == idAluno)
    let aluno = alunoFiltrados[0]
    apagaCampo(idAluno)
    showAlert("danger", `Aluno(a) ${aluno.first_name} ${aluno.last_name} foi apagado(a).`)
}

function editAluno(idAluno) {
    let limparBtn = document.getElementById("limpar")
    let editButton = document.getElementById("editarAlunoBtn")
    let criarBtn = document.getElementById("criarAlunoBtn")

    limparBtn.hidden = false
    editButton.hidden = false
    criarBtn.hidden = true

    self.editedAlunoId = idAluno
    let aluno = alunos.filter(aluno => aluno.id == idAluno)[0]
    setCampos(aluno)
}

function addAluno() {
    var validacao = validaCampos()

    throwErro(`${validacao[0]}`)
    releaseValidacao(`${validacao[1]}`)

}

function submitAlunoEdit() {
    var editedAluno = getCampos()
    editedAluno.id = self.editedAlunoId
    updateAluno(editedAluno)
    clearCampos()

}

function clickLimpar() {
    showAlert("warning", `Edição de aluno cancelada.`)
    clearCampos()
    let limparBtn = document.getElementById("limpar")
    let editButton = document.getElementById("editarAlunoBtn")
    let criarBtn = document.getElementById("criarAlunoBtn")

    criarBtn.hidden = false
    limparBtn.hidden = true
    editButton.hidden = true

}