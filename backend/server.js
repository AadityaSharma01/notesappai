import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, '.env') });

import express from 'express'
import connectdb from './config/config.js';
import noteroute from './routes/notes.route.js';

import airoute from './routes/ai.route.js';


const app = express();
const PORT = process.env.PORT || 4004;

app.use(cors({
    origin: "https://notesappai.vercel.app",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
}));

app.use(express.json());
app.use("/api/notes", noteroute);
app.use("/api/ai", airoute)

app.listen(PORT, () => {
    connectdb();
    console.log(PORT);
    console.log('server is running on port http://localhost:' + PORT)
});
