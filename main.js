randomNumber = Math.floor((Math.random() * quickDrawDataset.length) + 1);
Element_of_array = array1[randomNo];
console.log(quickDrawDataSet[randomNumber]);
sketch = quickDrawDataSet[randomNumber];
document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch;

var timerCounter = 0;
var timerCheck = "";
var drawSketch = "";
var answerHolder= "";
var score = 0;

function draw(){

}

function checkSketch(){

}
function updateCanvas() {
    background("white");
    randomNumber = Math.floor((Math.random() * quickDrawDataset.length) + 1);
    console.log(quickDrawDataset[randomNumber]);
    sketch = quickDrawDataset[randomNumber];
    document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch;
  }
  function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
  }

  function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  
   function checkSketch(){

   }
  }
  function checkSketch()
{
  timerCounter++;
  document.getElementById('time').innerHTML = 'Tempo: ' + timerCounter;
  console.log(timerCounter)
  if(timerCounter > 400)
    {
      timerCounter = 0;
      timerCheck = "completed"
    }
    if(timerCheck =="completed" || answerHolder == "set")
    {
      timerCheck = "";
      answerHolder = "";
      updateCanvas();
    }

}