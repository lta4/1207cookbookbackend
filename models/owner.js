const mongoose = require("../db/connection")
const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Author: [
        {
            ref: "Author",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Owner = mongoose.model("Owner", ownerSchema)

module.exports = Owner