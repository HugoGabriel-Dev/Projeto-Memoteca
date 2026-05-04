const api = {
    async buscarPensamento() {
        try {
            const response = await fetch("http://localhost:3000/pensamentos");
            return await response.json();
        } catch {
            alert("Erro, não foi possível encontrar pensamento...");
            throw Error;
        }
    },
    async salvarPensamento(pensamento) {
        try {
            const response = await fetch("http://localhost:3000/pensamentos", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json();
        } catch {
            alert("Erro ao salvar pensamento...");
            throw Error;
        }
    }
};

export default api;