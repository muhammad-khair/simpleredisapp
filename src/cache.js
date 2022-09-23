import redis from 'redis';
import dotenv from "dotenv";
dotenv.config();

const client = redis.createClient(process.env.REDIS_PORT || 6379);

export function indexCache(req, res, next) {
    client.get("dataCache", (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({
                error: "Unable to load data"
            });
        }
        if (data !== null) {
            data = JSON.parse(data);
            res.json({
                size: data.length,
                data: data,
            });
        }
        next();
    });
};
