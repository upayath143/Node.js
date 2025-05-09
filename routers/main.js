const express = require('express')
const router = express.Router()
const fs = require('fs')

const apis = [
    { id: 1, name: "mohammed", mail: "mohammed@xyz" },
    { id: 2, name: "upayathulla", mail: "upayathulla@xyz" },
    { id: 3, name: "mohammed upayathulla", mail: "mohammedupayathulla@xyz" },
    { id: 4, name: "JS", mail: "mohammed@xyz" },
    { id: 5, name: "React", mail: "mohammed@xyz" },
    { id: 6, name: "node", mail: "mohammed@xyz" }, 
    { id: 7, name: "express.js", mail: "mohammed@xyz" },
    { id: 8, name: "mohammed", mail: "mohammed@xyz" },
    { id: 9, name: "upayathulla", mail: "upayathulla@xyz" },
    { id: 10, name: "mohammed upayathulla", mail: "mohammedupayathulla@xyz" },
    { id: 11, name: "JS", mail: "mohammed@xyz" },
    { id: 12, name: "React", mail: "mohammed@xyz" },
    { id: 13, name: "node", mail: "mohammed@xyz" },
    { id: 14, name: "express.js", mail: "mohammed@xyz" },
  ]


router.post('/api/onee', (req, res) => {
    const newUser =[ {
      id: "1",
      name: "mohammed",
      age: "23",
      DOP: "18/04/2002"
    },
  
  
    {
      id: "2",
      name: "upayathulla",
      age: "23",
      DOP: "18/04/2002"
    },
  
  
    {
      id: "3",
      name: "mohammed upayathulla",
      age: "23",
      DOP: "18/04/2002"
    },
  
  ];
    res.status(201);
    res.json(newUser);
  });
  
  router.post('/Mohammed', (req, res) => {
   console.log("WE ARE GETTING RESPONCE IS ::",req.body.message)
   const data =req.body.message
    res.send(`data created successfully: ${data} `)
    
    if (parseInt(data) > 0){
    fs.writeFileSync("mohammed.txt" ,  data)
  }
  else{
    fs.writeFileSync("upayathulla.txt" ,  "please check you submint empty data")
  }
    
  });
  
  router.get('/45', (req, res) => {
    console.log("First middleware element")
    const doct="mohammed";
    res.render('index',
        
        { doct} );

        console.log(doct)
  });
  
  router.get("/api/one", (req, res) => {
  
    const data = apis
    fs.writeFileSync('apo.txt', JSON.stringify(data,null, 2))
    res.status(201).send(data)
    console.log("api send sussesfully")
  
  })
  
  router.use((req, res) => {
    res.status(404).send("<h1> 404 Error: Page Not Found </h1>");
  });
  
  module.exports = router


// const express = require('express');
// const router = express.Router();
// const fs = require('fs');

// const apis = [
//   { id: 1, name: "mohammed", mail: "mohammed@xyz" },
//   { id: 2, name: "upayathulla", mail: "upayathulla@xyz" },
// ];

// // POST route to handle form submission
// router.post('/Mohammed', (req, res) => {
//   console.log("We are receiving the response:", req.body.message);
//   const data = req.body.message;

//   if (parseInt(data) > 1) {
//     fs.writeFileSync("mohammed.txt", data);
//     res.send(`Data created successfully: ${data}`);
//   } else {
//     fs.writeFileSync("upayathulla.txt", "Please check your submitted data.");
//     res.send("Data is invalid. Please check your submission.");
//   }
// });

// // Get route to serve API data
// router.get('/api/one', (req, res) => {
//   const data = apis;
//   fs.writeFileSync('apo.txt', JSON.stringify(data, null, 2));
//   res.status(201).send(data);
//   console.log("API data sent successfully");
// });

// // Render the index.pug view
// router.get('/45', (req, res) => {
//   console.log("Rendering the index page");
//   res.render('index', { title: 'Pug Example', message: 'Enter data to be saved!' });
// });

// // Handle 404 errors
// router.use((req, res) => {
//   res.status(404).send("<h1>404 Error: Page Not Found</h1>");
// });

// module.exports = router;
