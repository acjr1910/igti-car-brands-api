import express from "express";
import fs from "fs";
import { getTopBrands } from "./helpers.js";
import CONSTANTS from "../constants/index.js";

const router = express.Router();

router.get("/maisModelos", (req, res) => {
  fs.readFile("./db/car-list.json", CONSTANTS.ENCODINGS.UTF_8, (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    res
      .status(200)
      .send(
        getTopBrands(JSON.parse(data), CONSTANTS.TOP_BRANDS_BY_METHODS.MOST)
      );
  });
});

router.get("/menosModelos", (req, res) => {
  fs.readFile("./db/car-list.json", CONSTANTS.ENCODINGS.UTF_8, (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    res
      .status(200)
      .send(
        getTopBrands(JSON.parse(data), CONSTANTS.TOP_BRANDS_BY_METHODS.LEAST)
      );
  });
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
