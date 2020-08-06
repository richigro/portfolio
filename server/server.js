const express = require("express");
const app = express();

//Middleware
app.use(express.static("public"));


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`app started on port${PORT}`);
});