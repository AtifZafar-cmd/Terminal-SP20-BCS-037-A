const express = require("express");
const app = express();
app.use(express.json());
//creating todos//


//importing todos routes//
app.use(require('./todosRoutes/todos'))


app.get("/", (req, res) => {
  res.send("Welcome to my App");
});
app.listen(4000,console.log("Server running on port 4000"));
