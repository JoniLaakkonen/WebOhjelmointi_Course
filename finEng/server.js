const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;


let finEngArray = [];
let data = fs.readFileSync("./finEng.txt", { encoding: "utf8", flag: "r" });

const splitLines = data.split(/\r?\n/); // adding every separate row form data(./finEng.txt...) to an array

splitLines.forEach((line) => {//for each element in splitLines 
  const words = line.split(/\s+/); // split elements in splitLines, into two by separating with any whitespace between two words.
  const word = {//create object with two variables
    fin: words[0],
    eng: words[1]
  };
  finEngArray.push(word);//add word object to array
});


app.use(express.json()); //Using JSON
app.use(express.urlencoded({ extended: true })); //Using extended format in data transfer

//CORS asetukset
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");
  next();
});

// GET All Words
app.get("/finEng", (req, res) => {
      res.json(finEngArray);//return whole array in JSON
    });
    

// GET a Spesific Word
app.get("/finEng/:word", (req, res) => {
  const wordToLook = req.params.word; //add word in param to variable
  const myWord = finEngArray.find((element) => element.fin === wordToLook);//checks if object for word exists and adds the whole element into variable
  return res.json(myWord ? myWord : { message: "Not found" }); //returns the word in JSON if found
});

// ADD a Word
app.post("/finEng", (req, res) => {
  const wordPair = req.body;
  finEngArray.push(wordPair);

  try{
    data += `\n${wordPair.fin}  ${wordPair.eng}`; //adding in a new element to previosely filled data.
    fs.writeFileSync("./finEng.txt", data);//writing over given data into .txt file given. (in bigger scale could just add to end but for this practice I tought this to be enough)
    return res.status(201).json(wordPair);// succesfully created element
  }catch(e){//if error is caught during..
    console.log(e);
    return res.status(500).json(err);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});