import express from 'express';

import Item from '../model/item';

const router = express.Router();

//shop/
router.get('/', (req, res) => {
  Item.find({}, (err, items) => {
    if(err) {res.send(err)}
    res.send(items)
  });
});

//shop/add
router.post('/add', (req, res) => {
  const newItem = new Item(req.body);

  newItem.save((err) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000/')
  });
});

//shop/:id/update
router.post('/:id/update', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, err => {
    if(err) {res.send(err)}
    res.json({
      "message" : "item has been successfully updated"
    });
  });
});

//:id/delete
router.get('/:id/delete', (req, res) => {
  Item.findByIdAndRemove(req.params.id,(err, item) => {
    if(err) {res.send(err)}
    res.redirect('http://localhost:3000/')
  });
});

export default router;
