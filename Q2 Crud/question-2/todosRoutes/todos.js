const express = require("express");
const router = express.Router();


const todos = [
    { content: "Todo1", status: false },
    { content: "Todo2", status: true },
  ];
  
  
  
  router.get("/api/todosList", (req, res) => {
    if (!todos) res.status(400).send("No todos found");
    res.send(todos);
  });
  
  router.get("/api/todosList/:index", (req, res) => {
    if (!todos[req.params.index])
      return res.status(400).send("todo does not exist");
    res.send(todos[req.params.index]);
  });
  
  router.put("/api/todosList/:index", (req, res) => {
    const todo = ({ content, status } = req.body);
    todos[req.params.index] = todo;
    todos[req.params.index] = res.send(todos[req.params.index]);
  });
  
  router.delete("/api/todosList/:index", (req, res) => {
    todos.splice(req.params.index, 1);
    res.send(todos);
  });
  
  router.post("/api/todosList/", (req, res) => {
    todos.push(req.body);
    res.send(todos);
  });
  
  module.exports=router