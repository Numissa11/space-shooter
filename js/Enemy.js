/*----------  Enemy class that herit fro Sprite class  ----------*/

class Enemy extends Sprite {
      constructor(divName, assetDesc, position, boundaryRect) {
            super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
            this.life = GameSettings.enemyLife;
            this.dead = false;
            this.boundaryRect = boundaryRect;
            this.boundaryRect.shift(this.anchorShift.x, this.anchorShift.y);
            this.addToBoard(true);
      }
      /*----------  increment enemy position if still alive  ----------*/

      updateEnemy(dt) {
            let inc = dt * GameSettings.enemySpeed;
            let arrayInc = [inc, -inc];
            let direction = arrayInc[Math.floor(Math.random() * arrayInc.length)]
            this.incrementPosition(-inc, (0.8 * direction));
            this.life -= dt;

            if (this.life < 0) {
                  this.killMe();
            }
            /*----------  enemy cannot go out of the play Area  ----------*/

            if (this.boundaryRect.OutsideVertical(this.position.y) == true) {

                  let outsideY = this.position.y

                  if (outsideY < this.boundaryRect.origin.y) {
                        this.incrementPosition(-inc, outsideY + 2);

                  } else if (outsideY > this.boundaryRect.max.y) {
                        this.incrementPosition(-inc, outsideY - 2);
                  }

            }
      }
      /*----------  enemy removed from board if hit by bullet or dead  ----------*/
      killMe() {
            this.dead = true;
            this.removeFromBoard();
      }

}

/*----------  enemies array created with EnemyCollection class  ----------*/

class EnemyCollection {
      constructor(player, bullets) {
            this.listEnemy = [];
            this.lastAdded = 0;
            this.total_enemy = 0;
            this.player = player;
            this.bullets = bullets;
      }
      /*----------  reset all enemies info ----------*/
      reset() {
            for (let i = 0; i < this.listEnemy.length; ++i) {
                  this.listEnemy[i].removeFromBoard();
            }
            this.listEnemy = [];
            this.lastAdded = 0;
            this.total_enemy = 0;
      }
      /*----------  remove all enemies from board  ----------*/
      killAll() {
            for (let i = 0; i < this.listEnemy.length; ++i) {
                  this.listEnemy[i].killMe();
            }
      }
      /*----------  create enemy every 2sec (call enemy class) ----------*/
      updateEnemy(dt) {

            if (this.lastAdded > GameSettings.enemyComingRate) {
                  this.lastAdded = 0;
                  this.listEnemy.push(
                        new Enemy(
                              'enemy_' + this.total_enemy,
                              GameManager.assets['enemyShip'],
                              new Point(GameSettings.playAreaWidth, Math.random() * (GameSettings.playAreaHeight - 50)),
                              new Rect(40, 40, GameSettings.playAreaWidth, GameSettings.playAreaHeight - 40)
                        )
                  );
                  this.total_enemy++;
            }

            /*----------  collision between bullet and enemy  ----------*/

            for (let i = this.listEnemy.length - 1; i >= 0; --i) {
                  /*----------  if enemy is dead remove from array  ----------*/
                  if (this.listEnemy[i].dead == true) {
                        this.listEnemy.splice(i, 1);

                        /*----------  if enemy & bullets alive :check if they share rectangle position ----------*/
                  } else if (this.listEnemy[i].dead == false) {
                        let en = this.listEnemy[i];
                        for (let b = 0; b < this.bullets.listBullets.length; ++b) {
                              let bu = this.bullets.listBullets[b];
                              /*----------  remove from board and explosion  ----------*/
                              if (bu.dead == false &&
                                    bu.position.y > GameSettings.topCorner &&
                                    en.containingBox.IntersectedBy(bu.containingBox) == true) {
                                    en.dead = true;
                                    this.player.incrementScore(GameSettings.score);
                                    bu.killMe();
                                    en.killMe();
                                    explode((en.position.x), (en.position.y))
                                    playSound('explosion')
                              }

                        }
                        en.updateEnemy(dt);
                  }
            }
            this.lastAdded += dt;
      }
}

