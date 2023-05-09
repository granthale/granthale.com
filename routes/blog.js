const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("pages/blog")
})

router.get('/:blogPost', (req, res) => {
    res.render("blog/" + req.params.blogPost)
})

module.exports = router