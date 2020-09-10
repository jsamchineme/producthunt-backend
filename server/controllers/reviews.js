let allReviews = [];

export const createNewReview = (req, res) => {
    const productId = req.query.productId;
    const lastElement = allReviews[allReviews.length - 1];
    const newReview = {
        id: lastElement ? lastElement.id + 1 : 1,
        productId,
        content: req.body.content,
        dateCreated: new Date(),
        dateUpdated: new Date(),
    }

    allReviews.push(newReview);
    
    res.status(201).send({ data: newReview });
}

export const deleteReview = (req, res) => {
    const reviewId = req.params.reviewId;
    const updatedReviewList = allReviews.filter((item) => item.id !== reviewId);
    allReviews = updatedReviewList;

    res.status(204).json({ message: "item deleted" });
}

export const getSingleProductReviews = (req, res) => {
    const productId = req.query.productId;
    const productReviews = allReviews.filter(item => item.productId === productId);

    res.status(200).send({ data: productReviews });
}