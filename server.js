const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

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

// TEST START
// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/public")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/public", "index.html"));
});

// TEST END

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// listener
const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
