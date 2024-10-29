//  // Game.js
//   export default class Game {
//     constructor(id, title, genre, platform, thumbnail, description, gameUrl, status) {
//         this.id = id;
//         this.title = title;
//         this.genre = genre;
//         this.platform = platform;
//         this.thumbnail = thumbnail;
//         this.description = description;
//         this.gameUrl = gameUrl;
//         this.status = status;
//     }

//     static async fetchAllGames(category) {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '2a79cc0932mshdbca331c2b4e7ccp1411bajsnfab3248bc2dc',
//                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };
        
//         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
//         const games = await response.json();
//         return games.map(game => new Game(game.id, game.title, game.genre, game.platform, game.thumbnail, game.short_description, game.game_url, game.status));
//     }

//     static async fetchGameDetails(id) {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': '2a79cc0932mshdbca331c2b4e7ccp1411bajsnfab3248bc2dc',
//                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };

//         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
//         const game = await response.json();
//         return new Game(game.id, game.title, game.genre, game.platform, game.thumbnail, game.description, game.game_url, game.status);
//     }
//   }

    // game.js
export default class Game {
  constructor(id, title, genre, platform, thumbnail, description, gameUrl, status) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.platform = platform;
      this.thumbnail = thumbnail;
      this.description = description;
      this.gameUrl = gameUrl;
      this.status = status;
  }

  static async fetchAllGames(category) {
      const options = {
          method: 'GET',
          headers: {
              'x-rapidapi-key': '2a79cc0932mshdbca331c2b4e7ccp1411bajsnfab3248bc2dc',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
      };
      
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const games = await response.json();
      return games.map(game => new Game(game.id, game.title, game.genre, game.platform, game.thumbnail, game.short_description, game.game_url, game.status));
  }

  static async fetchGameDetails(id) {
      const options = {
          method: 'GET',
          headers: {
              'x-rapidapi-key': '2a79cc0932mshdbca331c2b4e7ccp1411bajsnfab3248bc2dc',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
      };

      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
      const game = await response.json();
      return new Game(game.id, game.title, game.genre, game.platform, game.thumbnail, game.description, game.game_url, game.status);
  }
}
