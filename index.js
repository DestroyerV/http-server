const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log({
    message: "Hello User !",
    IP: req.ip,
    software: req.headers["user-agent"],
  });
  res.json({
    message: "User Connected",
    IP: req.ip,
    software: req.headers["user-agent"],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
