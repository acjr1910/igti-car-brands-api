import express from "express";
import fs from "fs";
import { getBrandWithMostModels } from "./helpers.js";

const router = express.Router();

router.get("/maisModelos", async (req, res) => {
  fs.readFile("./db/car-list.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    res.status(200).send(getBrandWithMostModels(JSON.parse(data)));
  });
});

router.get("/menosModelos", (req, res) => {
  res.send("GET /menosModelos");
});

router.get("/listaMaisModelos/:qty", (req, res) => {
  res.send("GET /listaMaisModelos/:qty");
});

router.get("/listaMenosModelos:qty", (req, res) => {
  res.send("GET /listaMenosModelos:qty");
});

router.post("/listaModelos", (req, res) => {
  res.send("POST /listaModelos");
});

export default router;
