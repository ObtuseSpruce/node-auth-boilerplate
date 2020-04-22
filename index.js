//********************************
//    NODE MODULES
//********************************
//require needed modules
let express = require('express')
//add layouts
let flash = require('connect-flash')
let session = require('express-session')
let layouts = require('express-ejs-layouts')
//create an app instance
let app = express()


//********************************
//    SETTINGS / MIDDLEWARE
//********************************

//set template lang to ejs
app.set('view engine', 'ejs')

//tell express to use layouts
app.use(layouts)

// set up a static folder
app.use(express.static('static'))

//decrypt POST route data (from forms etc)
app.use(express.urlencoded({ extended: false }))

//Setting up session for use in flash
app.use(session({
    secret: 'anything here maybe random',
    resave: false,
    saveUninitialized: true,
}))

//set up connect-flash for the flash alert messages (depends on session, order matters here!!!)
app.use(flash())

//custom middleware for flash to exist on every page
app.use((req, res, next) => {
    res.locals.alerts = req.flash()
    next()
})

//********************************
//           ROUTES
//********************************
//controllers
app.use('/auth', require('./controllers/auth'))

//home page
app.get('/', (req, res) => {
    res.render('home')
})

//create a wildcard (catch-all) route
//this will catch everything. Think like a 404 error page.
//this NEEDS to be last
app.get('*', (req, res) => {
    res.render('error')
})


//********************************
//    listener
//********************************
//pick a port to listen on
app.listen(3000)