const validateNewProduct = (req, res, next) => {
    const { productName, description } = req.body;
    if (!productName || !description) {
        return res.send({ error: "please fill up required fields"})
    }
    next();
}

export default validateNewProduct;