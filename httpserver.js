const express = require('express')
const app = express();
const port = 5050;
const fs = require('fs')


const apis = [{ id: 1, name: "mohammed", mail: "mohammed@xyz" },
{ id: 2, name: "upayathulla", mail: "upayathulla@xyz" },
{ id: 3, name: "mohammed upayathulla", mail: "mohammedupayathulla@xyz" },
{ id: 4, name: "JS", mail: "mohammed@xyz" },
{ id: 5, name: "React", mail: "mohammed@xyz" },
{ id: 6, name: "node", mail: "mohammed@xyz" }, 
{ id: 7, name: "express.js", mail: "mohammed@xyz" }, ]

app.use(express.json())

app.post('/api/one', (req, res) => {
  const newUser = {
    id: "1",
    name: "mohammed",
    age: "23",
    DOP: "18/04/2002"
  };
  res.status(201);
  res.json(newUser);
});


app.get('/', (req, res) => {
  console.log("First middleware element")
  res.send(" data created successfully ")
});

app.get('/45', (req, res) => {
  console.log("First middleware element")
  res.send("server created successfully ")
});

app.get("/api/one", (req, res) => {

  const data = apis
  fs.writeFileSync('api.txt', JSON.stringify(data, null , 2))
  res.send(data)
 

  // res.json([

  //   { id: 1, name: "mohammed", mail: "mohammed@xyz" },
  //   { id: 2, name: "upayathulla", mail: "upayathulla@xyz" },
  //   { id: 3, name: "mohammed upayathulla", mail: "mohammedupayathulla@xyz" },
  //   { id: 4, name: "JS", mail: "mohammed@xyz" },
  //   { id: 5, name: "React", mail: "mohammed@xyz" },
  //   { id: 6, name: "node", mail: "mohammed@xyz" },
  // ])
  console.log("api send sussesfully")


})


app.listen(port, () => {
  console.log(`server crated and run in http://localhost:${port}`)

})

