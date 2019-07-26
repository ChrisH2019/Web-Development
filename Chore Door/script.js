// door1
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let currentPlaying = true;
let openDoor1;
let openDoor2;
let openDoor3;

// Radomly assign a doorPath to a door
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

// Check if the door opened is bot
const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

// Check if the door has been clicked
const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

// Display the prompt on the startButton according // to the game status
const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else if (status === 'lose') {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentPlaying = false;
}

// Check the game status
const playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }
}

// door1
doorImage1.onclick = () => {
  if (currentPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
		playDoor(doorImage1);
  }
}

// door2
doorImage2.onclick = () => {
  if (currentPlaying && !isClicked(doorImage2)) {
		doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

// door3
doorImage3.onclick = () => {
  if (currentPlaying && !isClicked(doorImage3)) {
  	doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}


// startButton click event
startButton.onclick = () => {
  startRound();
}

// Reset the game values
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentPlaying = true;
  randomChoreDoorGenerator();
}

startRound();