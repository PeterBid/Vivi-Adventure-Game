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

First, I started with a wire frame, a pseudo-code, and also wrote down steps I wished to achieve each day in order to achieve as many functionalities as possible for my game.

#### Wire Frame

<img width="1044" alt="Screen Shot 2022-01-08 at 14 16 50" src="https://user-images.githubusercontent.com/91087641/159046938-7857dbbe-c134-4699-8b0b-61f03d0495fa.png">

#### Pseudo Code

<img width="555" alt="Screen Shot 2022-01-08 at 14 16 57" src="https://user-images.githubusercontent.com/91087641/159047336-106cdce1-193f-4e38-a4b4-b3bdf1460264.png">           

### Creating the Games Functionality with JavaScript  

#### Making the Grid with the Vivi Character

After learning about DOM before starting the project, I decided to build the grid with JavaScript. Due to this, I didn't need to hard code the grid inside the HTML file with different divs. 

I created a div in the HTML with a class name of `'grid'`. The `'grid'` class was then called in the app.js with querySelector. I then used an empty array called `cells` which for the divs, created with DOM. I decided my grid would have 100 cells/divs. 

I created a function using a for-loop that repeated 100 times and created a new `cell` child div every time. They were stored inside the array `cells` using `push` and `appendChild`. I then called the function for the grid to be displayed in the browser. I also created a starting position variable for Vivi and an addVivi function to ensure the Vivi character was added to the grid upon its creation. 



<img width="903" alt="Screen Shot 2022-03-21 at 10 49 25" src="https://user-images.githubusercontent.com/91087641/159246716-d5e8b31c-dfef-400d-ab07-4d9a6e9e2f8f.png">

<img width="729" alt="Screen Shot 2022-01-08 at 14 20 08" src="https://user-images.githubusercontent.com/91087641/159050316-b68bf1c7-ca93-4825-b2ed-dae3ca3a3a0c.png">

<img width="800" alt="Screen Shot 2022-01-08 at 14 20 24" src="https://user-images.githubusercontent.com/91087641/159050450-3158c914-3c6f-4185-a854-084f55a78c59.png">

<img width="743" alt="Screen Shot 2022-01-08 at 14 20 13" src="https://user-images.githubusercontent.com/91087641/159050384-bf85f814-6c9e-46c0-830f-8ce1d650ca1a.png">

