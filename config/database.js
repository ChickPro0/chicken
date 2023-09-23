const mysql = require('mysql2');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'chicken',
    port : 3306,
    password : '1234'
});

conn.connect();

module.exports = conn;