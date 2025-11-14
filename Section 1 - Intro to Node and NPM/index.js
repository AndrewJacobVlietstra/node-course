const fs = require("fs");
const date = new Date();

// Synchronous blocking code execution
// const textInput = fs.readFileSync("./text.txt", "utf-8");
// console.log(textInput);

// const textOutput = `This is an example of text output: ${textInput}\nCreated on ${date.toLocaleDateString()}`;
// fs.writeFileSync("./output.txt", textOutput);
// console.log("File written!");

// Asynchronous non-blocking code
fs.readFile("./start.txt", "utf-8", (err, data1) => {
	if (err) return console.log("Error ocurred!");

	fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
		console.log(data2);
		fs.readFile("./append.txt", "utf-8", (err, data3) => {
			console.log(data3);

			fs.writeFile("./final.txt", `${data2}\n${data3}`, (err) => {
				console.log("File has been written!");
			});
		});
	});
});

console.log("Reading file...");
