const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const cookbookSchema = new Schema (
    {
        title: { type: String, required: true },
        yearPublished: { type: Number, required: true },
    }
)

const Cookbook = mongoose.model("Cookbook", cookbookSchema)

module.exports = Cookbook

/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
//export model
