const express = require("express");
const bodyParser = require("body-parser");
const notesRouter = require("./routes/notesRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/api", notesRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
