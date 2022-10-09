const asyncHandler = require('express-async-handler')
const Trick = require('../models/tricksModel')


// @desc    Get Tricks
// @route   GET /api/tricks
// @access  public 
const getTricks = asyncHandler(async (req, res) => {
    const tricks = await Trick.find()

    res.status(200).json({ tricks })
})

// @desc    Set Tricks
// @route   POST /api/tricks
// @access  public 
const setTrick = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const trick = await Trick.create({
        name: req.body.name
    })

    res.status(200).json({ trick })
})

// @desc    Update Tricks
// @route   PUT /api/tricks/:id
// @access  public 
const updateTrick = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update trick: ${req.params.id}` })
})

// @desc    Delete Trick
// @route   DELETE /api/tricks/:id
// @access  public 
const deleteTrick = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete trick: ${req.params.id}` })
})

module.exports = {
    getTricks, setTrick, updateTrick, deleteTrick,
}
