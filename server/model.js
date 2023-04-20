const mongoose = require('mongoose');
const {Schema} = mongoose;

const spotifyUserSchema = new Schema({
    name: String,
    email: String,
    picture: String
})
const loggedUserSchema = new Schema({
    name: String,
    email: String,
    picture: String
})

const SpotifyLogged = mongoose.model ('SpotifyLogged', loggedUserSchema);
const SpotifyModel = mongoose.model('SpotifyUserModel', spotifyUserSchema);
module.exports = {SpotifyLogged, SpotifyModel};