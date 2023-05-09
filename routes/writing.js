const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("pages/writing")
})

router.get('/:blogPost', (req, res) => {
    res.render("writing/" + req.params.blogPost)
})

module.exports = router