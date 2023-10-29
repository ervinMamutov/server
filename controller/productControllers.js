import Product from '../models/product.js';

const productControllers = {
  getProducts: (req, res) => {
    const products = Product.getProducts();
    res.status(200).json({ ok: true, products: products });
  },
  addProduct: (req, res) => {
    const { category, name, img, price } = req.body;
    if (!category && !name && !img && !price) {
      res
        .status(402)
        .json({ ok: false, message: 'Fill in all product fields' });
    } else {
      const newProduct = new Product(category, name, img, price);
      console.log(newProduct);
      newProduct.addProduct();
      console.log(newProduct);
      res
        .status(201)
        .json({ ok: true, message: `The product ${name} added successfully` });
    }
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    console.log(req);
    const { category, name, img, price } = req.body;
    const isUpdate = Product.updateProductInfo(id, {
      category,
      name,
      img,
      price
    });
    if (isUpdate) {
      res.status(201).json({
        ok: true,
        message: `Information about the ${name} in category ${category} has been successfully updated`
      });
    } else {
      res
        .status(400)
        .json({ ok: false, message: `Product not found, Try again.` });
    }
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;
    // const { category, name } = req.body;
    const isDelete = Product.deleteProductById(id);
    if (!isDelete) {
      res
        .status(400)
        .json({ ok: false, message: `Product not found. Try again.` });
    } else {
      res.status(200).json({
        ok: true,
        message: `The product has been deleted successfully`
      });
    }
  }
};

export default productControllers;
