var alunos = []

var editedAlunoId = 0

var visibleAlert = true

var alunoFields = {
    name: document.getElementById("nameNewAluno"),
    phone: document.getElementById("telefoneNewAluno"),
    lastName: document.getElementById("lastNameNewAluno"),
    email: document.getElementById("emailNewAluno"),
    curso: document.getElementById("cursoNewAluno")
}

let endpointURL = "http://172.16.48.54:5000/api/alunos"

document.addEventListener("DOMContentLoaded", function() {
    updateAlunosList(self.alunos)
    let createButton = document.getElementById("criarAlunoBtn")
    createButton.addEventListener('click', () => {
        addAluno()
    })

    let editButton = document.getElementById("editarAlunoBtn")
    let limparBtn = document.getElementById("limpar")
    limparBtn.hidden = true
    editButton.hidden = true

    limparBtn.addEventListener('click', clickLimpar)
    editButton.addEventListener('click', () => {
        if(self.editedAlunoId != 0) {
            limparBtn.hidden = true
            editButton.hidden = true
            submitAlunoEdit()
        }
    })
});

function showAlert(type, text) {
    var alertPlaceholder = document.getElementById("alertPlaceholder")
    var wrapper = document.createElement('div')

    wrapper = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' + text + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.innerHTML = wrapper

    if(!visibleAlert){
        alertPlaceholder.innerHTML =""
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }