import express from "express";
import brands from "./routes/brands.js";

const app = express();

app.use(express.json());

app.use("/marcas", brands);

app.listen(3001, () => console.log("Listening on http://localhost:3001"));
