function generatePoem(event) {
	event.preventDefault();

  new Typewriter("#poem", {
    strings: "Un souffle doux, une romance",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem); 



