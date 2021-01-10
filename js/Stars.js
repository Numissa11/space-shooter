/*----------  creat starts randomly  ----------*/

function creatStars() {
  function random(max) {
    return Math.floor(Math.random() * max);
  }

  function addStar(type) {
    var div = document.createElement("div");
    div.classList.add("star", type);
    div.style.top = random(560, 40) + "px";
    document.body.appendChild(div);
  }
  /*----------  creat small, medium, big stars with loop with a delay  ----------*/
  for (var i = 0; i < 10; ++i) {
    var delay = i * 222;
    window.setTimeout(addStar, delay, "small");
    window.setTimeout(addStar, delay + 222, "medium");
    window.setTimeout(addStar, delay + 444, "big");
  }
}
/*----------  pause animation before start  ----------*/
function pauseStars() {
  $('.star').css({
    "animation-play-state": "paused"
  });
}
/*----------  remove animation  ----------*/
function removeStars() {
  $('.star').remove();
}