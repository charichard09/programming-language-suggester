//Business logic


//UI logic
function getUserInput(event) {
  event.preventDefault();
  // get input values from all 5 forms and assign to variables
  const nameInput = document.getElementById("name").value;
  const snakeYSInput = document.querySelector("input[name='radio-snakes']:checked").value;
  const colorInput = document.querySelector("input[name='radio-color']:checked").value;
  const codeImageInput = document.querySelector("input[name='radio-codeImage']:checked").value;
  const funJobInput = document.getElementById("select-job").value;

  // get span object to (later, insert result to innerText)
  let resultSpan = document.getElementById("result");
  
  // use user input to generate a result python, js, or c-sharp
  resultSpan.innerText = nameInput + snakeYSInput + colorInput + codeImageInput + funJobInput;
}

window.addEventListener("load", function() {
  let surveyForm = document.getElementById("survey-form");

  surveyForm.addEventListener("submit", getUserInput);

});