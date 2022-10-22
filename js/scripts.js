//Business logic
function resultGenerator(name, snake, color, codeImage, funJob) {
  let pythonScore = 0;
  let javaScriptScore = 0;
  let cSharpScore = 0;

  if (name.length < 10) {
    pythonScore += 1;
  } else if (name.length >= 10 && name.length <= 15) {
    javaScriptScore += 1;
  } else if (name.length > 15) {
    cSharpScore += 1;
  }

  if (snake === "yes") {
    pythonScore += 1;
  } else if (snake === "no") {
    javaScriptScore += 1;
  } else if (snake === "unsure"){
    cSharpScore += 1;
  }

  if (color === "purple") {
    cSharpScore += 1;
  } else if (color === "blue") {
    pythonScore += 1;
  } else if (color === "yellow") {
    javaScriptScore += 1;
  }

  if (codeImage === "jsCode") {
    javaScriptScore += 1;
  } else if (codeImage === "pythonCode") {
    pythonScore += 1;
  } else if (codeImage === "cSharpCode") {
    cSharpScore += 1;
  }

  if (funJob === "Web Developer") {
    javaScriptScore += 1;
  } else if (funJob === "Data Engineer") {
    pythonScore += 1;
  } else if (funJob === "Game Developer") {
    cSharpScore += 1;
  }

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
function changeBackground(language) {
  if (language === "Python") {
    document.body.style.backgroundColor = "blue";
    document.getElementById("header").style.backgroundColor = "yellow";
    document.getElementById("header").style.color = "black";
    document.querySelector("button").style.color = "black";
    document.querySelector("button").style.backgroundColor = "yellow";
    document.querySelector("button").style.borderColor = "black";
  } else if (language === "C#") {
    document.body.style.backgroundColor = "purple";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("header").style.color = "black";
    document.querySelector("button").style.color = "black";
    document.querySelector("button").style.backgroundColor = "white";
    document.querySelector("button").style.borderColor = "black";
  } else if (language === "JavaScript") {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("header").style.color = "grey";
    document.querySelector("button").style.color = "grey";
    document.querySelector("button").style.backgroundColor = "black";
    document.querySelector("button").style.borderColor = "black";
  }
}

function getUserInput(event) {
  event.preventDefault();

  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");

  const nameInput = document.getElementById("name").value;
  const snakeYSInput = document.querySelector("input[name='radio-snakes']:checked").value;
  const colorInput = document.querySelector("input[name='radio-color']:checked").value;
  const codeImageInput = document.querySelector("input[name='radio-codeImage']:checked").value;
  const funJobInput = document.getElementById("select-job").value;

  let resultSpan = document.getElementById("result");
  let result = resultGenerator(nameInput, snakeYSInput, colorInput, codeImageInput, funJobInput)

  resultSpan.innerText = result;
  document.getElementById(result).removeAttribute("class");
  changeBackground(result);
}

window.addEventListener("load", function() {
  let surveyForm = document.getElementById("survey-form");

  surveyForm.addEventListener("submit", getUserInput);
});