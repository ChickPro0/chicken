const express = require('express');
const router = express.Router();
const conn = require('../config/database');


// 게시물 작성
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

// 게시물 삭제 - 미연동
router.post('/delete', (req, res)=> {

    const {id, title} = req.body
    const sql = `delete from posts where id = ? and title = ?`

    conn.query(sql, [id, title], (err, rows) => {

        if (err == null) {
            console.log('success')
            res.json({msg: 'success'})
        }

        else {
            res.json({msg: 'failed'})
        }
    })
})

// 게시물 변경 - 미연동
router.post('/update', (req, res)=> {

    const {id, title, post} = req.body
    const sql = `update posts set title = ?, post = ? where id = ? title = ?`

    conn.query(sql, [title, post, id, title], (err, rows) => {

        if (err == null) {
            console.log('success')
            res.json({msg: 'success'})
        }

        else {
            res.json({msg: 'failed'})
        }
    })
})

// 게시물 전체 읽어오기
router.post('/read', (req, res) => {

    const sql = `select * from posts`

    conn.query(sql, (err, rows) => {

        if (err == null) {
            console.log('success')
            res.json({msg: 'success', data: rows})
        }

        else {
            res.json({msg: 'failed'})
        }
    })
})

// 회원가입 - 미연동
router.post('/join', (req, res) => {

    const {id, pw, nick, email} = req.body
    const sql = `insert into post_user values (?, ?, ?, ?)`

    conn.query(sql, [id, pw, nick, email], (err, rows) => {

        if (err == null) {
            console.log('success')
            res.json({msg: 'success'})
        }

        else {
            res.json({msg : 'failed'})
        }
    })
})

// // 로그인 - 미연동
// router.post('/login', (req, res) => {
    
//     const {id, pw} = req.body
//     const sql = `select * from post_user where id = ? and pw = ?`

//     conn.query(sql, [id, pw], (err, rows) => {

//         if (err == null) {
//             console.log('success')
//             res.json({msg: 'success', data: rows[0]})
//         }

//         else {
//             res.json({msg : 'failed'})
//         }
//     })
// })

// // 로그아웃 - 미연동
// router.post('logout', (req, res) => {

//     const {id, pw} = req.body
//     const sql = `select * from post_user where id = ? and pw = ?`

//     conn.query(sql, [id, pw])
// })

module.exports = router;