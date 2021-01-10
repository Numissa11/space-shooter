/*----------  process assess when first load  ----------*/

function loadSound(fileName) {
      GameManager.sounds[fileName] = new Audio(soundPath + fileName + '.wav');
  }
  
  function initSounds() {
      for (let i = 0; i < soundFiles.length; ++i) {
              loadSound(soundFiles[i]);
        }
  }
/*----------  play and pause song  ----------*/
  
  function playSound(sound) {
      GameManager.sounds[sound].play();
  }

  function pauseSound(sound) {
      GameManager.sounds[sound].pause();
  }
  