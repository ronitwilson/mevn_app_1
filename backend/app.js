require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser  = require('body-parser');
const morgan = require('morgan');

// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');
// const route = require('./routes/main')

// middleware
// app.use(express.static('./public'));
// app.use(express.json());
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// app.use("/api/v1",route)
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

app.get("/status", (req,res) => {
  res.send("status ok")
})

app.post("/register", (req,res) => {
  console.log(req.body)
  console.log(req.body.user)
  console.log(req.body.pwd)
  res.status(200).json({msg:`${req.body.user} is registered`})
})

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
