const express = require("express")
const router = express.Router()
const mongoose = require("../db/connection")
const Author = require("../models/author")
const db = mongoose.connection

// SEED
router.get("/seed", async (req, res) => {
    await Author.deleteMany({})
    const seedData = await Author.insertMany(authors)
    res.json({
        status: 200,
        data: seedData,
    });
});

// Write the route to list all authors
// INDEX
router.get("/", (req, res) => {
    Author.find({}).then( allAuthors => {
        res.json({
            status: 200,
            author: allAuthors,
        });
    }).catch( err => res.json({
        status: 400,
        err: err,
    }));
});

// Write the route to get authors by firstname
// GET
// router.get("/:id", (req, res) => {
//     Author.findById(req.params.id)
//         .then((author) =>
//             res.json({
//                 status: 200,
//                 author: author,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Write the route to create an author
// POST
// router.post("/", (req, res) => {
//     const author= req.body;
//     Author.create(author)
//         .then((author) => {
//             res.json({
//                 status: 200,
//                 author: author,
//             })
//         }).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Write the route to update an author
// PUT
// router.put("/:id", (req, res) => {
//     Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then((author) =>
//             res.json({
//                 status: 200,
//                 author: author,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router