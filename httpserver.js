const express = require('express')
const app = express();
const port = 5050;
const router = require ('./routers/main.js')

app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.urlencoded());

app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`server crated and run in :: http://localhost:${port}`)

})


