const express = require("express");
const Router = express.Router();
Router.get("/",(req,res)=>{
    res.render("event");
});
Router.get("/signup",(req,res)=>{
    res.render("signup");
});
Router.get("/login",(req,res)=>{
    res.render("login");
});
Router.get("/profile",(req,res)=>{
    res.render("profile");
});
Router.get("/book",(req,res)=>{
    res.render("book");
});
Router.get("/CreateEvent",(req,res)=>{
    res.render("CreateEvent");
});
// Router.get("/ShowEvent",(req,res)=>{
//     res.render("ShowEvent");
// });
Router.get("/community",(req,res)=>{
    res.render("community");
});
Router.get("/birthday",(req,res)=>{
    res.render("birthday");
});
Router.get("/concert",(req,res)=>{
    res.render("concert");
});
Router.get("/sports",(req,res)=>{
    res.render("sports");
});
Router.get("/meetup",(req,res)=>{
    res.render("meetup");
});
Router.get("/ticket",(req,res)=>{
    res.render("ticket");
});
Router.get("/track",(req,res)=>{
    res.render("track");
});
Router.get("/book",(req,res)=>{
    res.render("book");
});
Router.get("/final",(req,res)=>{
    res.render("final");
});

const { CreateEvent } = require('../models/createEvent'); // Import the model

Router.get('/ShowEvent', async (req, res) => {
    try {
        // Fetch all events from the CreateEvent collection
        const events = await CreateEvent.find();
        console.log(events);
        res.render('ShowEvent', { events: events });
    } catch (error) {
        console.log(error);
        return res.status(500).render('error', {
            msg: 'An error occurred, please try again later.'
        });
    }
});

module.exports= Router;
