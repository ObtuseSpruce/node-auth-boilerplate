// Node/modules/Variables
let router = require('express').Router()

// Routers
router.get('/login', (req, res) => {
    res.render('auth/login')
})

// Post /auth/login - this is a place for the login form to post to
router.post('/login', (req, res) => {
    console.log('DATA', req.body)
    res.send('hello from the post route')
})

//goes to the signup page
router.get('/signup', (req, res) => {
    res.render('auth/signup', {data: {} })
})

//adds the signup form to the database
router.post('/signup', (req, res) => {
    console.log(req.body)
    if(req.body.password !== req.body.password_verify || req.body.password == false){

        res.render('auth/signup', {data: req.body})
    } else {
        res.send("all good to go captain! ")
    }

})

// Export
module.exports = router