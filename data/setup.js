import Person from '../src/model.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Loading mock data');
let rawdata = fs.readFileSync(`${__dirname}/mock.json`);
let personDataArray = JSON.parse(rawdata);

console.log(`Saving ${personDataArray.length} people into database`);
for (var personIdx in personDataArray) {
    await new Person(personDataArray[personIdx])
        .save()
        .catch((err) => {
            console.log(err.message);
        });
};

console.log('Closing setup');
process.exit(0);
