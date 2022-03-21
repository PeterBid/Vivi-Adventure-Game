# Vivi-Adventure-Game

### General Assembly Project 1

<img width="1423" alt="Screen Shot 2022-01-16 at 17 42 05" src="https://user-images.githubusercontent.com/91087641/149671413-a81ef818-e488-4bb4-99a6-76c1effff1c7.png">

## Brief 

Design and create a grid-based game using HTML, CSS and JavaScript, utilising the knowledge gained from the first three weeks of the SEI course. The game should be playable for one player, and the player must be able to win and lose the game. 

Solo project. 

Timeframe: 1 week.

## Deployment

Please follow this link to play my game: https://peterbid.github.io/Vivi-Adventure-Game/

Repository link: https://github.com/PeterBid/Vivi-Adventure-Game

## Concept

I chose to create a theme based around the Final Fantasy series and the character "Vivi" from Final Fantasy 9 specifically. I made this decision as I believed that I could embrace my creativity, constructing a new scenario that both reflected similarities to the 'frogger' storyline while also embracing Final Fantasy. 

This is shown with the focus on adventures, overcoming various obstacles and an attempt to make it back home within a time limit.

With Vivi and his Allies under threat from numerous enemies, the aim of the game is to make them pass different bandits and monsters safely within a time limit and without losing all three lives. Along the way, they can ride a bird to aid their journey home.

## Controls

Press Restart button to restart the game
Press Reset HighScore button to reset the highscore

↑ to move up
↓ to move down
← to move left 
→ to move right

## Technologies Used

#### Languages
* JavaScript
* CSS3
* HTML5

#### Development Tools
* Visual Studio Code
* Google Chrome Development Tools
* Google Fonts
* Browser
* Git and GitHub
* GitHub pages (for deployment)
* Canva (for gifs and images)

## Process

### Planning

First, I started with a wire frame, a pseudo-code, and also wrote down steps I wished to achive each day in order to achieve as many functionalities as possible for my game.

#### Wire Frame

<img width="1044" alt="Screen Shot 2022-01-08 at 14 16 50" src="https://user-images.githubusercontent.com/91087641/159046938-7857dbbe-c134-4699-8b0b-61f03d0495fa.png">

#### Sudo Code

<img width="555" alt="Screen Shot 2022-01-08 at 14 16 57" src="https://user-images.githubusercontent.com/91087641/159047336-106cdce1-193f-4e38-a4b4-b3bdf1460264.png">           

### Creating the Games Functionality with JavaScript  

#### Making the Grid with the Vivi Character

After learning about DOM before starting the project, I decided to build the grid with JavaScript. Due to this, I didn't need to hard code the grid inside the HTML file with different divs. 

I created a div in the HTML with a class name of `'grid'`. The `'grid'` class was then called in the app.js with querySelector. I then used an empty array called `cells` which for the divs, created with DOM. I decided my grid would have 100 cells/divs. 

I created a function using a for-loop that repeated 100 times and created a new `cell` child div every time. They were stored inside the array `cells` using `push` and `appendChild`. I then called the function for the grid to be displayed in the browser. I also creating a starting positon varible for Vivi and and an addVivi function to ensure the Vivi character was added to the grid upon its creation. 



<img width="903" alt="Screen Shot 2022-03-21 at 10 49 25" src="https://user-images.githubusercontent.com/91087641/159246716-d5e8b31c-dfef-400d-ab07-4d9a6e9e2f8f.png">

<img width="729" alt="Screen Shot 2022-01-08 at 14 20 08" src="https://user-images.githubusercontent.com/91087641/159050316-b68bf1c7-ca93-4825-b2ed-dae3ca3a3a0c.png">

<img width="800" alt="Screen Shot 2022-01-08 at 14 20 24" src="https://user-images.githubusercontent.com/91087641/159050450-3158c914-3c6f-4185-a854-084f55a78c59.png">

