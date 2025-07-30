function generatePoem(event) {
	event.preventDefault();
	alert("Generating your poem...");

let poemElement = document.querySelector("#poem");
poemElement.innerHTML = "La tombe dit a la rose"; 
}

let poemFormElement = document.querySelector("poem-generator");
poemFormElement.addEventListener("submit", generatePoem); 
