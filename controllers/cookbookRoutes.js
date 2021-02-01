const express = require("express")
const router = express.Router()
const mongoose = require("../db/connection")
const Cookbook = require("../models/cookbook")
const db = mongoose.connection

// Require the Cookbook controller.
// SEED
router.get("./seed", async (req, res) => {
    await Cookbook.deleteMany({})
    const seedData = await Cookbook.insertMany(cookbook)
    res.json({
        status: 200,
        data: seedData,
    });
});

// Write the route to list all cookbooks
// INDEX
router.get("/", (req, res) => {
    Cookbook.find({}).then( allCookbooks => {
        res.json({
            status: 200,
            author: allCookbooks,
        });
    }).catch( err => res.json({
        status: 400,
        err: err,
    }));
});

// Write the route to get cookbook by title
// GET
// router.get("/:id", (req, res) => {
//     Cookbook.findById(req.params.id)
//         .then((cookbook) => 
//             res.json({
//                 status: 200,
//                 cookbook: cookbook,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Write the route to get cookbook by year published
// GET
// router.get("./:id", (req, res) => {
//     Cookbook.findId(req.params.id)
//         .then((cookbook) => 
//             res.json({
//                 status: 200,
//                 cookbook: cookbook,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Write the route to create a cookbook
// POST
// router.post("/", (req, res) => {
//     const cookbook= req.body;
//     Cookbook.create(cookbook)
//         .then((cookbook) => {
//             res.json({
//                 status: 200,
//                 cookbook: cookbook,
//             })
//         }).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Write the route to update a cookbook
// PUT
// router.put("/:id", (req, res) => {
//     Cookbook.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then((cookbook) =>
//             res.json({
//                 status: 200,
//                 data: cookbook,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// Write the route to delete the cookbook by title
// DELETE
// router.delete("/:id", (req, res) => {
//     Cookbook.findByIdAndDelete(req.params.id)
//         .then((cookbook) =>
//             res.json({
//                 status: 200,
//                 msg: "item deleted",
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

module.exports = router;