![Screen Shot 2022-01-08 at 14 18 31](https://user-images.githubusercontent.com/91087641/159050179-02b1c7dc-3a68-411c-83b3-d7ad9b5ea93a.png)

#### Character Movement for Vivi

I wished for the player to move Vivi using the keys on a keyboard, for the browser to recognize that the player is pressing keys, I added an EventListener to app.js. JavaScript also has a unique code for each key on the keyboard. 

In my case, I only needed codes for the arrow keys (←, →, ↑, ↓). These were 37 for left arrow, 39 for right arrow, 38 for up arrow and 40 for down arrow.

Using the `handleKeyDown` function, I added an if-else statement to determine which key was pressed, and I wrote a logic for Viv's movement to change the current position of Vivi after being removed and added back into the grid depending on the direction he was moving. 

There are also additional conditions within the main conditions. This was to ensure that Vivi would remain on the grid if the player attempted to move the character beyond the confines of the grid.

<img width="552" alt="Screen Shot 2022-03-21 at 11 38 45" src="https://user-images.githubusercontent.com/91087641/159253998-285ec0c5-8b17-416c-a9f4-bc6cff145d9c.png">

<img width="694" alt="Screen Shot 2022-01-08 at 14 20 20" src="https://user-images.githubusercontent.com/91087641/159050428-6affab02-7493-49ee-b36a-182fa5c0f287.png">

#### Adding Enemies with Automated Movement

Much in the same way I added the Vivi to the grid upon it's creation, I also added the enemies with a start position variable. I then created movement with an add and remove function for the enemy, I used an `if statement` with conditions to determine the current position the enemy would be added back in at.

The `if statements` also created a "looping" effect ensuring the enemy would go back to the start of the row once they reached the end. I called the function at a `setInterval` that automated the movement and I could manually configure the enemy speed in accordance to the difficulty I wished to make the game.

<img width="760" alt="Screen Shot 2022-01-08 at 15 11 59" src="https://user-images.githubusercontent.com/91087641/159259691-9d67de3d-3af4-43c1-91db-65ad7761fee2.png">

<img width="859" alt="Screen Shot 2022-01-08 at 17 42 25" src="https://user-images.githubusercontent.com/91087641/159259748-9d9c9ef5-2408-47cc-b84a-8d4c6f56ad27.png">

<img width="871" alt="Screen Shot 2022-01-08 at 17 42 36" src="https://user-images.githubusercontent.com/91087641/159259829-609b263a-3857-4a7c-9fdd-4649e4091265.png">

#### The Collision Function

Ensuring collisions between Vivi and the enemies worked correctly was the most challenging aspect of the project. When creating the function I encountered a glitch where Vivi would duplicate upon moving after a collision. 

After much error handling and problem solving, this problem was overcome by ensuring that `viviCurrentPosition` variable was properly reassigned upon `Collision` by calling it in the `addVivi` function before any subsequent movement. 

This was a very beneficial learning experience, which helped me quickly solve future glitches while working on the project.

![Screen Shot 2022-01-09 at 18 28 35](https://user-images.githubusercontent.com/91087641/159284986-a0957c94-31cc-4578-b498-900394200dc7.png)

![Screen Shot 2022-01-09 at 18 29 23](https://user-images.githubusercontent.com/91087641/159285074-f0366003-211b-4159-b689-159a736c3222.png)

<img width="559" alt="Screen Shot 2022-01-10 at 10 53 56" src="https://user-images.githubusercontent.com/91087641/159285429-3b2d5259-8fb0-4260-8342-7a68207f9d8c.png">

<img width="970" alt="Screen Shot 2022-01-10 at 10 54 06" src="https://user-images.githubusercontent.com/91087641/159285559-8974ee0a-09a3-46ce-b2c4-b30891eb8271.png">

#### Vivi Riding the Bird

While there are many aspects of the game I can say I am proud of, I am particularly proud of creating the function for Vivi to ride on the Bird. 

This function combined everything I had previously learnt and utilised when creating grid, creating Vivi's movement, creating Enemies, using automated movement and creating the Collision function. 

```javascript
 //--Moving Bird + Riding--//


  //moving Bird Obstacles 

  //This function combines moving the Bird Left with Vivi riding the bird
  function moveBird() {
    addBird(birdStartPosition) //adding the bird in a start position
    setInterval(function () { //creating a Set Interval

      removeBird(birdCurrentPosition) //remove the bird for movement

      if (viviCurrentPosition !== birdCurrentPosition) {  //if Vivi's position is not the Same as the Bird's remove Riding class
        cells.forEach(cell => cell.classList.remove('riding')) //remove Riding Class at whatever point it is at, remove it from all cells
        birdRidingAudio.pause()//pause the bird riding music
      }

      if (viviCurrentPosition === birdCurrentPosition) { ///if Vivi's position is the same as the Bird
        shuffleAudio.pause()//pause the background music
        birdRidingAudio.play()//play the bird riding music
        //console.log('same position')
        removeBird(birdCurrentPosition) //remove the Bird class picture
        addRidingBird(birdCurrentPosition) //add the Riding class picture
        removeVivi(viviCurrentPosition) //remove Vivi class picture
        //console.log('add remove Vivi')
        removeRidingBird(birdCurrentPosition) //Remove the Riding Class for movement

        if (viviCurrentPosition === 20) { //if Vivi's position = 20
          removeRidingBird(viviCurrentPosition) //remove the riding bird class and vivi's current position to prevent falling off the side
          viviCurrentPosition = birdCurrentPosition + 10 //Set vivi position to the Bird's start to stay on the same row
          removeRidingBird(viviCurrentPosition) //remove Riding class for movement
        }
        viviCurrentPosition-- //make Vivi's position go left
        addRidingBird(viviCurrentPosition) //add Riding class to Vivi's position for movement
      }

      if (birdCurrentPosition === 20) { //if Bird position = 20
        removeBird(birdCurrentPosition) //remove Bird class to prevent falling off the side
        birdCurrentPosition = birdCurrentPosition + 10 //Set Bird position to the Bird start to stay on the same row
        removeBird(birdCurrentPosition) //remove the Bird class for movement
      }
      birdCurrentPosition-- //make the Bird go left for movement
      addBird(birdCurrentPosition)// add the Bird in the Birds current position for movment 

    }, 1000); //Move Bird, Bird Riding and Vivi Classes left at a set interval of 1 seconds
  }

```

#### Global Variables, The Time Bar, Winning and Losing the Game and High Scores.

After creating the core functionality for Vivi, the Bird and the various Enemies to move across the grid and impact each other, I moved on to creating the variables such as `score` and `lives` alongside functions to `win` and `lose` the game and attaching them as conditionals to be activated upon certain functions triggering across the game, such as increasing the score upon Vivi reaching a home at the top of the grid or a collision causing the player to lose a life etc. The game would result in a  

Related to these global variables I created a Time Bar function which changed variables to fill a `CSS grid` with differing style properties incrementing at a `Set Interval`. Once the `timeInGame` variable reached a certain number, Vivi's position would be reset and the player would lose a life.

I also created a Reset game function which reset the value of the global variables and placed Vivi back to the starting position. I then attached this to a button using an `EventListener`.

Afterwards I learned how to use `Local Storage` to implement a high score variable which remained constant even when the game was reset.

<img width="359" alt="Screen Shot 2022-01-12 at 13 44 58" src="https://user-images.githubusercontent.com/91087641/159293564-fc18f251-1a26-41f3-908b-f711259740c1.png">

<img width="896" alt="Screen Shot 2022-01-11 at 18 07 48" src="https://user-images.githubusercontent.com/91087641/159293785-e783dc9f-8b9d-4177-9a3d-8c577995d8b5.png">

<img width="696" alt="Screen Shot 2022-01-11 at 20 40 10" src="https://user-images.githubusercontent.com/91087641/159293890-bea0ff31-30e8-4dc0-b981-6a91004aa2fc.png">

<img width="787" alt="Screen Shot 2022-01-12 at 13 45 08" src="https://user-images.githubusercontent.com/91087641/159294550-481317ee-c004-474c-8e2e-1ba9373ef539.png">

<img width="1184" alt="Screen Shot 2022-01-12 at 13 45 38" src="https://user-images.githubusercontent.com/91087641/159294634-e7c4d056-8ec1-45d9-995b-b7855dfdc7da.png">

![Screen Shot 2022-01-12 at 13 47 44](https://user-images.githubusercontent.com/91087641/159294772-f00982e6-625e-45cb-9be2-063b130887f3.png)

#### Styling and Audio

Throughout the week, in addition to building JavaScript functions, I also worked on building `CSS`. From the beginning, I had an idea what my page was supposed to look like, but changed the gifs I used for enemies. I chose to use gifs instead of images to increase the sense of dynamic movement throughout the game. 

As I wanted to create a homage to the Final Fantasy series, I used a colour scheme and sound effects which evoked a fantasy/anime style setting. I used background music from the Final Fantasy series and chose to use the Chocobo riding theme when Riding the Bird. This different music upon riding the Bird helped to create a feeling of dynamic movement to the player.

Although based on the Final Fantasy series, I also included original aspects. The Logo for the game was custom created by combining various images and gifs using `Canva`. I also wrote an original storyline to help players feel greater immersion.

Overall I am very happy with the project and I think I managed to create a distinct and unique online game.

## Bugs, Challenges and Wins

#### Bugs

When a player loses the game they have to manually Reset the game by clinking the Reset game button. If the player chooses to keep playing on 0 lives they will trigger a game over whenever they lose a life.

#### Challenges

Error handling for the collision function was the biggest challenge. This was because this issue was time consuming relatively early in the project and a key aspect which needed to be fixed for the game to function overall.

While it initially put me behind the schedule I wished to progress at, encountering and fixing this problem early in the project ended up benefiting me overall. This was because the experience of fixing this issue allowed me to fix future problems quickly, allowing me to get back on schedule.
   
#### Wins

Planning. Having an effective and well thought out outline and plan of how to reach my minimum viable project really helped me. It made the whole process go smoothly and feel considerably less stressful. This was because I had clear objectives to aim towards each day, breaking the overall project down into much manageable bite-sized chunks.

Working with the classes and understanding how they behave in certain situations. This understanding allowed me to combine various aspects together culminating in the function to make Vivi ride the Bird.

Getting the global variables to work in conjunction with a wide range of interrelated functions across the whole project was very satisfying, as was the process of seeing each part of the game building upon each other.

CSS styling and Audio files. I managed to give my personal and unique touch to the game making it very distinct from conventional Frogger.


## Key Learnings

As this was my first ever coding project alongside being the first on the course, I am very pleased with the work that I achieved in the 7 days.

Doing this project helped build up my confidence as a developer considerably, it allowed me to overcome feelings of imposter syndrome and really enjoy the act of building from scratch with code.

It also helped me understand the importance of planning towards a minimum viable product effectively and how doing this at the beginning can save a lot of time when doing the project overall.

The project strongly cemented my knowledge of JavaScript. It transformed my understanding from the theoretical to the practical. I was able to reinforce my understanding of EventListeners, for loops and setIntervals. This while also pushing myself to learn about new things I had not previously encountered such as Local Storage.

Overall I was able to apply what I had learnt and also learned much more. It was a real big confidence boost and made me excited to do future projects. It is a project I will look back fondly on.

## Contact

Social - www.linkedin.com/in/peter-bid

Email - peterbid21@gmail.com
