class Bullet extends Sprite {
      constructor(divName, assetDesc, position) {
          super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
          this.life = GameSettings.bulletLife;
          this.dead = false;
          this.addToBoard(true);
      }
  
      update(dt) {
          let inc = dt * GameSettings.bulletSpeed;
          this.incrementPosition(-inc, 0);
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

  class BulletCollection {
      constructor(player) {
          this.listBullets = [];
          this.lastAdded = 0;
          this.player = player;
          this.total_bullets = 0;
      }
  
      reset() {
          for (let i = 0; i < this.listBullets.length; ++i) {
              this.listBullets[i].removeFromBoard();
          }
          this.listBullets = [];
          this.lastAdded = 0;
          this.total_bullets = 0;
      }
}