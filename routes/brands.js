import express from "express";
import fs from "fs";
import CONSTANTS from "../constants/index.js";
import brandsParser from "../parsers/brands.js";

const router = express.Router();

router.get("/maisModelos", (req, res) => {
  fs.readFile("./db/car-list.json", CONSTANTS.ENCODINGS.UTF_8, (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    res
      .status(200)
      .send(brandsParser(JSON.parse(data)).getBrandsWith("mostModels"));
  });
});

router.get("/menosModelos", (req, res) => {
  fs.readFile("./db/car-list.json", CONSTANTS.ENCODINGS.UTF_8, (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    res
      .status(200)
      .send(brandsParser(JSON.parse(data)).getBrandsWith("leastModels"));
  });
});

router.get("/listaMaisModelos/:qty", (req, res) => {
  fs.readFile("./db/car-list.json", CONSTANTS.ENCODINGS.UTF_8, (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    const { qty: N = 0 } = req.params;
    res
      .status(200)
      .send(brandsParser(JSON.parse(data)).getNBrandsWithMostModels(N, "mostModels"));
  });
});

router.get("/listaMenosModelos/:qty", (req, res) => {
  fs.readFile("./db/car-list.json", CONSTANTS.ENCODINGS.UTF_8, (err, data) => {
    if (err) {
      res.send({ error: `Something went wrong` });
    }
    const { qty: N = 0 } = req.params;
    res
      .status(200)
      .send(brandsParser(JSON.parse(data)).getNBrandsWithMostModels(N, "leastModels"));
  });
});

router.post("/listaModelos", (req, res) => {
  res.send("POST /listaModelos");
});

export default router;
