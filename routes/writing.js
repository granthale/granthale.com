const express = require('express')
const router = express.Router()

router.get('/essays', (req, res) => {
    res.render("pages/writingEssays")
})

router.get('/explanations', (req, res) => {
    res.render("pages/writingExplanations")
})

router.get('/ilike', (req, res) => {
    res.render("pages/writingILike")
})

router.get('/explanations/:blogPost', (req, res) => {
    res.render("writing/" + req.params.blogPost)
})

router.get('/essays/:blogPost', (req, res) => {
    res.render("writing/" + req.params.blogPost)
})

module.exports = router