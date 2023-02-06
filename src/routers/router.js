const router = require('express')()
const {  addCustomer, fetchCustomer, fetchOneCustomer, updateCustomer, deleteCustomer } = require('../controllers/customerControllers')
const { createOrder } = require('../controllers/orderControllers')


// customers

router.post('/customers', addCustomer)
router.get('/customers', fetchCustomer)
router.get('/customers/:id',fetchOneCustomer)
router.put('/customers/:id', updateCustomer)
router.delete('/customers/:id', deleteCustomer)
// order
router.post('/orders', createOrder)

module.exports = router



// //create table and insert value's
// // router.post('/customers', custoTable)
// // router.post('/customersData', castoData)
