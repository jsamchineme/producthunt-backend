import { v4 as uuid } from "uuid";

export let allProducts = [
    {
        "id": uuid(),
        "productName": "dummy name",
        "description": "dummy description",
        "bannerImage": "http://localhost:3000/uploads/image1.jpg",
    }
]

export const createNewProduct = (req, res) => {
    const host =  req.get('host');
    const newProduct = {
        id: uuid(),
        productName: req.body.productName,
        description: req.body.description,
        bannerImage: `${req.protocol}://${host}/uploads/${req.file.filename}`,
    }

    allProducts.push(newProduct)
    res.send({ data: newProduct })
}

const getUpdatedListWithItem = (updatedItem, updatingList) => {
    const updatedList = updatingList.map((item) => {
        if (item.id === updatedItem.id) {
            return updatedItem;
        }
        return item;
    });
    return updatedList;
}

export const updateProduct = (req, res) => {
    const productId = req.params.productId;
    const foundProduct = allProducts.find(item => item.id === productId);

    const updatedProduct = {
        ...foundProduct,
        productName: req.body.productName || foundProduct.productName,
        description: req.body.description || foundProduct.description,
    }

    allProducts = getUpdatedListWithItem(updatedProduct, allProducts);

    res.status(200).send({ data: updatedProduct });
}

export const deleteProduct = (req, res) => {
    const productId = req.params.productId;
    const updatedProductList = allProducts.filter((item) => item.id !== productId);
    allProducts = updatedProductList;

    res.status(204).json({ message: "product deleted" });
}

export const changeProductVisibility = (req, res) => {
    const productId = req.params.productId;
    const foundProduct = allProducts.find(item => item.id === productId);

    const updatedProduct = {
        ...foundProduct,
    }

    allProducts = getUpdatedListWithItem(updatedProduct, allProducts);

    res.status(200).send({ data: updatedProduct });
}

export const getSingleProduct = (req, res) => {
    const foundProduct = allProducts.find(item => item.id === req.params.productId);
    res.status(200).send({ data: foundProduct });
}

export const getAllProducts = (req, res) => {
    res.status(200).send(allProducts)
}