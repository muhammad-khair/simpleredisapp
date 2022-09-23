import Person from './model.js';
import dotenv from "dotenv";
import { saveIndexCache } from './cache.js';
dotenv.config();

export function index(req, res) {
    console.log("Loading data");
    Person.find({}, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Unable to load data"
            });
        }
        try {
            saveIndexCache(data);
        } catch (redisError) {
            console.error(redisError);
            return res.status(500).json({
                error: "Unable to load data"
            });
        }
        return res.json({
            size: data.length,
            data: data,
        });
    });
};
