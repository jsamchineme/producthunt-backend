
const validateNewReview = (req, res, next) => {
    const { content } = req.body;
    if (!req.query.productId) {
        return res.send({ error: "no product Id"})
    }
    if (!content) {
        return res.send({ error: "please provide content"})
    }
    next();
}

export default validateNewReview;