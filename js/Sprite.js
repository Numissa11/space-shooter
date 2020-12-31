class Sprite {
      constructor(divName, position, imgName, sizePx) {
            this.divName = divName;
            this.position = position;
            this.imgName = imgName;
            this.size = sizePx;
            this.anchorShift = new Point(-this.size.width / 2, -this.size.height / 2);
      }

      addToBoard(shift) {
            var div = document.createElement('div');
            div.classList.add('sprite');
            div.id = this.divName;
            div.style.backgroundImage = `"url('${this.imgName}')"`;
            div.style.width = `${this.size.width} px`; 
            div.style.height = `${this.size.height} px`; 
            $(GameSettings.playAreaDiv).append(div);

            this.setPosition(this.setPosition(this.position.x, this.position.y, shift))
      }

      removeFromBoard() {
            $('#' + this.divName).remove();
      }

      draw() {
            $('#' + this.divName).css({
                  'left': this.position.x,
                  'top': this.position.y
            });
      }

      setPosition(x, y, shift) {
            this.position.update(x, y);
            if (shift == true) {
                  this.incrementPosition(this.anchorShift.x, this.anchorShift.y);
            }
            this.draw();
      }

      updatePosition(x, y) {
            this.position.update(x, y);
            this.draw();
      }

      incrementPosition(ix, iy) {
            this.position.increment(ix, iy);
            this.draw();
      }
}