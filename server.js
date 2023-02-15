const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use("/", express.json());
app.use(morgan("dev"));

mongoose.connect(
  "mongodb+srv://PaulMRobertson:zu2UtcX6-!!zkP*@atlascluster.rqa8vdj.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("Connected to Database!")
);

app.use("/boulders", require("./routes/bouldersRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log("server is running on port 8000")
})