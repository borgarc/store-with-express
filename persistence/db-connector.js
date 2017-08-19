const mysql = require('mysql');

const connection = () => {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'stock'
    });

    return pool;
}

module.exports = connection();