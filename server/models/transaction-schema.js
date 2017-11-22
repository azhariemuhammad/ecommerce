const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = mongoose.Schema  ({

  itemList  : [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }],
  total : Number,
  createdAt : {
    type : Date,
    default : Date.now
  }
})



const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
