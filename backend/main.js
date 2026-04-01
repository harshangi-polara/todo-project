require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/configuration/db");

const { register } = require("./src/service/auth-services");

connectDB();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
