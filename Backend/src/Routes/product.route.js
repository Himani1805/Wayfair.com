const { readAllProduct, readSingleProduct, updateProduct, deleteProduct } = require('../Controller/product.controller');

const productRouter = require('express').Router();


productRouter.get('/', readAllProduct);
productRouter.get('/:id', readSingleProduct );
productRouter.patch('/:id', updateProduct );
productRouter.delete('/:id', deleteProduct );

module.exports = {productRouter};
