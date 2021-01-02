const ImageFiles = [
      'playerShip1_blue'
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
      lastUpdated: Date.now(),
      fps: 0
  };
  
  