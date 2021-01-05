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

      bulletSpeed: 700 / 1000,
      bulletLife: 4000,
      bulletFireRate: 2000,

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
      playerState: {
            ok: 0,
            dead: 1
      },
      gamePhase: {
            readyToplay: 1,
            countdownToStart: 2,
            playing: 3,
            gameOver: 4
      },
      countdownGap: 700,
      countDownValues: ['2', '1', 'GO!'],
      gamoverTime: 2000,
      startTime: 2500

};

let GameManager = {
      assets: {},
      player: undefined,
      bullets: undefined,
      enemies: undefined,
      elapsedTime: 0,
      phase: GameSettings.gamePhase.gameOver,
      lastUpdated: Date.now(),
      fps: 0
};

