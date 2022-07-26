const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
