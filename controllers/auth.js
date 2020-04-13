// Node/modules/Variables
let router = require('express').Router()

// Routers
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

// Export
module.exports = router