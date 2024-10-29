 
// import Game from '../js/game.js';
// import UI from '../js/ui.js';

// async function loadGamesByCategory(category) {
//     const games = await Game.fetchAllGames(category);
//     UI.displayGames(games);
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     const defaultCategory = 'mmorpg';    
//     await loadGamesByCategory(defaultCategory);

    
//     document.querySelectorAll('nav .nav-link').forEach(link => {
//         link.addEventListener('click', async (event) => {
//             event.preventDefault();  
//             const category = event.target.dataset.category;
//             await loadGamesByCategory(category);
//         });
//     });
 
//     document.getElementById("gameData").addEventListener("click", async (event) => {
//         const gameId = event.target.closest('.game-card')?.getAttribute('data-id');
//         if (gameId) {
//             const game = await Game.fetchGameDetails(gameId);
//             UI.displayGameDetails(game);
//         }
//     });
// });


// let links = document.querySelectorAll("nav .nav-link");

// links.forEach(link => {
//     link.addEventListener("click", function() {
         
//         links.forEach(l => l.classList.remove("active"));
        
//         this.classList.add("active");
//     });
// });




	

// main.js
import Game from './game.js';
import UI from './ui.js';

async function loadGamesByCategory(category) {
    const games = await Game.fetchAllGames(category);
    UI.displayGames(games);
}

document.addEventListener('DOMContentLoaded', async () => {
    const defaultCategory = 'mmorpg';    
    await loadGamesByCategory(defaultCategory);

    document.querySelectorAll('nav .nav-link').forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();  
            const category = event.target.dataset.category;
            await loadGamesByCategory(category);
        });
    });

    document.getElementById("gameData").addEventListener("click", async (event) => {
        const gameId = event.target.closest('.game-card')?.getAttribute('data-id');
        if (gameId) {
            const game = await Game.fetchGameDetails(gameId);
            UI.displayGameDetails(game);
        }
    });
});
