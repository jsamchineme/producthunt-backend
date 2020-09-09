
const validateNewProduct = (req, res, next) => {
    const { productName, description, price, numberInStock } = req.body;
    if (!productName || !description || !price || !numberInStock) {
        return res.send({ error: "please fill up required fields"})
    }
    next();
}

export default validateNewProduct;