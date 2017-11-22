const Item = require('../models/items-schema')

let message = ''

const getAllItems = (req, res) => {
  Item.find().then(items => {
    res.status(200).send(items)
  })
  .catch(err => {
    res.status(500).send(rr);
  })
}


const create = (req, res) => {
  Item.create(
    {
      item  : req.body.item,
      price : req.body.price,
      stock : req.body.stock,
      img   : req.body.img
    }
  ).then(item => {
    message = 'succes create one data'
    res.status(200).send({item:item, msg:message})
  })
  .catch(err => {
    res.status(500).send({err:err})
  })
}

const findOne = (req, res) => {
  Item.find({_id : req.params.id}).then(item => {
    res.status(200).send(item)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}



const findByIdAndUpdate = (req, res) => {
  console.log(req.params.id);
  Item.findByIdAndUpdate({_id : req.params.id}, {
    item  : req.body.item,
    price : req.body.price,
    stock : req.body.stock,
    img   : req.body.img
  })
  .then(item => {
    message = 'succes adding one data'
    res.status(200).send({item:item,msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err)
  })
}

const findByIdAndRemove = (req, res) => {
  console.log('masuk sini remove');
  Item.findByIdAndRemove({_id : req.params.id})
  .then(item => {
    message = 'succes removing one data'
    console.log(item);
    res.status(200).send({item:item, msg:message})
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err)
  })
}

module.exports = {
  getAllItems,
   create,
   findOne,
   findByIdAndUpdate,
   findByIdAndRemove
};
