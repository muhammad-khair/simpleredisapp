import express from "express";
import { index } from "./service.js";
import { indexCache } from './cache.js';

const router = new express.Router();

router.get("/", (req, res) => {
    console.log("/api route called");
    res.json();
});

router.route("/data")
    .get(indexCache, index);

export default router;
