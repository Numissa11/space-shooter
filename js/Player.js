/*----------  Player class that herit fro Sprite class  ----------*/

class Player extends Sprite {
    constructor(divName, position, assetDesc, boundaryRect) {
        super(divName, position, assetDesc.fileName,
            new Size(assetDesc.width, assetDesc.height));
        this.score = 0;
        this.highScore = 0;
        this.player = GameManager.player;
        this.bullets = GameManager.bullets;
        this.enemies = GameManager.enemies;
        this.boundaryRect = boundaryRect;
        this.boundaryRect.shift(this.anchorShift.x, this.anchorShift.y);
    }
/*----------  reset player score position and highscore id needed  ----------*/

    reset() {
        this.score = 0;
        this.setScore();
        this.setHighScore();
        this.setPosition(GameSettings.playerStart.x, GameSettings.playerStart.y, true);
    }

/*---------- Move player and check it never goes beyond rectangle limit  ----------*/

    move(x, y) {
        let xStep = GameSettings.playerMoveStep * x;
        let yStep = GameSettings.playerMoveStep * y;

        if (this.boundaryRect.OutsideHorizontal(xStep + this.position.x) == true) {
            xStep = 0;
        }
        if (this.boundaryRect.OutsideVertical(yStep + this.position.y) == true) {
            yStep = 0;
        }

        this.incrementPosition(xStep, yStep);

    }
/*----------  update player position ----------*/


    updatePlayer () {
        let maListeEnemy = GameManager.enemies.listEnemy;

        for (let i = maListeEnemy.length - 1; i >= 0; --i) {
            let enemySolo = maListeEnemy[i];
            let playerSolo = GameManager.player;
/*---------- when player meet enemy he dies and everything is removed from board except him ----------*/
            if (enemySolo.dead == false &&
                enemySolo.position.y > GameSettings.topCorner &&
                playerSolo.containingBox.IntersectedBy(enemySolo.containingBox) == true
            ) {
                $('#' + this.divName).css({'opacity' : '0.4'})
                GameManager.enemies.killAll();
                GameManager.bullets.killAll();
                playerSolo.dead = true,
                enemySolo.killMe();
            }

        }
    }
/*---------- score manager: increment, set or set highscore ----------*/

    incrementScore(amount) {
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
