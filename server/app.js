
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import appRouter from "./routes";
import { PORT } from "./constants";

const app = express();

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/uploads', express.static('uploads'));

app.use(cors());

app.use(appRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
