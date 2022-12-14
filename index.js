import express from 'express';
import cors from 'cors';
import router from './src/routes.js';
import dotenv from "dotenv";
import { createServer } from 'http';
dotenv.config();

const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('Hello World from simpleredisapp');
});
app.use("/api", router);

const port = process.env.PORT || 8080;
const httpServer = createServer(app);
httpServer.listen(port);
console.log(`App simpleredisapp listening on port ${port}`);