<img width="743" alt="Screen Shot 2022-01-08 at 14 20 13" src="https://user-images.githubusercontent.com/91087641/159050384-bf85f814-6c9e-46c0-830f-8ce1d650ca1a.png">

![Screen Shot 2022-01-08 at 14 18 31](https://user-images.githubusercontent.com/91087641/159050179-02b1c7dc-3a68-411c-83b3-d7ad9b5ea93a.png)

#### Character Movement for Vivi

I wished for the player to move Vivi using the keys on a keyboard, for the browser to recognize that the player is pressing keys, I added an EventListener to app.js. JavaScript also has a unique code for each key on the keyboard. 

In my case, I only needed codes for the arrow keys (←, →, ↑, ↓). These were 37 for left arrow, 39 for right arrow, 38 for up arrow and 40 for down arrow.

Using the `handleKeyDown` function, I added an if-else statement to determine which key was pressed, and I wrote a logic for Viv's movement change the current position of Vivi after the being removed and added back into the grid depending on the direction he was moving. 

There are also additional conditions within the main conditions. This was to ensure that Vivi would remain on the grid if the player attempted to move the character beyond the confines of the grid.

<img width="552" alt="Screen Shot 2022-03-21 at 11 38 45" src="https://user-images.githubusercontent.com/91087641/159253998-285ec0c5-8b17-416c-a9f4-bc6cff145d9c.png">

<img width="694" alt="Screen Shot 2022-01-08 at 14 20 20" src="https://user-images.githubusercontent.com/91087641/159050428-6affab02-7493-49ee-b36a-182fa5c0f287.png">

#### Adding Enemies with Automated Movement

Much in the same way I added the Vivi to the grid upon it's creation, I also added the enemies with a start position variable. I then created movement with an add and remove function for the enemy, I used an `if statement` with conditions to determine the current position the enemy would be added back in at.

The `if statements` also created a "looping" effect ensuring the enemey would go back to the start of the row once thet reached the end. I called the function at a `setInterval` this automated the movement and I could manually configure the enemy speed in accordance to the difficulty I wished to make the game.

<img width="760" alt="Screen Shot 2022-01-08 at 15 11 59" src="https://user-images.githubusercontent.com/91087641/159259691-9d67de3d-3af4-43c1-91db-65ad7761fee2.png">

<img width="859" alt="Screen Shot 2022-01-08 at 17 42 25" src="https://user-images.githubusercontent.com/91087641/159259748-9d9c9ef5-2408-47cc-b84a-8d4c6f56ad27.png">

<img width="871" alt="Screen Shot 2022-01-08 at 17 42 36" src="https://user-images.githubusercontent.com/91087641/159259829-609b263a-3857-4a7c-9fdd-4649e4091265.png">

#### The Collision Function

Ensuring collisions between Vivi and the enemies worked correctly was the most challenging aspect of the project. When creating the fucntion I encountered a glitch where Vivi would duplicate upon moving after a collision. 

After much error handling and problem solving, this problem was overcome by ensuring that `viviCurrentPosition` variable was properly ressaigned upon `Collision` by calling it in the `addVivi` function before any subsequent movement. 

This was a very beneficial learning experience, which helped me quickly solve future glitches while working on the project.

![Screen Shot 2022-01-09 at 18 28 35](https://user-images.githubusercontent.com/91087641/159284986-a0957c94-31cc-4578-b498-900394200dc7.png)

![Screen Shot 2022-01-09 at 18 29 23](https://user-images.githubusercontent.com/91087641/159285074-f0366003-211b-4159-b689-159a736c3222.png)

<img width="559" alt="Screen Shot 2022-01-10 at 10 53 56" src="https://user-images.githubusercontent.com/91087641/159285429-3b2d5259-8fb0-4260-8342-7a68207f9d8c.png">

<img width="970" alt="Screen Shot 2022-01-10 at 10 54 06" src="https://user-images.githubusercontent.com/91087641/159285559-8974ee0a-09a3-46ce-b2c4-b30891eb8271.png">
