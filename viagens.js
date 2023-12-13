document.addEventListener('DOMContentLoaded', function () {
    // Carregar dados do JSON
    fetch('./viagens.json')
        .then((resp) => resp.json())
        .then((data) => {
            var cardContainer = document.getElementById('card-container');
            var mydf = document.createDocumentFragment();

            data.forEach(item => {
                var galleryDiv = document.createElement("div");
                galleryDiv.className = "cards";

                var img = document.createElement('img');
                img.src = item.img;
                galleryDiv.appendChild(img);

                var itemName = document.createElement("h2");
                itemName.textContent = item.nome;
                galleryDiv.appendChild(itemName);

                var departure = document.createElement("p");
                departure.textContent = "Ponto de partida: " + item.pontoDePartida;
                galleryDiv.appendChild(departure);

                var departureTime = document.createElement("p");
                departureTime.textContent = "Horário de partida: " + item.horarioSaida;
                galleryDiv.appendChild(departureTime);

                mydf.appendChild(galleryDiv);
            });

            cardContainer.appendChild(mydf);

            // Filtro de cards
            const searchInput = document.getElementById('search-input');
            const cards = document.querySelectorAll('.cards');

            function filterIcons(searchQuery) {
                let number = 0;

                cards.forEach(function (card) {
                    const name = card.querySelector("h2").textContent.toLowerCase();

                    if (name.includes(searchQuery.toLowerCase())) {
                        card.style.display = "flex";
                        number++;
                    } else {
                        card.style.display = "none";
                    }
                });
            }

            searchInput.addEventListener("input", function () {
                const searchQuery = searchInput.value.trim();
                filterIcons(searchQuery);
            });
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
});
