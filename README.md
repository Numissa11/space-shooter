# space-shooter

Description
This a space-shooter, browser game with JavaScript.

Specification

• the game works on most modern browsers on desktop
• the gamei is 800x600 px in size
• at the start, a Splash screen is shown for 4 seconds, then fades out and the game continues
to the main screen


•the Main screen contains the following elements:
• background with some animation to make the view more interesting
• There are 4 buttons placed in the middle, from top to bottom:
GAME1, GAME2, GAME3 and EXIT
• clicking the EXIT button navigates somewhere
• clicking any of the GAME buttons takes the user to the game, there is a logo above the buttons

The Game itself:

•the Game screen is a simple side scroller Shoot’em up with spaceships
• the player’s spaceship can move around the game area and it can shoot rockets

• the background moves from right to left, with a parallax scrolling effect
• every 2 seconds, an enemy spaceship arrives
• the enemy spaceships move in some randomized way
• if the projectile of the player's spaceship hits an enemy, its spaceship blows up and
disappears, emitting particles
• if the player's spaceship collides with an enemy object, it blows up, and the game
ends, going back to the main menu
