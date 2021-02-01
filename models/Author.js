const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const authorSchema = new Schema (
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        cookbooks: { type: mongoose.Types.ObjectId, ref: "Cookbook" }
    }
)

const Author = mongoose.model("Author", authorSchema);

module.exports = Author

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/
// export model named "Author"




