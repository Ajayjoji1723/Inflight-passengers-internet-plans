const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")
const dotenv = require("dotenv");




dotenv.config();
const app = express();

const port = 4444 || process.env.PORT;
const dbURI = process.env.MONGO_URL_dev;


app.use(cors());
app.use(bodyParser.json());

//DB Connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));


app.use("/api", require("./routes/apiRoutes"));






app.listen(port, () => {
  console.log(`Server running at ${port}`);
});