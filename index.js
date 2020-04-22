//********************************
//    NODE MODULES
//********************************
//require needed modules
let express = require('express')
//add layouts
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