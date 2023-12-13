document.addEventListener("DOMContentLoaded", function () {
    const carona = {
        nome: "Maria Silva",
        destino: "Av. Cristiano Machado, 11833 - Vila Cloris, Belo Horizonte",
        horarioSaida: "08:00 AM",
        avaliacao: 4.9
    };

    // Preenchendo as informações da carona na tela
    document.getElementById("name").textContent = carona.nome;
    document.getElementById("destination").textContent = carona.destino;
    document.getElementById("departure-time").textContent = carona.horarioSaida;
    document.getElementById("rating").textContent = carona.avaliacao.toFixed(1);
});
