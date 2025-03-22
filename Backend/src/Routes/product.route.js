const { readAllProduct, readSingleProduct, updateProduct, deleteProduct, addProduct } = require('../Controller/product.controller');

const productRouter = require('express').Router();

productRouter.post('/', addProduct)
productRouter.get('/', readAllProduct);
productRouter.get('/:id', readSingleProduct );
productRouter.patch('/:id', updateProduct );
productRouter.delete('/:id', deleteProduct );

module.exports = {productRouter};
