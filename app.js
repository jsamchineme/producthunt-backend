
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import appRouter from "./routes"

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.use(appRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
