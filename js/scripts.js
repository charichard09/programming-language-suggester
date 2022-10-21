//Business logic
function resultGenerator(name, snake, color, codeImage, funJob) {
  let pythonScore = 0;
  let javaScriptScore = 0;
  let cSharpScore = 0;

  // write if statements for all 5 input results, each time adding to the Score of the 3 languages
  //name
  if (name.length < 10) {
    pythonScore += 1;
  } else if (name.length >= 10 && name.length <= 15) {
    javaScriptScore += 1;
  } else if (name.length > 15) {
    cSharpScore += 1;
  }
  //snakes
  if (snake === "yes") {
    pythonScore += 3;
  } else if (snake === "no") {
    javaScriptScore += 1;
    cSharpScore += 1;
  }
  //color
  if (color === "purple") {
    cSharpScore += 1;
  } else if (color === "blue") {
    pythonScore += 1;
  } else if (color === "yellow") {
    javaScriptScore += 1;
  }
  //codeImage
  if (codeImage === "jsCode") {
    javaScriptScore += 1;
  } else if (codeImage === "pythonCode") {
    pythonScore += 1;
  } else if (codeImage === "cSharpCode") {
    cSharpScore += 1;
  }
  //funJob
  if (funJob === "Web Developer") {
    javaScriptScore += 1;
  } else if (funJob === "Data Engineer") {
    pythonScore += 1;
  } else if (funJob === "Game Developer") {
    cSharpScore += 1;
  }

  // return the language with the highest score 
  if (pythonScore >= javaScriptScore && pythonScore >= cSharpScore) {
    return "Python";
  } else if (javaScriptScore >= pythonScore && javaScriptScore >= cSharpScore) {
    return "JavaScript";
  } else if (cSharpScore >= pythonScore && cSharpScore >= javaScriptScore) {
    return "C#";
  } else {
    return "error";
  }
}


//UI logic
function getUserInput(event) {
  event.preventDefault();
  //hide results 
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");

  // get input values from all 5 forms and assign to variables
  const nameInput = document.getElementById("name").value;
  const snakeYSInput = document.querySelector("input[name='radio-snakes']:checked").value;
  const colorInput = document.querySelector("input[name='radio-color']:checked").value;
  const codeImageInput = document.querySelector("input[name='radio-codeImage']:checked").value;
  const funJobInput = document.getElementById("select-job").value;

  // get span object to (later, insert result to innerText)
  let resultSpan = document.getElementById("result");
  
  // use user input to generate a result python, js, or c-sharp
  resultSpan.innerText = resultGenerator(nameInput, snakeYSInput, colorInput, codeImageInput, funJobInput);
  document.getElementById(resultGenerator(nameInput, snakeYSInput, colorInput, codeImageInput, funJobInput)).removeAttribute("class");
}

window.addEventListener("load", function() {
  let surveyForm = document.getElementById("survey-form");

  surveyForm.addEventListener("submit", getUserInput);
});