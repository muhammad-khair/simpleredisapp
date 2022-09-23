import Person from './model.js';
import redis from 'redis';

require('dotenv').config();

const client = redis.createClient(process.env.REDIS_PORT || 6379);

export function index(req, res) {
    console.log("Loading data");
    Person.get((err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Unable to load data"
            });
        }
        client.setEx("dataCache", 3600, JSON.stringify(property));
        return res.json({
            size: data.length,
            data: data,
        });
    });
};
