import express from "express";
import { index } from "./service.js";
import { loadIndexCache } from './cache.js';

const router = new express.Router();

router.get("/", (req, res) => {
    console.log("/api route called");
    res.json();
});

router.route("/data")
    .get(loadIndexCache, index);

export default router;
