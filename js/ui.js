import api from "./api.js";

const ui = {
    async redenrizarPensamento() {
        const listaPensamentos = document.querySelector("#lista-pensamentos");

        try {
            const pensamentos = await api.buscarPensamento();
            // CORREÇÃO: Passamos a referência da função, sem os parênteses ()
            pensamentos.forEach(ui.adicionarPensamentos);
        } catch {
            alert("Erro ao renderizar pensamentos...");
        }
    },

    adicionarPensamentos(pensamento) {
        const listaPensamentos = document.querySelector("#lista-pensamentos");
        const li = document.createElement('li');
        li.setAttribute('data-id', pensamento.id);
        li.classList.add('li-pensamento');

        const iconeAspas = document.createElement('img');
        iconeAspas.src = "assets/imagens/aspas-azuis.png"; // Verifique se o nome da pasta é "imagens" ou "imagens" e se o nome do arquivo está certo
        iconeAspas.alt = "aspas azuis";
        iconeAspas.classList.add('icone-aspas');

        const pensamentoConteudo = document.createElement('div');
        pensamentoConteudo.classList.add('pensamento-conteudo');
        // CORREÇÃO: Aqui deve ser .conteudo, não .id
        pensamentoConteudo.textContent = pensamento.conteudo;

        const pensamentoAutoria = document.createElement('div');
        pensamentoAutoria.classList.add('pensamento-autoria');
        pensamentoAutoria.textContent = pensamento.autoria;

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        listaPensamentos.appendChild(li);
    }
};

export default ui;