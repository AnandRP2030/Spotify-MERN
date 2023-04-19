const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors')
const DATA = [{email: "test@gmail.com", password: "1234"}]
const jwt = require('jsonwebtoken')
const session = require('express-session');
const JwtStrategy = require('passport-jwt').Strategy,ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: false
}))
let opts = {};
opts.jwtFromRequest = function(req) {
    let token = null;
    if (req && req.cookes){
        token = req.cookies['jwt'];
    }
    return token;
}

opts.secretOrKey = 'secret';
passport.use(new JwtStrategy (opts, function (jwt_payload, done){
    console.log('JWT BASED VALIDATION GETTING CALLED');
    console.log('JWT', jwt_payload);
    if (CheckUser(jwt_payload.data)) {
        return done(null, jwt_payload.data)
    } else {
        // user account doesnt exists in the DATA
        return done(null, false);
    }
}))

passport.use(new GoogleStrategy({
    clientID: "107709429312-uaok37b422911de1ppi4kke2qt5bg8ol.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/googleRedirect"
  },
  function(accessToken, refreshToken, profile, cb) {
      //console.log(accessToken, refreshToken, profile)
      console.log("GOOGLE BASED OAUTH VALIDATION GETTING CALLED")
      return cb(null, profile)
  }
));


passport.serializeUser(function(user, cb) {
    console.log('I should have jack ')
    cb(null, user);
});
  
  passport.deserializeUser(function(obj, cb) {
    console.log('I wont have jack shit')
    cb(null, obj);
});


app.get('/auth/google',  passport.authenticate('google', { scope: ['profile','email'] }))

app.get('/googleRedirect', passport.authenticate('google'),(req, res)=>{
    console.log('redirected', req.user)
    let user = {
        displayName: req.user.displayName,
        name: req.user.name.givenName,
        email: req.user._json.email,
        provider: req.user.provider }
    console.log(user)

    FindOrCreate(user)
    let token = jwt.sign({
        data: user
        }, 'secret', { expiresIn: '100h' });
    res.cookie('jwt', token)
    res.redirect('http://localhost:5173')
})

// app.get('/', (req, res) => {
//     res.send('working')
// })

app.get('/', passport.authenticate('jwt', { session: false }) ,(req,res)=>{
    res.send(`THIS IS UR PROFILE MAAANNNN ${req.user}`)
})




function FindOrCreate(user){
    if(CheckUser(user)){  // if user exists then return user
        return user
    }else{
        DATA.push(user) // else create a new user
    }
}
function CheckUser(input){
    console.log(DATA)
    console.log(input)
  
    for (var i in DATA) {
        if(input.email==DATA[i].email && (input.password==DATA[i].password || DATA[i].provider==input.provider))
        {
            console.log('User found in DATA')
            return true
        }
        else
         null
            //console.log('no match')
      }
    return false
}

const port =  3000
app.listen( port, ()=>{
    console.log(`Sever ARG0 listening on port ${port}`)
})