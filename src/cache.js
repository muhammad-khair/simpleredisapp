import redis from 'ioredis';
import dotenv from "dotenv";
dotenv.config();

const client = redis.createClient({
    host: 'localhost',
    port: process.env.REDIS_PORT || 6379
});
client.on('connect',() => {
    console.log('Redis connected successfully');
});
client.on('error', (err) => console.log(err));

const dataCacheTag = "dataCache";
const cacheTimeSeconds = 10;

export async function saveIndexCache(data) {
    console.log('Saving index to cache');
    await client.setex(dataCacheTag, cacheTimeSeconds, JSON.stringify(data));
};

export function loadIndexCache(req, res, next) {
    console.log('Checking cache for index');
    client.get(dataCacheTag, (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({
                error: "Unable to load data"
            });
        }
        if (data !== null) {
            console.log('Cache hit for index');
            data = JSON.parse(data);
            res.json({
                size: data.length,
                data: data,
            });
            return;
        }
        console.log('Cache miss for index');
        next();
    });
};
