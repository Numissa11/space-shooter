/*---------- bullet class that herit from Sprite class ----------*/

class Bullet extends Sprite {
    constructor(divName, assetDesc, position) {
        super(divName, position, assetDesc.fileName, new Size(assetDesc.width, assetDesc.height));
        this.life = GameSettings.bulletLife;
        this.dead = false;
        this.addToBoard(true);
    }

    /*---------- update position of the bullet or remove it from board if dead ----------*/

    update(dt) {
        let inc = dt * GameSettings.bulletSpeed;
        this.incrementPosition(inc, 0);
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

/*----------  bullet array created with BulletCollection class  ----------*/

class BulletCollection {
    constructor(player) {
        this.listBullets = [];
        this.lastAdded = 0;
        this.player = player;
        this.total_bullets = 0;
    }
    /*----------  reset all bullets info ----------*/

    reset() {
        for (let i = 0; i < this.listBullets.length; ++i) {
            this.listBullets[i].removeFromBoard();
        }
        this.listBullets = [];
        this.lastAdded = 0;
        this.total_bullets = 0;
    }
    /*----------  remove all bullets from board  ----------*/

    killAll() {
        for (let i = 0; i < this.listBullets.length; ++i) {
            this.listBullets[i].killMe();
        }
    }

    /*----------  create bullet every 300milisec (call bullet class) ----------*/
    update(dt) {

        for (let i = this.listBullets.length - 1; i >= 0; --i) {
            if (this.listBullets[i].dead == true) {
                this.listBullets.splice(i, 1);
            } else {
                this.listBullets[i].update(dt);
            }
        }
        this.lastAdded += dt;
        if (this.lastAdded > GameSettings.bulletFireRate) {
            this.lastAdded = 0;
            this.listBullets.push(
                new Bullet(
                    'bullet_' + this.total_bullets,
                    GameManager.assets['laserBlue'],
                    new Point((this.player.position.x) + (this.player.size.width),
                        (this.player.position.y) + (this.player.size.height / 2))
                )
            );
            this.total_bullets++;
        }
    }
}

