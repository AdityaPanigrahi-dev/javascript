const form = document.querySelector("form");
//const height = parseInt(document.querySelector("#height").value);
// this usecase will give you empty value
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "please give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show results

    result.innerHTML = `<span>${bmi}</span>`;
    const category = document.querySelector("#weight-category");
    if (result < 18.6) {
      category.innerHTML = `<span>you are underweight</span>`;
    } else if (result >= 18.6 && result < 24.9) {
      category.innerHTML = `<span>your weight is normal</span>`;
    } else {
      category.innerHTML = `<span>you are overweight</span>`;
    }
  }
});
