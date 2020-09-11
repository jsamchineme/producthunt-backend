import { Router } from "express";
import productsRouter from "./products";
import reviewsRouter from "./reviews";

const appRouter = Router()

appRouter.use("/products", productsRouter);
appRouter.use("/reviews", reviewsRouter);

export default appRouter;
