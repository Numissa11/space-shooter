function creatStars() {
      function random(max) {
        return Math.floor(Math.random() * max);
      }
      
      function addStar(type) {
        var div = document.createElement("div");
        div.classList.add("star", type);
        div.style.top = random(590, 50) + "px";
        document.body.appendChild(div);
      }
      
      for(var i = 0; i < 10; ++i) {
        var delay = i * 222;
        window.setTimeout(addStar, delay, "small");
        window.setTimeout(addStar, delay + 222, "medium");
        window.setTimeout(addStar, delay + 444, "big");
      }
    }

    function pauseStars() {
      $('.star').css({
          "animation-play-state": "paused"
      });
  }

  function removeStars() {
      $('.star').remove();
  }