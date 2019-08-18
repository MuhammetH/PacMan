//--------------------------------------------
// ------- Game configuration data  ----------
//--------------------------------------------

// This is a numerical representation of the pacman game.
// It uses numbers to represent walls, coins, empty space, and pacman.
let gameData = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Specifically, a wall is represented by the number 1,
// a coin is the number 2, empty ground is the number 3,
// and Pacman is the number 5.

// In our code below, we want to be able to refer to names of things,
// and not numbers. To make that possible, we set up a few labels.
const WALL = 1;
const COIN = 2;
const GROUND = 3;
const PACMAN = 5;

// We will use the identifier "map" to refer to the game map.
// We won't assign this until later on, when we generate it
// using the gameData.
let map;

// We need to keep track of Pacman's location on the game board.
// That is done through a pair of coordinates.
// And, we will keep track of what direction she is facing.
let pacman = {
  x: 6,
  y: 4,
  direction: "right"
};
//-------------------------------------
//---- Game map creation functions ----
//-------------------------------------
// This function converts gameData into DOM elements.
function createTiles(data) {

  // We'll keep the DOM elements in an array.
  let tilesArray = [];

  // Let's take one row at a time...
  for (let row of data) {

    // Then look at each column in that row.
    for (let col of row) {

      // We create a game tile as a div element.
      let tile = document.createElement('div');

      // We assign every tile the class name tile.
      tile.classList.add('tile');

      // Now, depending on the numerical value,
      // we need to add a more specific class.
      if (col === WALL) {
        tile.classList.add('wall');

      } else if (col === COIN) {
        tile.classList.add('coin');

      } else if (col === GROUND) {
        tile.classList.add('ground');

      } else if (col === PACMAN) {
        tile.classList.add('pacman');

        // For Pacman, we will add yet another
        // class for the direction pacman is facing.
        tile.classList.add(pacman.direction);

      }

      // Now that our individual tile is configured,
      // we add it to the tilesArray.
      tilesArray.push(tile);
    }

    // Once we reach the end of a row, we create a br element,
    // which tells the browser to create a line break on the page.
    let brTile = document.createElement('br');

    // We then add that br element to the tilesArray.
    tilesArray.push(brTile);
  }

  // At the end of our function, we return the array
  // of configured tiles.
  return tilesArray;
}

// This function creates a map element, fills it with tiles,
// and adds it to the page.
function drawMap() {
  map = document.createElement('div');

  let tiles = createTiles(gameData);
  for (let tile of tiles) {
    map.appendChild(tile);
  }

  document.body.appendChild(map);
}

// This function removes the map element from the page.
function eraseMap() {
  document.body.removeChild(map);
}