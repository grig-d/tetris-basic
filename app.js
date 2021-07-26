document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const width = 10;

  // Tetrominoes
  const lTetrominoe = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const theTetrominoes = [
    lTetrominoe,
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
  ];

  let currentPosition = 4;
  let currentRotation = 0;

  // randomly select a Tetromino and its first rotation
  let random = Math.floor(Math.random() * theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation];

  // draw the Tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
    });
  }

  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino');
    });
  }

  // make Tetromino move down every second
  timerId = setInterval(moveDown, 200);

  // move down
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  // freeze
  function freeze() {
    if (
      current.some(index =>
        squares[currentPosition + index + width].classList.contains('taken'),
      )
    ) {
      current.forEach(index =>
        squares[currentPosition + index].classList.add('taken'),
      );
      // start a new Tetromino falling HERE WE CAN create an optimisation
      random = Math.floor(Math.random() * theTetrominoes.length);
      current = theTetrominoes[random][currentRotation]; //new random Tetromino
      currentPosition = 4; // reset current position
      draw();
    }
    }
    
    // rules to move left
    

  //
});

// INDEX explained:
// width = 10
// [1, width+1, width*2+1, 2]

// after factoring in width:
// =[01, 11, 21, 02]

// taking those numbers as x and y values:
// =[(0, 1), (1, 1), (2, 1), (0, 2)
// ]

// the x and y values indicate which box to colour.

// hope this helps.
// [0,0]  [0,1]  [0,2]
// [1,0]  [1,1]  [1,2]
// [2,0]  [2,1]  [2,2]
