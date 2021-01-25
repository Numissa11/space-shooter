/*----------  fonction that update every FPS  ----------*/

function tick() {

    /*------ console.log() -------------*/
    console.log('player', GameManager.player);
    console.log('enemies', GameManager.enemies);
    console.log('bullet', GameManager.bullets)
    console.log('rect', new Rect(40, 40, GameSettings.playAreaWidth, GameSettings.playAreaHeight - 40));
    console.log('assets', GameManager.assets);

    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    console.log('dt', dt);
    GameManager.lastUpdated = now;
    GameManager.bullets.update(dt);
    GameManager.enemies.updateEnemy(dt);
   // GameManager.player.updatePlayer();
    playSound('playingSong')
    let timer = requestAnimationFrame(tick);
    /*----------  stop tick from updating and manage the end  ----------*/
    if (GameManager.player.dead == true) {
        cancelAnimationFrame(timer);
        removeStars();
        endGameManager();
    }
}
/*----------  menu that appears with Jquery divs + Matrix background ----------*/

function showStart() {

    $("#messageContainer").append('<div id="messageContainer">' +
        '<img class="mini-monster" src="./assets/logo.png" alt="space invader"></img>' +
        '<button class="game" onclick="runCountDown()">' + 'GAME 1' + '</button>' +
        '<img class="mini-monster" src="./assets/logo.png" alt="space invader"></img>' +
        '<button class="game" onclick="runCountDown()">' + 'GAME 2' + '</button>' +
        '<img class="mini-monster" src="./assets/logo.png" alt="space invader"></img>' +
        '<button class="game" onclick="runCountDown()">' + 'GAME 3' + '</button>' +
        '<div onclick="colorSelector()" class="menu">' + 'EXIT' + '</div>' +
        '</div>')

    $('#' + GameSettings.playerDivName).css({ 'opacity': '1.0' })
}

/*---------- Manage the game functions   ----------*/

function endGameManager() {
    GameManager.player.dead = false;
    GameSettings.gameOver = true;
    GameManager.player.reset();
    pauseSound('playingSong');
    playSound('gameover');
    showGameOver();
}

/*----------  show game over function  ----------*/

function showGameOver() {
    GameSettings.matrixOn = true;
    appendMessage('GAME OVER !');
    setTimeout(clearMessages, GameSettings.gamoverTime);
    setTimeout(showStart, GameSettings.startTime);
}

/*----------  game starting after the countdown  ----------*/

function endCountDown() {
    creatStars();
    clearMessages();
    GameManager.lastUpdated = Date.now();
    setTimeout(tick, GameSettings.targetFPS);
}

/*----------  countdown starting   ----------*/

function runCountDown() {
    GameSettings.matrixOn = false;
    GameSettings.gameOver = false;
    white();
    playSound('countdown');
    clearMessages();
    writeMessage(3);
    for (let i = 0; i < GameSettings.countDownValues.length; ++i) {
        setTimeout(writeMessage, GameSettings.countdownGap * (i + 1),
            GameSettings.countDownValues[i]);
    }
    setTimeout(endCountDown,
        (GameSettings.countDownValues.length + 1) * GameSettings.countdownGap);
}

/*----------  message/div manager with jquery ----------*/

function writeMessage(text) {
    clearMessages();
    appendMessage(text);
}

function appendMessage(text) {
    $('#messageContainer').append('<div class="message">' + text + '</div>');
}

function clearMessages() {
    $('#messageContainer').empty();
    $('.mini-monster').empty();
}

/*---------- reset the Player, Bullets, Enemy, Game   ----------*/

function resetPlayer() {
    if (GameManager.player == undefined) {
        let asset = GameManager.assets['playerShip'];

        GameManager.player = new Player(GameSettings.playerDivName,
            new Point(GameSettings.playerStart.x, GameSettings.playerStart.y),
            asset,
            new Rect(40, 40, GameSettings.playAreaWidth - 80, GameSettings.playAreaHeight - 80)
        );
        GameManager.player.addToBoard(true);
    }
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
        GameManager.enemies = new EnemyCollection(GameManager.player, GameManager.bullets)
    }
}

function resetGame() {
    if (GameSettings.gameOver == false) {
        showStart();
        pauseStars();
        setInterval(drawMatrix, 35);
    }
    resetPlayer();
    resetBullets();
    resetEnemy();
    GameManager.lastUpdated = Date.now();
    GameManager.elapsedTime = 0;

}
/*----------  process the images  ----------*/

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
            resetGame();
        }
    }
}

/*----------  key press manager and init assets  ----------*/

$(function () {
    initSounds();
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