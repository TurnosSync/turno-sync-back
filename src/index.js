const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
  console.log("I'm now at TURNO-SYNC-BACK/src/index.js")
});
