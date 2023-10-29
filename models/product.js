import { v4 as newId } from 'uuid';

import products from '../data/products.js';

class Product {
  constructor(category, name, img, price) {
    this.id = newId();
    this.category = category;
    this.name = name;
    this.img = img;
    this.price = price;
  }

  static getProducts = () => {
    return products;
  };

  static getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  addProduct() {
    return products.push(this);
  }

  static getProductsById = (id) => {
    return products.find((product) => product.id === id);
  };

  static updateProductInfo = (id, updateInfo) => {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
      return false;
    } else {
      products[index] = { id, ...updateInfo };
      return true;
    }
  };

  static deleteProductById = (id) => {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
      return false;
    } else {
      products.splice(index, 1);
      return true;
    }
  };
}

export default Product;
