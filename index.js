import express from "express";
import marcas from "./routes/marcas.js";

const app = express();

app.use(express.json());

app.use("/marcas", marcas);

app.listen(3001, () => console.log("Listening on http://localhost:3001"));
