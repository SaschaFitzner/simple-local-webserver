const express = require("express");
const { exec } = require("child_process");

const app = express();

// Serve static files from the "public" directory
app.use(express.static("public"));

app.listen(4400, () => {
  console.log("Server running on http://localhost:4400");
  exec('start "" /b http://localhost:4400');
});
