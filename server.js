var express = require("express")
var app = express()

app.use(function (req, res, next) {
    console.log("Request received")
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    console.log("Headers:", req.headers)
    next()
})

/*
 * GET /
 */
app.get("/", function (req, res, next) { //The "/" acts as an "if" statement
    // res.status(200)
    // res.status(200).send("Hello world") //Express sends everything as HTML by default
    res.status(200).sendFile(__dirname + "/static/index.html")
})

app.get("/people", function (req, res, next) { //The "/people" acts as an "if" statement
    res.status(200).sendFile(__dirname + "/static/people.html")
})

app.get("/people/:person", function (req, res, next) {
    console.log("req.params:", req.params)
    var person = req.params.person
    res.status(200).sendFile(__dirname + "/static/people/" + person + ".html")
})

// Make the following LAST
app.get("*splat", function (req, res, next) {
    res.status(404).sendFile(__dirname + "/static/404.html")
})

// app.post()
// app.delete()
// app.put()
// app.patch()

app.listen(8000, function () {
    console.log("Server is active on port 8000")
})