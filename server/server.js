import express from "express";
import { PORT } from "./config.js";
import productsRouter from "./routes/products.routes.js";

const app = express();

// app.use(productsRouter)

app.listen(9000);

console.log(`escuchando dede el port ${9000}`);
