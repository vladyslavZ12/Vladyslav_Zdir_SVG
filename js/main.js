//this is a self-invoking anonymys function
// also called an IIWFE
// also called a module

(() => {
console.log("some message - from javascript");

let theButton = document.querySelector("#myButton"),
    theHeading = document.querySelector('h1');
    svgImage = document.querySelector("#svgGraphic");

function changeText() {
  document.querySelector('h1').textContent = "Hello there from the console";
}

function logSVG() {
  console.log(this.id)
}

theButton.addEventListener("click",changeText);
svgImage.addEventListener("mouseover", logSVG);

})();
