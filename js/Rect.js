class Rect {
      constructor(x, y, width, height) {
            this.origin = new Point(x, y);
            this.size = new Size(width, height);
            this.max = Point(this.origin.x + this.size.width, this.origin.y + this.size.height)
      }

      update(x, y) {
            this.origin.x = x;
            this.origin.y = y;
            this.max.x = this.origin.x + this.size.width;
            this.max.y = this.origin.y + this.size.height;
      }

      shift(x, y) {
            this.update(this.origin.x + x, this.origin.y + y); 
      }

      
}