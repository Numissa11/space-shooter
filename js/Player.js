class Player extends Sprite {
      constructor(divName, position, assetDesc) {
            super(divName, position, assetDesc.filename,
                  new Size(assetDesc.width, assetDesc.height));

            this.score = 0;
            this.highScore = 0;
            this.state = GameSettings.playerState.ok;
      }

      reset() {
            this.state = GameSettings.playerState.ok;
            this.score = 0;
      }

      incrementScore (amount) {
            this.score += amount;
      }
      setScore() {
            $('#score').text(this.score);
      }

}