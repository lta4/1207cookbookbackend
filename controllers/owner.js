const express = require("express")
const router = express.Router()
const mongoose = require("../db/connection")
const Owner = require("../models/owner")
const Author = require("../models/author")

// INDEX
router.get("/", async (req, res) => {
    const data = await Owner.find({}).populate("author")
    res.json({
        status: 200,
        data: data,
    });
});

router.post("/", async (req, res) => {
    const owner = await Owner.create({
        name: req.body.ownerName
    })
    res.json({
        status: 200,
        data: owner,
    });
});

router.put("/:ownerId/addAuthor/:authorId", async (req, res) => {
    const author = await Author.findById(req.params.authorId)
    const owner = await Owner.findByuIdAndUpdate(
        req.params.ownerId,
        { $push: {author: author.id}, new: true}
    )
    res.json({
        status: 200,
        data: owner,
    })
})

module.exports = router