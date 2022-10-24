//Business logic
function resultGenerator(inputArray) {
  let pythonScore = 0;
  let javaScriptScore = 0;
  let cSharpScore = 0;

  if (inputArray[0].length < 10) {
    pythonScore += 1;
  } else if (inputArray[0].length >= 10 && inputArray[0].length <= 15) {
    javaScriptScore += 1;
  } else if (inputArray[0].length > 15) {
    cSharpScore += 1;
  }

  if (inputArray[1] === "yes") {
    pythonScore += 1;
  } else if (inputArray[1] === "no") {
    javaScriptScore += 1;
  } else if (inputArray[1] === "unsure"){
    cSharpScore += 1;
  }

  if (inputArray[2] === "purple") {
    cSharpScore += 1;
  } else if (inputArray[2] === "blue") {
    pythonScore += 1;
  } else if (inputArray[2] === "yellow") {
    javaScriptScore += 1;
  }

  if (inputArray[3] === "jsCode") {
    javaScriptScore += 1;
  } else if (inputArray[3] === "pythonCode") {
    pythonScore += 1;
  } else if (inputArray[3] === "cSharpCode") {
    cSharpScore += 1;
  }

  if (inputArray[4] === "Web Developer") {
    javaScriptScore += 1;
  } else if (inputArray[4] === "Data Engineer") {
    pythonScore += 1;
  } else if (inputArray[4] === "Game Developer") {
    cSharpScore += 1;
  }

  if (inputArray[5] === "Very Important") {
    javaScriptScore += 1;
  } else if (inputArray[5] === "Somewhat Important") {
    pythonScore += 1;
  } else if (inputArray[5] === "Not Important") {
    cSharpScore += 1;
  }

  if (inputArray[6] === "run") {
    javaScriptScore += 1;
  } else if (inputArray[6] === "horse duck") {
    pythonScore += 1;
  } else if (inputArray[6] === "duck horse") {
    cSharpScore += 1;
  }

  if (pythonScore >= javaScriptScore && pythonScore >= cSharpScore) {
    return "Python";
  } else if (javaScriptScore >= pythonScore && javaScriptScore >= cSharpScore) {
    return "JavaScript";
  } else if (cSharpScore >= pythonScore && cSharpScore >= javaScriptScore) {
    return "C#";
  } 
}


//UI logic
function hideResult() {
  document.getElementById("Python").setAttribute("class", "hidden");
  document.getElementById("JavaScript").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
}

function changeBackground(languageResult) {
  if (languageResult === "Python") {
    document.body.style.backgroundColor = "blue";
    document.getElementById("header").style.backgroundColor = "yellow";
    document.getElementById("header").style.color = "black";
    document.querySelector("button").style.color = "black";
    document.querySelector("button").style.backgroundColor = "yellow";
    document.querySelector("button").style.borderColor = "black";
  } else if (languageResult === "C#") {
    document.body.style.backgroundColor = "purple";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("header").style.color = "black";
    document.querySelector("button").style.color = "black";
    document.querySelector("button").style.backgroundColor = "white";
    document.querySelector("button").style.borderColor = "black";
  } else if (languageResult === "JavaScript") {
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
  hideResult();

  const nameInput = document.getElementById("name").value;
  const snakeYSInput = document.querySelector("input[name='radio-snakes']:checked").value;
  const colorInput = document.querySelector("input[name='radio-color']:checked").value;
  const codeImageInput = document.querySelector("input[name='radio-codeImage']:checked").value;
  const funJobInput = document.getElementById("select-job").value;
  const freelanceInput = document.getElementById("select-freelance").value;
  const wouldYouRatherInput = document.getElementById("select-wouldYouRather").value;

  return [nameInput, snakeYSInput, colorInput, codeImageInput, funJobInput, freelanceInput, wouldYouRatherInput]
}

function imageSelected() {
  document.getElementById("codeImage1").addEventListener("click", function () {
    document.getElementById("badge1").setAttribute("class", "badge badge-success");
    document.getElementById("badge2").setAttribute("class", "badge badge-success hidden");
    document.getElementById("badge3").setAttribute("class", "badge badge-success hidden");
  });
  document.getElementById("codeImage2").addEventListener("click", function () {
    document.getElementById("badge1").setAttribute("class", "badge badge-success hidden");
    document.getElementById("badge2").setAttribute("class", "badge badge-success");
    document.getElementById("badge3").setAttribute("class", "badge badge-success hidden");
  });
  document.getElementById("codeImage3").addEventListener("click", function () {
    document.getElementById("badge1").setAttribute("class", "badge badge-success hidden");
    document.getElementById("badge2").setAttribute("class", "badge badge-success hidden");
    document.getElementById("badge3").setAttribute("class", "badge badge-success");
  });
}

window.addEventListener("load", function() {
  let surveyForm = document.getElementById("survey-form");
  const result = resultGenerator(surveyForm.addEventListener("submit", getUserInput));

  document.getElementById("insertResultHere").innerText = result;

  document.getElementById(result).removeAttribute("class");
  
  changeBackground(result);

  imageSelected();
});