const express = require('express');
const router = express.Router();
const {
    getTricks,
    setTrick,
    updateTrick,
    deleteTrick
} = require('../controllers/trickController')

// router.get('/', (req, res) => {
//   res.status(200).json({messgae: 'Get Test'})
// })

router.route('/').get(getTricks).post(setTrick)
// router.get('/', getTricks)
// router.post('/', setTrick)

router.route('/:id').delete(deleteTrick).put(updateTrick)
// router.put('/:id', updateTrick)
// router.delete('/:id', deleteTrick)

module.exports = router