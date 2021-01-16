/*----------- Matrix animation  ----------*/
   let c = document.getElementById("c");
   let ctx = c.getContext("2d");

   /*---- making the canvas full screen----*/
   c.height = window.innerHeight;
   c.width = window.innerWidth;

   /*----chinese characters - taken from the unicode charset, giving a letiable, and then splitting it's characters to make up an array.----*/
   let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
   /*----converting the string into an array of single characters ----*/
   matrix = matrix.split("");

   let font_size = 10;
   let columns = c.width/font_size; /*----number of columns for the rain an array of drops - one per column ----*/
   let drops = [];
   /*----x below is the x coordinate 1 = y co-ordinate of the drop(same for every drop initially)----*/
   for(let x = 0; x < columns; x++)
       drops[x] = 1; 

        /*----drawing the characters----*/
   function drawMatrix()
   {
       /*----translucent BG to show trail, trasparent gradient----*/
       ctx.fillStyle = "rgba(0, 0, 0, 0.04";         
       ctx.fillRect(0, 0, c.width, c.height);          

       ctx.fillStyle = "#000"; 

       ctx.font = font_size + "px arial";
       /*----looping over drops ----*/
       for(let i = 0; i < drops.length; i++)
       {
           /*----a random chinese character to print----*/
           let text = matrix[Math.floor(Math.random()*matrix.length)];
           /*----x = i*font_size, y = value of drops[i]*font_size
           since w are displaying 1 letter, it seems that it is going down.----*/
           ctx.fillText(text, i*font_size, drops[i]*font_size);

           /*----sending the drop back to the top randomly after it has crossed the screen
           adding a randomness to the reset to make the drops scattered on the Y axis----*/
           if(drops[i]*font_size > c.height && Math.random() > 0.975)
               drops[i] = 0;

           /*----incrementing Y coordinate ----*/
           drops[i]++;
       }
   }

   /*----------------- Second Matrix  ------------------- */

