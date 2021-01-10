   //1. geting canvas by id c
   var c = document.getElementById("c");
   var ctx = c.getContext("2d");

   //making the canvas full screen
   c.height = window.innerHeight;
   c.width = window.innerWidth;

   //chinese characters - taken from the unicode charset, giving a variable, and then splitting it's characters to make up an array.
   var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
   //converting the string into an array of single characters
   matrix = matrix.split("");

   var font_size = 10;
   var columns = c.width/font_size; //number of columns for the rain
   //an array of drops - one per column
   var drops = [];
   //x below is the x coordinate
   //1 = y co-ordinate of the drop(same for every drop initially)
   for(var x = 0; x < columns; x++)
       drops[x] = 1; 

// stop draw function so Matrix background stops
    function killMatrix() {
      $('#c').remove();
     }

        //drawing the characters
   function drawMatrix()
   {
       //Black BG for the canvas
       //translucent BG to show trail, trasparent gradient
       ctx.fillStyle = "rgba(0, 0, 0, 0.04";          //black with almost visible opacity, and with every loop to opiacity will desccreas to the original 0.04 percent, that is way it has the fading effect!
       ctx.fillRect(0, 0, c.width, c.height);          //fill the entire window

       ctx.fillStyle = "#0F0"; //green text
       ctx.font = font_size + "px arial";
       //looping over drops
       for(var i = 0; i < drops.length; i++)
       {
           //a random chinese character to print
           var text = matrix[Math.floor(Math.random()*matrix.length)];
           //x = i*font_size, y = value of drops[i]*font_size
           // since w are displaying 1 letter, it seems that it is going down.
           ctx.fillText(text, i*font_size, drops[i]*font_size);

           //sending the drop back to the top randomly after it has crossed the screen
           //adding a randomness to the reset to make the drops scattered on the Y axis
           if(drops[i]*font_size > c.height && Math.random() > 0.975)
               drops[i] = 0;

           //incrementing Y coordinate
           drops[i]++;
       }
   }

  setInterval(drawMatrix, 85);
     
   

