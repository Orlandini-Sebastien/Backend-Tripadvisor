const express = require("express");
const cors = require("cors");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/form', function (req, res) {
   console.log(req.body);
})

app.all("*", (req,res)=>{
    res.status(404).json({message: "😞 Not found 😞"});
})

app.listen(process.env.PORT, (req,res)=>{
  console.log("🚀🚀 Server has started 🚀🚀");
} );