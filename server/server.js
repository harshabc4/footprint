const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

// app
const app = express();

// db
let dbName = "Footprint";

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${dbName} Database`))

  .catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require("./routes/test");
app.use("/", testRoutes);

const carbonRoutes = require("./routes/carbon");
app.use("/", carbonRoutes);

// app.get("/carbon", (req, res) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   res.send({ msg: "This has CORS enabled 🎈" });
// });

// app.get('/materials',(request, response)=>{
//     // Sort array by amount
//     db.collection('materials').find().sort({amount: -1}).toArray()
//     .then(data => {
//         response.render('material.ejs', { info: data })
//     })
//     .catch(error => console.error(error))
// })

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
