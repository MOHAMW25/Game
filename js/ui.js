 
 
 
export default class UI {
    static displayGames(games) {
        const gameContainer = document.getElementById("gameData");
        gameContainer.innerHTML = games.map(game => `
            <div class="col">
                <div data-id="${game.id}" class="card h-100 bg-transparent game-card" role="button">
                    <div class="card-body">
                      <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}" alt="${game.title}">
                         </figure>
                          <figcaption>
                              <div class="hstack justify-content-between">
                                  <h3 class="h6 small">${game.title}</h3>
                                  <span class="badge text-bg-primary p-2">${game.genre}</span>
                              </div>
                              <p class="card-text small text-center opacity-50">
                                  A free-to-play, multi-platform MMORPG from NCSoft and Amazon.
                              </p>
                          </figcaption>
                          <footer class="card-footer small hstack justify-content-between">
                              <span class="badge badge-color">MMORPG</span>
                              <span class="badge badge-color">PC (Windows)</span>
                          </footer>
                      </div>
                </div>
            </div>
        `).join('');
    }

    static displayGameDetails(game) {
        const detailsSection = `
            <section class="details">
                <div class="container">
                    <header class="hstack justify-content-between">
                        <h1 class="text-center h3 py-4">Details Game</h1>
                        <button class="btn-close btn-close-white" id="btnClose"></button>
                    </header>
                    <div class="row g-4" id="detailsContent">
                        <div class="col-md-4">
                            <img src="${game.thumbnail}" class="w-100" alt="${game.title}">
                        </div>
                        <div class="col-md-8">
                            <h3>Title: ${game.title}</h3>
                            <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
                            <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                            <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
                            <p class="small">${game.description}</p>
                            <a class="btn btn-outline-warning" target="_blank" href="${game.gameUrl}">Show Game</a>
                        </div>
                    </div>
                </div>
            </section>
        `;

        document.body.insertAdjacentHTML('beforeend', detailsSection);
        document.getElementById("section").classList.add("d-none");

        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".details").remove();
            document.getElementById("section").classList.remove("d-none");
        });
    }
}
