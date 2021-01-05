function tick() {
    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    GameManager.lastUpdated = now;
    GameManager.bullets.update(dt);
    GameManager.enemies.updateEnemy(dt);

    setTimeout(tick, GameSettings.targetFPS);
}

function showStart() {
    GameManager.phase = GameSettings.readyToplay;
    $("#messageContainer").append('<div id="messageContainer">' +
        '<button class="game" onclick="runCountDown()">' + 'GAME1' + '</button>' +
        '<button class="game" onclick="runCountDown()">' + 'GAME2' + '</button>' +
        '<button class="game" onclick="runCountDown()">' + 'GAME3' + '</button>' +
        '<div class="menu">' + 'EXIT' + '</div>' +
        '</div>')
}

function showGameOver() {
    GameManager.phase = GameSettings.gameOver;
    appendMessage('GAME OVER')
    setTimeout(clearMessages, GameSettings.gamoverTime)
    setTimeout(showStart, GameSettings.startTime)
}

function endCountDown() {
    clearMessages();
    GameManager.phase = GameSettings.gamePhase.playing;
    GameManager.lastUpdated = Date.now();
    setTimeout(tick, GameSettings.targetFPS);
}

function runCountDown() {
    clearMessages();
    GameManager.phase = GameSettings.gamePhase.countdownToStart;
    writeMessage(3);
    for (let i = 0; i < GameSettings.countDownValues.length; ++i) {
        setTimeout(writeMessage, GameSettings.countdownGap * (i + 1),
            GameSettings.countDownValues[i]);
    }
    setTimeout(endCountDown,
        (GameSettings.countDownValues.length + 1) * GameSettings.countdownGap);
}

function writeMessage(text) {
    clearMessages();
    appendMessage(text);
}

function appendMessage(text) {
    $('#messageContainer').append('<div class="message">' + text + '</div>');
}

function clearMessages() {
    $('#messageContainer').empty();

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
    console.log('resetplayer() GameManager.player:', GameManager.player);
    GameManager.player.reset();
}



function resetBullets() {
    if (GameManager.bullets != undefined) {
        GameManager.bullets.reset();
    } else {
        GameManager.bullets = new BulletCollection(GameManager.player)
    }
}

function resetEnemy() {
    if (GameManager.enemies != undefined) {
        GameManager.enemies.reset();
    } else {
        GameManager.enemies = new EnemyCollection()
    }
}

function resetGame() {
    console.log('Game reset');
    resetPlayer();
    resetBullets();
    resetEnemy();
   showStart();
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