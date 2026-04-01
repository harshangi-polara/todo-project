require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/configuration/db");

const { register } = require("./src/service/auth-services");

connectDB();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
