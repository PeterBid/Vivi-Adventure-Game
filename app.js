function init() {

  //---GlOBAL VARIABLES---//

  //global variables for grid
  const grid = document.querySelector('.grid')
  const width = 10
  const cellCount = width * width //this makes the total cells in the grid i.e width 10 = 100 cells
  const cells = []

  //global variables for Vivi Character
  const viviClass = 'vivi'
  const viviStartPosition = 94 //this starting position refers to an index
  let viviCurrentPosition = 94 //vivi’s current position refers to an index

  //global variables for Cactus Obstacles
  const cactusClass = 'cactus'
  const cactusStartPosition = 89 //this starting position refers to an index
  let cactusCurrentPosition = 89 //cactus current position refers to an index

  const cactus2Class = 'cactus'
  const cactus2StartPosition = 87 //this starting position refers to an index
  let cactus2CurrentPosition = 87 //cactus2 current position refers to an index

  //global variables for Tomberry Obstacles
  const tomberryClass = 'tomberry'
  const tomberryStartPosition = 71 //this starting position refers to an index
  let tomberryCurrentPosition = 71 //tomberry current position refers to an index

  const tomberry2Class = 'tomberry'
  const tomberry2StartPosition = 73 //this starting position refers to an index
  let tomberry2CurrentPosition = 73 //tomberry2 current position refers to an index

  //global variables for Bird Obstacles
  const birdClass = 'bird'
  const birdStartPosition = 29 //this starting position refers to an index
  let birdCurrentPosition = 29 //tomberry2 current position refers to an index

  //global variables for Riding Obstacles
  let ridingBirdClass = 'riding'




  //global variables for Topbar
  let score = 0
  let lives = 3
  let highScore = 0
  let level = 1

  //global variables for time

  //--ELEMENT SELECTORS--//

  //element selectors for Topbar
  const selectReset = document.querySelector('#reset')
  const selectLives = document.querySelector('#lives')
  const selectScore = document.querySelector('#score')
  const selectHighScore = document.querySelector('#highscore')
  const selectLevel = document.querySelector('#level')

  //--UPDATING PARAMETERS--//

  //updating the parameters in the Topbar
  selectLives.innerHTML = `Lives: ${lives}`
  selectScore.innerHTML = `Score: ${score}`
  selectHighScore.innerHTML = `HighScore: ${highScore}`
  selectLevel.innerHTML = `Level: ${level}`

  //--GRID--//  

  //making the grid
  function createGrid(viviStartPosition) {
    for (let I = 0; I < cellCount; I++) {
      const cell = document.createElement('div')
      cell.innerText = I
      grid.appendChild(cell)
      cells.push(cell)
    }
    addVivi(viviStartPosition) // call the function to add the Vivi at the starting position
    addCactus(cactusStartPosition) // call the function to add the Cactus at the starting position
    addCactus(cactus2StartPosition) // call the function to add the 2nd Cactus at the starting position
    addTomberry(tomberryStartPosition) // call the function to add the Tomberry at the starting position
    addTomberry(tomberry2StartPosition) // call the function to add the 2nd Tomberry at the starting position
    addBird(birdStartPosition) // call the function to add the Bird at the starting position

    moveBird()
  }

  //--Adding and Removing Vivi From Grid--//

  //adding Vivi to the grid
  function addVivi(position) { // this function is reusable for different positions
    console.log('Position Being Passed In For Vivi —>', position)
    console.log('Cell Vivi picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(viviClass)
  }

  //removing Vivi from the grid
  function removeVivi(position) {
    cells[position].classList.remove(viviClass)
    //console.log('position', position)
    //console.log('current -->', viviCurrentPosition) 
  }

  //--Adding and Removing Obstacles From Grid--//

  //adding Cactus Obstacles to the grid
  function addCactus(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(cactusClass)
  }

  //removing Cactuar Obstacles from the grid
  function removeCactus(position) {
    cells[position].classList.remove(cactusClass)
  }

  //adding Tomberry Obstacles to the grid
  function addTomberry(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(tomberryClass)
  }

  //removing Tomberry Obstacles from the grid
  function removeTomberry(position) {
    cells[position].classList.remove(tomberryClass)
  }

  //adding bird Obstacles to the grid
  function addBird(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(birdClass)
  }

  //removing Bird Obstacles from the grid
  function removeBird(position) {
    cells[position].classList.remove(birdClass)
  }

  //--Adding and Removing Riding Obstacles From Grid--//

  function addRidingBird(position) {
    //console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(ridingBirdClass)
  }

  //removing Bird Obstacles from the grid
  function removeRidingBird(position) {
    cells[position].classList.remove(ridingBirdClass)
  }




  //--Movment On The Grid--//

  //moving Vivi
  function handleKeyDown(event) {
    const key = event.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40
    console.log('Position For Vivi Before Redefining --->', viviCurrentPosition)
    removeVivi(viviCurrentPosition)

    if (key === right && viviCurrentPosition % width !== width - 1) { // if the right arrow key is pressed and the Vivi is not on the right edge
      viviCurrentPosition++ // redefine Vivi’s position index to be previous position plus 1 - moves Vivi right on the Grid
    } else if (key === left && viviCurrentPosition % width !== 0) { // if the left arrow is pressed and the Vivi is not on the left edge
      viviCurrentPosition-- // redefine Vivi’s position index to be previous position minus 1 - moves Vivi left on the Grid
    } else if (key === up && viviCurrentPosition >= width) { // if the up arrow is pressed and the Vivi is not on the top row
      viviCurrentPosition -= width // redefine Vivi’s position index to be previous position minus width - position goes down an entire width value on the Grid - moves Vivi up on the Grid
    } else if (key === down && viviCurrentPosition + width <= cellCount - 1) { // if the down arrow is pressed and Vivi is not on the bottom row
      viviCurrentPosition += width  // redefine Vivi’s position index to be previous position plus width - position goes up an entire width value on the Grid - moves Vivi down on the Grid
    } else {
      console.log('invalid key used')
    }
    Collision() //adds the Collision Functions For When Vivi moves into and Obstacle
    //riding()
    addVivi(viviCurrentPosition)
  }

  //--Moving Cactus--//


  //moving Cactus Obstacles left
  function moveCatusLeft() {
    //console.log(‘Position For Cactus Before Redefining —>’, cactusCurrentPosition)
    removeCactus(cactusCurrentPosition) //remove Cactus from current position

    if ((cactusCurrentPosition % width !== 0)) { // If Cactus is not on the left edge
      cactusCurrentPosition-- //moves Cactus left on the Grid
    } else if (cactusCurrentPosition = 80) { //if Cactus position is 80
      cactusCurrentPosition = cactusCurrentPosition + 9 //add 9 to Catcus position to move it, to make it position of 89
    } else {
      //console.log(‘cactus not working’)
    }
    // console.log(‘Position For Cactus After Redefining —>’, cactusCurrentPosition)
    addCactus(cactusCurrentPosition) //adds Cactus to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Cactus - For When Cactus moves in Vivi
  }

  function moveCatus2Left() {
    //console.log(‘Position For Cactus2 Before Redefining —>’, cactusCurrentPosition)
    removeCactus(cactus2CurrentPosition) //remove Cactus2 from current position

    if ((cactus2CurrentPosition % width !== 0)) { // If Cactus2 is not on the left edge
      cactus2CurrentPosition-- //moves Cactus2 left on the Grid
    } else if (cactus2CurrentPosition = 80) { //if Cactus2 position is 80
      cactus2CurrentPosition = cactus2CurrentPosition + 9 //add 9 to Catcus2 position to move it, to make it position of 89
    } else {
      //console.log(‘cactus2 not working’)
    }
    // console.log(‘Position For Cactus2 After Redefining —>’, cactusCurrentPosition)
    addCactus(cactus2CurrentPosition) //adds Cactus2 to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Cactus2 - For When Cactus2 moves in Vivi
  }


  //--Moving Tomberrys--//

  //moving Tomberrys Obstacles Right
  function moveTomberryRight() {
    //console.log(‘Position For Tomberry Before Redefining —>’, tomberryCurrentPosition)
    removeTomberry(tomberryCurrentPosition) //remove Tomberry from current position

    if ((tomberryCurrentPosition % width !== width - 1)) { // If Tomberry is not on the right edge
      tomberryCurrentPosition++ //moves Tomberry right on the Grid
    } else if (tomberryCurrentPosition = 79) { //if Tomberry position is 79
      tomberryCurrentPosition = tomberryCurrentPosition - 9 // -9 to Tomberry position to move it, to make it position of 70
    } else {
      //console.log(‘tomberry not working’)
    }

    addTomberry(tomberryCurrentPosition) //adds Tomberry to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Tomberry - For When Tomberry moves in Vivi
  }

  function moveTomberry2Right() {
    //console.log(‘Position For Tomberry Before Redefining —>’, tomberryCurrentPosition)
    removeTomberry(tomberry2CurrentPosition) //remove Tomberry from current position

    if ((tomberry2CurrentPosition % width !== width - 1)) { // If Tomberry is not on the right edge
      tomberry2CurrentPosition++ //moves Tomberry right on the Grid
    } else if (tomberry2CurrentPosition = 79) { //if Tomberry position is 79
      tomberry2CurrentPosition = tomberry2CurrentPosition - 9 // -9 to Tomberry position to move it, to make it position of 70
    } else {
      //console.log(‘tomberry not working’)
    }

    addTomberry(tomberry2CurrentPosition) //adds Tomberry to the new position in accordance with the if statement
    Collision() //adds Collision Function to the Tomberry - For When Tomberry moves in Vivi
  }

  //--Moving Birds--//


  //moving Bird Obstacles 
  function moveBird() {
    addBird(birdStartPosition)
    setInterval(function () {
      removeBird(birdCurrentPosition)
      if (viviCurrentPosition !== birdCurrentPosition) {
        cells.forEach(cell => cell.classList.remove('riding'))
      }
      if (viviCurrentPosition === birdCurrentPosition) {
        console.log('same position')
        removeBird(birdCurrentPosition)

        addRidingBird(birdCurrentPosition)
        score += 100
        removeVivi(viviCurrentPosition)
        console.log('add Vivi')
        removeRidingBird(birdCurrentPosition)

        if (viviCurrentPosition === 20) {
          removeRidingBird(viviCurrentPosition)
          viviCurrentPosition = birdStartPosition
          removeRidingBird(viviCurrentPosition)
        }
        viviCurrentPosition--
        addRidingBird(viviCurrentPosition)
      }
      if (birdCurrentPosition === 20) {
        removeBird(birdCurrentPosition)
        birdCurrentPosition = birdStartPosition
        removeBird(birdCurrentPosition)
      }
      birdCurrentPosition--
      addBird(birdCurrentPosition)
    }, 1000);


  }




  //--Collision Function--//

  //Adding Or || onto the the if Statement with everything Vivi Collides with.

  function Collision() {
    if (viviCurrentPosition === cactusCurrentPosition || viviCurrentPosition === cactus2CurrentPosition ||
      viviCurrentPosition === tomberryCurrentPosition || viviCurrentPosition === tomberry2CurrentPosition) {
      console.log('Collision Is Triggered')
      removeVivi(viviCurrentPosition)
      console.log('Vivi Removed')
      viviCurrentPosition = viviStartPosition
      console.log('Vivi current position checked')
      addVivi(viviCurrentPosition)
      console.log('Vivi Added To Start')
    }
  }





  //Calling Event Listeners
  document.addEventListener('keydown', handleKeyDown)

  //Calling Functions
  createGrid(viviStartPosition) // Creating the grid with Vivi in the starting position
  setInterval(moveCatusLeft, 1000) //Calling the function to move cactus left at a set interval of 1 seconds
  setInterval(moveCatus2Left, 1000) //Calling the function to move cactus2 left at a set interval of 1 seconds
  setInterval(moveTomberryRight, 1000) //Calling the function to move cactus2 left at a set interval of 1 seconds
  setInterval(moveTomberry2Right, 1000) //Calling the function to move cactus2 left at a set interval of 1 seconds
  //setInterval(moveBirdLeft, 1000) //Calling the function to move bird left at a set interval of 1 seconds
}





window.addEventListener('DOMContentLoaded', init)