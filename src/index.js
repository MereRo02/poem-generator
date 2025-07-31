function displayPoem(response) {
console.log("poem generated");

 new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}
function generatePoem(event) {
	event.preventDefault();
	let instructionsInput = document.querySelector("#user-instructions");

	let apiKey = "af100of073be0141d3a3t336d3db1ff1";
	let context = "You are a romantic poem expert, and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions.";
	let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
	
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	console.log("generating poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	axios.get(apiUrl).then(displayPoem);}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem); 



