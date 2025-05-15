const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// npm install
// dockrer build - t myapp: 1.0 .
// docker run -p 3000:3000 myapp:1.0

// sudo apt install openssh-server
// su -
// apt install openssh-server
// apt install net-tools
// ifconfig
// ls