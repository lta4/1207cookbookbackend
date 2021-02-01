require("dotenv").config()
const express = require("express")
const logger = require("morgan")
const app = express()
const PORT = process.env.PORT || 4000

app.use(logger("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        status: 200,
        msg: "You have hit the default route...nothing to see here...keep going.",
    });
});

const cookbookRouter = require("./controllers/cookbookRoutes")
app.use("/api/cookbooks/", cookbookRouter)

const authorRouter = require("./controllers/authorRoutes")
app.use("/api/authors/", authorRouter)

app.listen(PORT, () => {
    console.log(`Listening in on port: ${PORT}`)
})
