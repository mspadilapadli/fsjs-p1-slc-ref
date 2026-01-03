const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

//set view engine
app.set("view engine", "ejs");

//set middleware to get fata from html input
app.use(express.urlencoded({ extended: true }));

//set router
app.use("/", require("./routers/index"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
