const express = require('express')
const router  = express.Router()
const itemController = require('../controller/item')
const userController = require('../controller/users')
const transactionController = require('../controller/transactions')
const verify = require('../middleware/verify')
const registerController = require('../controller/register')
const images = require('../helpers/images')
const upload = images.multer.single('image');

/// ================= register ====================////
router.post('/signin', registerController.signin)

router.post('/signup', registerController.signup)



// ====================== Books ===================== //
// get all data
router.get('/items', itemController.getAllItems)

// post data to db
router.post('/items', (req, res, next) => {
  upload(req, res, function(err) {
    if (err) {
      return res.status(400).json({
        error: 'err'
      })
    }
    next()
  })
}, images.sendUploadToGCS,(req, res, next) => {
  itemController.create(req, res, next)
})
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
// ====================== Costumers  ===================== //
// get all data
router.get('/users', userController.getAllUsers)
//
// find data with specific id
router.get('/users/:id', userController.findOne)

// post data to db
 router.post('/users', userController.create)
//
// // find data with specific id and update
// router.put('/costumers/:id', costumerController.findByIdAndUpdate)
//
// find data with specific id and delete
router.delete('/users/:id', userController.findByIdAndRemove)


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
