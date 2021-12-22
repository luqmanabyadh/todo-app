require("dotenv").config();
const express = require("express");
// const router = require(".routes");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(router);

app.listen(port, () => {
  console.log(`love you ${port}`);
});
