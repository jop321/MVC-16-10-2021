const express = require('express');
const router = express.Router();
const nonholiday = require('../model/day_openhouse')
const holiday = require('../model/day_openhouseholiday')

router.get('/home', (req, res) => {
    // console.log('home');
    res.render('index',{title : "open house president",});
});

router.post('/home/1',(req,res) => {
        res.render('day',{title :"open house president",day: nonholiday});
});

router.post('/home/2',(req,res) => {
    res.render('day',{title :"open house president",day: holiday});
});

module.exports = router;