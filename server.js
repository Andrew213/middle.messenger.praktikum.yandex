import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
const app = express();
const PORT = 3000;

app.use(express.static("./dist"));

app.get("*", (req, res) => {
  res.sendFile("./dist/index.html", {
    root: dirname(fileURLToPath(import.meta.url)),
  });
});

app.listen(PORT, () => {
  console.log(`Supper on ${PORT}`);
});
