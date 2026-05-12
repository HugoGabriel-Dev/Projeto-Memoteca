const api = {
  // Função para buscar (GET)
  async buscarPensamento() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch {
      alert("Erro ao buscar pensamentos no servidor.");
      throw Error;
    }
  },

  // NOVA função para salvar (POST)
  async salvarPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Erro ao salvar pensamento no servidor.");
    }
  }
};

export default api;