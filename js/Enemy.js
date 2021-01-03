class Enemy extends Sprite {
      constructor(divName, assetDesc, position) {
          super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
          this.life = GameSettings.enemyLife;
          this.dead = false;
          this.addToBoard(true);
      }
  
      updateEnemy(dt) {
          let inc = dt * GameSettings.enemySpeed;
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

  class EnemyCollection {
      constructor() {
          this.listEnemy = [];
          this.lastAdded = 0;
          this.total_enemy = 0;
      }
  
      reset() {
          for (let i = 0; i < this.listEnemy.length; ++i) {
              this.listEnemy[i].removeFromBoard();
          }
          this.listEnemy = [];
          this.lastAdded = 0;
          this.total_enemy = 0;
      }

      updateEnemy(dt) {
            for (let i = this.listEnemy.length - 1; i >= 0; --i) {
                if (this.listEnemy[i].dead == true) {
                    this.listEnemy.splice(i, 1);
                } else {
                    this.listEnemy[i].updateEnemy(dt);
                }
            }
            this.lastAdded += dt;
    
            if (this.lastAdded > GameSettings.enemyComingRate) {
                    this.lastAdded = 0;
                    this.listEnemy.push(
                        new Enemy(
                            'enemy_' + this.total_enemy,
                            GameManager.assets['Enemy/enemyRed1'],
                            new Point(GameSettings.playAreaWidth, 45)
                        )
                    );
                    this.total_enemy++;
                }
        }
    }
    
