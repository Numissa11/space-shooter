/*----------  Game Parameters  ----------*/

/*----------  assets  ----------*/
const ImageFiles = [
      'playerShip',
      'laserBlue',
      'enemyShip',

];

const soundFiles = [
      'countdown',
      'explosion',
      'gameover',
      'playingSong',
];

const soundPath = 'assets/sounds/';

const GameSettings = {
      keyPress: {
            left: 37,
            right: 39,
            up: 38,
            down: 40,
            space: 32
      },
      targetFPS: 1000 / 60,
      playerMoveStep: 8,
      score: 100,
      /*----------  bullets  ----------*/
      bulletSpeed: 800 / 1000,
      bulletLife: 2000,
      bulletFireRate: 300,
      topCorner: 10,
      /*----------  enemy  ----------*/
      enemySpeed: 300 / 1000,
      enemyLife: 5000,
      enemyComingRate: 2000,
      /*----------  play Area  ----------*/
      playAreaWidth: 800,
      playAreaHeight: 600,
      playAreaDiv: '#playArea',
      /*----------  player  ----------*/
      playerDivName: 'playerSprite',
      playerStart: {
            x: 45,
            y: 300
      },
      /*----------  Time  ----------*/
      countdownGap: 1000,
      countDownValues: ['2', '1', 'GO!'],
      gamoverTime: 2000,
      startTime: 2800,
      gameOver: false
};
/*---------- Game objects  ----------*/
let GameManager = {
      assets: {},
      player: undefined,
      bullets: undefined,
      enemies: undefined,
      sounds: {},
      elapsedTime: 0,
      lastUpdated: Date.now(),
      fps: 0
};

