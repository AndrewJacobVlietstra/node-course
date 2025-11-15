const date = new Date();
const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////////
// FILES

// Synchronous blocking code execution
// const textInput = fs.readFileSync("./text.txt", "utf-8");
// console.log(textInput);

// const textOutput = `This is an example of text output: ${textInput}\nCreated on ${date.toLocaleDateString()}`;
// fs.writeFileSync("./output.txt", textOutput);
// console.log("File written!");

// Asynchronous non-blocking code
// fs.readFile("./start.txt", "utf-8", (err, data1) => {
// 	if (err) return console.log("Error ocurred!");

// 	fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
// 		console.log(data2);
// 		fs.readFile("./append.txt", "utf-8", (err, data3) => {
// 			console.log(data3);

// 			fs.writeFile("./final.txt", `${data2}\n${data3}`, (err) => {
// 				console.log("File has been written!");
// 			});
// 		});
// 	});
// });

// console.log("Reading file...");

//////////////////////////////////////////
// SERVER
const portName = 8000;

const server = http.createServer((req, res) => {
	const pathname = req.url;

	if (pathname === "/" || pathname === "/overview") {
		return res.end("This is the Overview!");
	}
	if (pathname === "/product") {
		return res.end("This is the Product!");
	}

	res.writeHead(404, {
		"Content-type": "text/html",
		"My-Own-Header": "Hello World",
	});
	res.end("<h1>Page Not Found!</h1>");
});

server.listen(portName, "127.0.0.1", () => {
	console.log(`Listening to requests on port ${portName}...`);
});
