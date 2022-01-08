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

  //global variables for Cactus Obstacle
  const cactusClass ='cactus' 
  const cactusStartPosition = 89 //this starting position refers to an index
  let cactusCurrentPosition = 89 //cactuars current position refers to an index


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
  }

  //--Adding and Removing Obstacles From Grid--//
  
  //adding Cactus Obstacle to the grid
  function addCactus(position) {
    console.log('Cell Cactus picked Using The Position Index Passed In —>', cells[position])
    cells[position].classList.add(cactusClass)
  }

  //removing Cactuar Obstacle from the grid
  function removeCactus(position) {
    cells[position].classList.remove(cactusClass)
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

    if (key === right && viviCurrentPosition % width !== width - 1) {
      viviCurrentPosition++
    } else if (key === left && viviCurrentPosition % width !== 0) {
      viviCurrentPosition--
    } else if (key === up && viviCurrentPosition >= width) {
      viviCurrentPosition -= width
    } else if (key === down && viviCurrentPosition + width <= cellCount - 1) {
      viviCurrentPosition += width
    } else {
      console.log('Invalid Key')
    }
    console.log('Position For Vivi After Redefining --->', viviCurrentPosition)
    addVivi(viviCurrentPosition)
  }

  //moving Cactus Obstacle
  


  //Calling Event Listeners
  document.addEventListener('keydown', handleKeyDown)

  //Calling Functions
  createGrid(viviStartPosition) // Creating the grid with Vivi in the starting position


}




window.addEventListener('DOMContentLoaded', init)