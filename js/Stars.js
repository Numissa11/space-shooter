/*----------  creat starts randomly  ----------*/

function creatStars() {
  /*---------- choose random number ----------*/
  function random(max) {
    return Math.floor(Math.random() * max);
  }
  /*---------- creat the div class='star' and class='type(small...)' in random position and append it to body ----------*/
  function addStar(type) {
    var div = document.createElement("div");
    div.classList.add("star", type);         //('class1','class2')
    div.style.top = random(560, 40) + "px";
    document.body.appendChild(div);
  }
  /*----------  give to addStar(type) : small, medium, big stars with loop with a delay ----------*/
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