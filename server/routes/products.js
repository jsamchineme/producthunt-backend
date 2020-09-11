import { Router } from "express";
import validateProductRequest from "../middlewares/validateNewProduct";

import { 
    createNewProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct,
    deleteProduct,
 } from "../controllers/products";
import ImageUpload from "../middlewares/imageUpload";
import { upload } from "../storage";

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.post('/',
    upload.single("image"),
    validateProductRequest,
    ImageUpload,
    createNewProduct
);

productRouter.put('/:productId', updateProduct);

productRouter.delete('/:productId', deleteProduct);

productRouter.get('/:productId', getSingleProduct);

export default productRouter;