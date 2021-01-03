function tick() {
    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    GameManager.lastUpdated = now;
    GameManager.fps = parseInt(1000 / dt);

    GameManager.bullets.update(dt);
    GameManager.enemies.updateEnemy(dt);
    
    setTimeout(tick, GameSettings.targetFPS);
}

function resetPlayer() {
    if (GameManager.player == undefined) {
        let asset = GameManager.assets['playerShip1_blue'];

        GameManager.player = new Player(GameSettings.playerDivName,
            new Point(GameSettings.playerStart.x, GameSettings.playerStart.y),
            asset,
            new Rect(40, 40, GameSettings.playAreaWidth - 80, GameSettings.playAreaHeight - 80)
        );
        GameManager.player.addToBoard(true);
    }
    console.log('resetplayer() GameManager.player:' , GameManager.player);
    GameManager.player.reset();
}

function resetGame() {
    resetPlayer();
    resetBullets();
    resetEnemy();
    setTimeout(tick, GameSettings.targetFPS);
}

function resetBullets() {
    if(GameManager.bullets != undefined) {
        GameManager.bullets.reset();
    } else {
        GameManager.bullets = new BulletCollection(GameManager.player)
    }
}

function resetEnemy() {
    if(GameManager.enemies != undefined) {
        GameManager.enemies.reset();
    } else {
        GameManager.enemies = new EnemyCollection()
    }
}

function processAsset(indexNum) {
    let img = new Image();
    let fileName = 'assets/' + ImageFiles[indexNum] + '.png';
    img.src = fileName;
    img.onload = function () {
        GameManager.assets[ImageFiles[indexNum]] = {
            width: this.width,
            height: this.height,
            fileName: fileName
        };
        indexNum++;
        if (indexNum < ImageFiles.length) {
            processAsset(indexNum);
        } else {
            console.log('Assets Done:', GameManager.assets);
            resetGame();
        }
    }
}

$(function () {
    processAsset(0);
    $(document).keydown(
        function (e) {
            switch (e.which) {
                case GameSettings.keyPress.up:
                    GameManager.player.move(0, -1);
                    break;
                case GameSettings.keyPress.down:
                GameManager.player.move(0, 1);
                    break;
                case GameSettings.keyPress.left:
                GameManager.player.move(-1, 0);
                    break;
                case GameSettings.keyPress.right:
                GameManager.player.move(1, 0);
                    break;
                case GameSettings.keyPress.space:
                    break;
            }
        }
    );
});