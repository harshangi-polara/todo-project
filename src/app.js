const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error-middleware");
app.use(express.json());

app.use("/api/auth", require("./route/auth-routes"));
app.use("/api/todos", require("./route/todos-routes"));
app.use(errorMiddleware);
module.exports = app;
