import { Router } from "express";
import validateProductRequest from "../middlewares/validateNewProduct";

import { 
    createNewProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct,
    deleteProduct,
 } from "../controllers/products";

 
const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.post('/', validateProductRequest, createNewProduct);

productRouter.put('/:productId', updateProduct);

productRouter.delete('/:productId', deleteProduct);

productRouter.get('/:productId', getSingleProduct);

export default productRouter;