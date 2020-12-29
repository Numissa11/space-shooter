# space-shooter

Description
Create a browser game with JavaScript or TypeScript, without using any third-party game
frameworks (i.e. Unity, Phaser, Construct, RPG Maker, etc.). The only exception is PixiJS which is
recommended, but not mandatory.
Specification
• the game should work on most modern browsers on desktop
• the game should be 800x600 px in size, it is not necessary to handle resizing
• at the start, a Splash screen is shown for 2 seconds, then fades out and the game continues
to the main screen
•
the Main screen contains the following elements:
o background with some animation to make the view more interesting
o 4 buttons placed in the middle, from top to bottom:
GAME1, GAME2, GAME3 and EXIT
•
o clicking the EXIT button navigates somewhere
o clicking any of the GAME buttons takes the user to the game
o a logo above the buttons
the Game screen is a simple side scroller Shoot’em up with spaceships
o the player’s spaceship can move around the game area
o it can shoot rockets
o the background moves from right to left, with a parallax scrolling effect
o every 2 seconds, an enemy spaceship arrives
o the enemy spaceships move in some randomized way
o if the projectile of the player's spaceship hits an enemy, its spaceship blows up and
disappears, emitting particles
o
if the player's spaceship collides with an enemy object, it blows up, and the game
ends, going back to the main menu
