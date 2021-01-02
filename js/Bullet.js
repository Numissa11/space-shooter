class Bullet extends Sprite {
      constructor(divName, assetDesc, position) {
          super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
          this.life = GameSettings.bulletLife;
          this.dead = false;
          this.addToBoard(true);
      }
  
      update(dt) {
          let inc = dt * GameSettings.bulletSpeed;
          this.incrementPosition(0, -inc);
          this.life -= dt;
          if (this.life < 0) {
              this.killMe();
          }
      }
  
      killMe() {
          this.dead = true;
          this.removeFromBoard();
      }
  }