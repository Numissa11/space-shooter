const ImageFiles = [
      'playerShip1_blue',
      'Lasers/laserBlue02_s',
      'Enemy/enemyRed1'
];

const GameSettings = {
      keyPress: {
            left: 37,
            right: 39,
            up: 38,
            down: 40,
            space: 32
      },
      targetFPS: 1000 / 140,
      playerMoveStep: 8,
      score: 100,

      bulletSpeed: 700 / 1000,
      bulletLife: 4000,
      bulletFireRate: 8000,
      topCorner: 10,

      enemySpeed: 300 / 1000,
      enemyLife: 4000,
      enemyComingRate: 2000,

      playAreaWidth: 800,
      playAreaHeight: 600,
      playAreaDiv: '#playArea',

      playerDivName: 'playerSprite',
      playerStart: {
            x: 45,
            y: 300
      },
          
      countdownGap: 700,
      countDownValues: ['2', '1', 'GO!'],
      gamoverTime: 2000,
      startTime: 2800,
      gameOver: false
};

let GameManager = {
      assets: {},
      player: undefined,
      bullets: undefined,
      enemies: undefined,
      timouts: [],
      elapsedTime: 0,
      lastUpdated: Date.now(),
      fps: 0
};

