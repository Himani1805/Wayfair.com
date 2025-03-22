const { addOrder, readAllOrder, readSingleOrder, updateOrder, deleteOrder } = require('../Controller/order.controller');

const orderRouter = require('express').Router();

orderRouter.post('/', addOrder)
orderRouter.get('/', readAllOrder);
orderRouter.get('/:id', readSingleOrder );
orderRouter.patch('/:id', updateOrder );
orderRouter.delete('/:id', deleteOrder );

module.exports = {orderRouter};
