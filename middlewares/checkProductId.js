
const checkProductId = (req, res, next) => {
    const { content } = req.body;
    if (!req.query.productId) {
        return res.send({ error: "no product Id"})
    }
    next();
}

export default checkProductId;