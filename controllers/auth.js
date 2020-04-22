// Node/modules/Variables
let router = require('express').Router()
let db = require('../models')

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
        req.flash('error', 'Passwords do not match')
        res.render('auth/signup', {data: req.body, alerts: req.flash() })
    } else {
        //passwords match, now find/create by the user's email
        db.user.findOrCreate({
            where: { email: req.body.email },
            defaults: req.body
        })
        .then(([user, wasCreated]) => {
            if( wasCreated) {
                //new user
                // TODO Auto-Login
                res.send('it worked!')
            } else {
                // user already found, redirect to login page
                req.flash('error', 'account already exists')
                res.redirect('/auth/login')
            }
        })
        .catch(err => {
            console.log('error captain error', err)
            if (err.errors) {
                err.errors.forEach(e => {
                    if (e.type == 'Validation error')
                        req.flash('error', e.message)
                })
            }
            else {
                req.flash('error', 'server error')
            }

            res.redirect('/auth/signup')
        })
    }

})

// Export
module.exports = router