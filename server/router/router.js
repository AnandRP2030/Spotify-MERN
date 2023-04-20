const {SpotifyModel, SpotifyLogged} = require("../model");
const express = require("express");
const userRouter = express.Router();
const connectDatabase = require("../connectDb");

// connectDatabase().then(() => {
//   const sam = async () => {
//     const data = await SpotifyModel.find();
//     // const x = await data.json()
//     console.log(data);
//   };

//   sam();

// });

userRouter.get("/getuser", async (req, res) => {
    try {
      const data = await SpotifyLogged.find({});
      console.log(data);
      res.send(data);
    } catch (err) {
      console.log("err on router", err);
      res.status(500).send("soething wrong");
    }
  });



  userRouter.delete('/deleteuser', async (req, res) => {
    try{
        await SpotifyLogged.deleteMany({});
        console.log('delete successfully');
        res.send('user deleted')
    }catch(err) {
        console.log('delete api err', err);
        res.status(500).send('Something wrong on delete api')
    }
  })
  

  userRouter.get("/getexistuser", async (req, res) => {
    try {
      const data = await SpotifyModel.find({});
      console.log(data);
      res.send(data);
    } catch (err) {
      console.log("err on router", err);
      res.status(500).send("soething wrong");
    }
  });

  userRouter.get('/check', (req, res) => {
    res.send('checking')
  })



  module.exports = userRouter;