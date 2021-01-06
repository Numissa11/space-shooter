class Enemy extends Sprite {
      constructor(divName, assetDesc, position, boundaryRect) {
            super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
            this.life = GameSettings.enemyLife;
            this.dead = false;
            this.boundaryRect = boundaryRect;
            this.boundaryRect.shift(this.anchorShift.x, this.anchorShift.y);
            this.addToBoard(true);
      }



      updateEnemy(dt) {
            let inc = dt * GameSettings.enemySpeed;
            let arrayInc = [inc, -inc];
            let direction = arrayInc[Math.floor(Math.random() * arrayInc.length)]
            this.incrementPosition(-inc, (0.8 * direction));
            this.life -= dt;

            if (this.life < 0) {
                  this.killMe();
            }

            if (this.boundaryRect.OutsideVertical(this.position.y) == true) {

                  let outsideY = this.position.y

                  if (outsideY < this.boundaryRect.origin.y) {
                        this.incrementPosition(-inc, outsideY + 2);

                  } else if (outsideY > this.boundaryRect.max.y) {
                        this.incrementPosition(-inc, outsideY - 2);
                  }

            }
      }


      killMe() {
            this.dead = true;
            this.removeFromBoard();
      }
}

class EnemyCollection {
      constructor(player, bullets) {
            this.listEnemy = [];
            this.lastAdded = 0;
            this.total_enemy = 0;
            this.player = player;
            this.bullets = bullets;
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

            this.lastAdded += dt;

            if (this.lastAdded > GameSettings.enemyComingRate) {
                  this.lastAdded = 0;
                  this.listEnemy.push(
                        new Enemy(
                              'enemy_' + this.total_enemy,
                              GameManager.assets['Enemy/enemyRed1'],
                              new Point(GameSettings.playAreaWidth, Math.random() * (GameSettings.playAreaHeight - 100)),
                              new Rect(40, 40, GameSettings.playAreaWidth - 80, GameSettings.playAreaHeight - 80)
                        )
                  );
                  this.total_enemy++;
            }


            for (let i = this.listEnemy.length - 1; i >= 0; --i) {

                  if (this.listEnemy[i].dead == true) {
                        this.listEnemy.splice(i, 1);

                  } else if (this.listEnemy[i].dead == false) {
                        let en = this.listEnemy[i];

                        for (let b = 0; b < this.bullets.listBullets.length; ++b) {
                              let bu = this.bullets.listBullets[b];

                              if (bu.dead == false &&
                                    bu.position.y > GameSettings.bulletTop &&
                                    en.containingBox.IntersectedBy(bu.containingBox) == true) {

                                    this.player.incrementScore(GameSettings.score);
                                    bu.killMe();
                                    en.killMe();

                              }

                        }
                        en.updateEnemy(dt);
                  }

                 

            }
      }
}

