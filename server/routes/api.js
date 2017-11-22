const express = require('express')
const router  = express.Router()
const itemController = require('../controller/item')
const costumerController = require('../controller/costumers')
const transactionController = require('../controller/transactions')



// ====================== Books ===================== //
// get all data
router.get('/items', itemController.getAllItems)

// post data to db
 router.post('/items', itemController.create)
//
// find data with specific id
 router.get('/items/:id', itemController.findOne)
//
// find data with specific id and update
router.put('/items/:id', itemController.findByIdAndUpdate)

// find data with specific id and delete
router.delete('/items/:id', itemController.findByIdAndRemove)

//
//
// // ====================== Costumers  ===================== //
// // get all data
// router.get('/costumers', costumerController.getAllCostumers)
//
// // find data with specific id
// router.get('/costumers/:id', costumerController.findOne)
//
// // post data to db
 //router.post('/costumers', costumerController.create)
//
// // find data with specific id and update
// router.put('/costumers/:id', costumerController.findByIdAndUpdate)
//
// // find data with specific id and delete
// router.delete('/costumers/:id', costumerController.findByIdAndRemove)
//
//
// // ====================== Transaction  ===================== //
// get all data
router.get('/transactions', transactionController.getAllTransactions)

// find data with specific id
//router.get('/transactions/:id', transactionController.findOne)

// find data with specific id and update
//router.put('/transactions/:id', transactionController.update)

// find data with specific id and update
router.post('/transactions', transactionController.create)

// find data with specific id and delete
//router.delete('/transactions/:id', transactionController.findByIdAndRemove)









module.exports = router
