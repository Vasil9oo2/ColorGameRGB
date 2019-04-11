var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // }else{
      //   numSquares = 6;
      // }
      reset();
      //figure out how many squares to show
      //pick new colors
      //pick a new pickedColor
      //update page to reflect changes
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare color to clickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!!!";
        resetButton.textContent = "Play again ?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }else{
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color fram array
  pickedColor = pickColor();
  //change colorDisplay to macth picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     }else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function(){
  reset();
  // //generate all new Colors
  // colors = generateRandomColors(numSquares);
  // //pick a new random color fram array
  // pickedColor = pickColor();
  // //change colorDisplay to macth picked color
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "NEW COLORS";
  //
  // messageDisplay.textContent = "";
  // //change colors of squares
  // for(var i = 0; i < squares.length; i++){
  //   squares[i].style.background = colors[i];
  // }
  // h1.style.background = "steelblue";
});

function changeColors(color){
  //loop throug all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = []
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random colors and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" fram 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" fram 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" fram 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
