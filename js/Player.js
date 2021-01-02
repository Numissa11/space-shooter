class Player extends Sprite {
      constructor(divName, position, assetDesc) {
          super(divName, position, assetDesc.fileName, 
              new Size(assetDesc.width, assetDesc.height));
          this.score = 0;
          this.highScore = 0;
          this.state = GameSettings.playerState.ok;
      }
  
      reset() {
          this.state = GameSettings.playerState.ok;
          this.score = 0;
          this.setScore();
          this.setHighScore();
          this.setPosition(GameSettings.playerStart.x, GameSettings.playerStart.y, true );
      }
  
      incrementScore (amount) {
          this.score += amount;
          this.setScore();
          this.setHighScore();
      }
  
      setScore() {
          $('#score').text(this.score);
      }
      setHighScore() {
          if (this.score > this.highScore) {
              this.highScore = this.score;
          }
          $('#highScore').text(this.highScore);
      }
  
  
  }
  