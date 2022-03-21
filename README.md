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
<- to move left 
-> to move right

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

#### Making the Grid and Creating Vivi

After learning about DOM before starting the project, I decided to build the grid with JavaScript. Due to this, I didn't need to hard code the grid inside the HTML file with different divs. 

I created a div in the HTML with a class name of `'grid'`. The `'grid'` class was then called in the app.js with querySelector. I then used an empty array called `cells` which for the divs, created with DOM. I decided my grid would have 100 cells/divs. 

I created a function using a for-loop that repeated 100 times and created a new `cell` child div every time. They were stored inside the array `cells` using `push` and `appendChild`. I then called the function for the grid to be displayed in the browser. I also creating a starting positon varible for Vivi and and an addVivi function to ensure the Vivi character was added to the grid upon its creation. 



<img width="903" alt="Screen Shot 2022-03-21 at 10 49 25" src="https://user-images.githubusercontent.com/91087641/159246716-d5e8b31c-dfef-400d-ab07-4d9a6e9e2f8f.png">

<img width="729" alt="Screen Shot 2022-01-08 at 14 20 08" src="https://user-images.githubusercontent.com/91087641/159050316-b68bf1c7-ca93-4825-b2ed-dae3ca3a3a0c.png">

<img width="800" alt="Screen Shot 2022-01-08 at 14 20 24" src="https://user-images.githubusercontent.com/91087641/159050450-3158c914-3c6f-4185-a854-084f55a78c59.png">

<img width="743" alt="Screen Shot 2022-01-08 at 14 20 13" src="https://user-images.githubusercontent.com/91087641/159050384-bf85f814-6c9e-46c0-830f-8ce1d650ca1a.png">

![Screen Shot 2022-01-08 at 14 18 31](https://user-images.githubusercontent.com/91087641/159050179-02b1c7dc-3a68-411c-83b3-d7ad9b5ea93a.png)

<img width="694" alt="Screen Shot 2022-01-08 at 14 20 20" src="https://user-images.githubusercontent.com/91087641/159050428-6affab02-7493-49ee-b36a-182fa5c0f287.png">


<img width="738" alt="Screen Shot 2022-01-08 at 14 19 03" src="https://user-images.githubusercontent.com/91087641/159050246-dda96f8b-9b9f-4e80-a5f3-9926538945ea.png">


<img width="588" alt="Screen Shot 2022-01-08 at 14 20 33" src="https://user-images.githubusercontent.com/91087641/159050506-5c94f7ee-58e8-4c66-a559-590680f51982.png">







### Day 2 

#### Objectives

<img width="442" alt="Screen Shot 2022-01-08 at 15 22 41" src="https://user-images.githubusercontent.com/91087641/159055434-936d0a8b-d9c1-4967-800a-585f6aab665d.png">

<img width="859" alt="Screen Shot 2022-01-08 at 17 42 25" src="https://user-images.githubusercontent.com/91087641/159055524-7c6039ef-653c-4652-afaa-ffe9ec36d541.png">

<img width="871" alt="Screen Shot 2022-01-08 at 17 42 36" src="https://user-images.githubusercontent.com/91087641/159055577-c2c9f8b7-804c-4be8-95ac-07404796337d.png">

<img width="442" alt="Screen Shot 2022-01-08 at 15 22 41" src="https://user-images.githubusercontent.com/91087641/159055434-936d0a8b-d9c1-4967-800a-585f6aab665d.png">

![Screen Shot 2022-01-08 at 17 42 44](https://user-images.githubusercontent.com/91087641/159055626-4f4c882f-b5ec-41e2-b0f5-4dba446f1510.png)

![Screen Shot 2022-01-08 at 17 42 50](https://user-images.githubusercontent.com/91087641/159055674-8545da1e-0bbf-4101-8825-62b5ec27814b.png)

### Day 3 

#### Overcoming Collision Problem

![Screen Shot 2022-01-09 at 18 27 12](https://user-images.githubusercontent.com/91087641/159055824-3bea9bb4-797d-4ae6-ae7f-a3ec34ba8cf7.png)

![Screen Shot 2022-01-09 at 18 28 35](https://user-images.githubusercontent.com/91087641/159055901-7b795c96-e154-4a0e-8d29-a4bc220356be.png)

Overcoming Collision Problem

Vivi’s current position on Movement was not being reassigned 

<img width="559" alt="Screen Shot 2022-01-10 at 10 53 56" src="https://user-images.githubusercontent.com/91087641/159057222-f85c4abf-abb5-463d-bcd5-4b7aa4de589c.png">

<img width="970" alt="Screen Shot 2022-01-10 at 10 54 06" src="https://user-images.githubusercontent.com/91087641/159057354-8a5365a4-19e6-4ef6-a9d2-9654cc35bdfb.png">

<img width="740" alt="Screen Shot 2022-01-10 at 10 58 55" src="https://user-images.githubusercontent.com/91087641/159057441-97afd00f-4a8f-45cb-97d3-aacb50621c4c.png">

### Day 4 - 5 

#### Objectives

<img width="553" alt="Screen Shot 2022-01-10 at 12 15 18" src="https://user-images.githubusercontent.com/91087641/159057613-8c3a58ad-1b3f-493f-ac7d-4e733affd368.png">

<img width="651" alt="Screen Shot 2022-01-11 at 21 15 04" src="https://user-images.githubusercontent.com/91087641/159057999-da032f7e-48d6-49f3-b491-49e66af40616.png">
