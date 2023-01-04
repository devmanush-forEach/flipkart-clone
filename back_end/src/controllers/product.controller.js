const productModel = require("../models/product.model");

const productController = {
  getProducts: async (req, res) => {
    try {
      const products = await productModel.find();
      return res.status(201).send(products);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  createProduct: async (req, res) => {
    try {
      const toCreate = req.body;
      const product = await productModel.create(toCreate);

      return res.status(201).send(product);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  createManyProducts: async (req, res) => {
    try {
      const toCreate = req.body;
      const product = await productModel.insertMany(toCreate);

      return res.status(201).send(product);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { _id, title, img_url, description, price, category } = req.body;

      const updated = await productModel.findByIdAndUpdate(_id, {
        title: title,
        img_url: img_url,
        description: description,
        price: price,
        category: category,
      });
      return res.status(201).send(updated);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      console.log(req.body);
      return res.status(201).send(req.body);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
};

module.exports = productController;
