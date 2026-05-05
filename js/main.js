import ui from "./ui.js"
import api from "./api.js"

document.addEventListener('DOMContentLoaded', () => {
    ui.redenrizarPensamento()

    const formularioPensamentos = document.getElementById("pensamento-form")
    formularioPensamentos.addEventListener('submit', manipularPensamento)
})

async function manipularPensamento(event){
    event.preventDefault()
    const id = document.getElementById('pensamento-id').value
    const conteudo = document.getElementById('pensamento-conteudo').value
    const autoria = document.getElementById('pensamento-autoria').value

    try {
        await api.salvarPensamento({conteudo, autoria})
        ui.redenrizarPensamento()
    } catch {
        alert('erro ao salvar pensamento!!!')
    }
    
}