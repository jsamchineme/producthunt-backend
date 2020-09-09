import { Router } from "express";
import {
    createNewReview,
    deleteReview,
    getSingleProductReviews
} from "../controllers/reviews";
import validateNewReview from "../middlewares/validateNewReview";
import checkProductId from "../middlewares/checkProductId";

const reviewsRouter = Router()

reviewsRouter.post("/", validateNewReview, createNewReview);

reviewsRouter.delete("/:reviewId", deleteReview);

reviewsRouter.get("/", checkProductId, getSingleProductReviews);

export default reviewsRouter;