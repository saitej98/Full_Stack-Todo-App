const express = require("express");
const cors = require("cors");
const { connectDB } = require("./Database/db");
const { userRouter } = require("./Routes/user");
const { todoRouter } = require("./Routes/todo");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(todoRouter);
const PORT = process.env.PORT||9090;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
app.get("/", async (req, res) => {
    res.send("welcome to Authentication");
  });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port`);
  });
});
