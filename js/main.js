//this is a self-invoking anonymys function
// also called an IIWFE
// also called a module

(() => {
console.log("some message - from javascript");

let theButton = document.querySelector("#myButton"),
    theHeading = document.querySelector('h1');
    //svgImage = document.querySelector("#svgGraphic"),
    allSVGs = document.querySelectorAll(".svg");

function changeText() {
  theHeading.textContent = "Hello there from the console";
}

function logSVG() {
  console.log(this.id)
}

theButton.addEventListener("click",changeText);
//svgImage.addEventListener("click", logSVG),
//svgImage2.addEventListener("click", logSVG);

allSVGs.forEach(item => item.addEventListener('click',logSVG));

//for(el in allSVGs) {}
})();
