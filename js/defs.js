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
      targetFPS: 1000/ 60,

      bulletSpeed: 700 / 1000,
      bulletLife : 4000,
      bulletFireRate : 2000,

      enemySpeed: 600 / 1000,
      enemyLife : 4000,
      enemyComingRate : 2000,

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
      playerMoveStep: 8
  };
  
  let GameManager = {
      assets : {},
      player: undefined,
      bullets: undefined,
      enemies: undefined,
      lastUpdated: Date.now(),
      fps: 0
  };
  
  