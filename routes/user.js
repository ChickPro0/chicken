const express = require('express');
const router = express.Router();
const conn = require('../config/database');

router.post('/write', (req, res)=>{

    const {title, post} = req.body
    const sql = `insert into posts values (?, ?, now())`

    conn.query(sql, [title, post], (err, rows) => {

        if (err == null) {
            console.log('success')
            res.json({msg: 'success'})
        }
        else {
            res.json({msg:'failed'})
        }
    })
})


router.post('/delete/:index')


module.exports = router;