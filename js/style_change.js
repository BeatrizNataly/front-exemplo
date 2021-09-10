// Easter egg --> Exibe/esconde fish-groove.gif
var secreto = document.getElementById("bin")
secreto.hidden = true

function surpriseFunction() {
  secreto.hidden = !secreto.hidden
}
//

function toggleMode(){
    var body = document.body
    body.classList.toggle("dark-mode")

    var formTable = document.getElementById("form-table")
    formTable.classList.toggle("table-dark")

    toggleBtn("head-image"); toggleBtn("head-light"); toggleBtn("toggle"); toggleBtn("toggle2")

    toggleInput("nameNewAluno"); toggleInput("lastNameNewAluno"); toggleInput("emailNewAluno"); toggleInput("telefoneNewAluno"); toggleInput("cursoNewAluno")
}

function toggleInput(idInput){
    var input = document.getElementById(idInput)
    input.classList.toggle("dark-input")
}

function toggleBtn(ref){
    var elemento = document.getElementById(ref)
    elemento.hidden = !elemento.hidden
}

function dismissAlert(){
    var alertPlaceholder = document.getElementById("alertPlaceholder")
    alertPlaceholder.innerHTML = ""

    var statusAlert = document.getElementById("status-alteracao")

    visibleAlert = !visibleAlert

    if(visibleAlert){
        statusAlert.innerHTML = '<div> <p style="color:green"> Exibição ativada. </p></div>'
    } else {
        statusAlert.innerHTML = '<div> <p style="color:red"> Exibição desativada. </p></div>'
    }
    return visibleAlert
  }