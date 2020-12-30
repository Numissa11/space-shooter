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
      playAreaWidth: 800,
      playAreaHeight: 600,
      playAreaDiv: '#playArea',
  
      playerDivName: 'playerSprite',
      playerStart: {
          x: 440,
          y: 360
      }
  };
  
  let GameManager = {
      assets : {},
      player: undefined
  };
  
  