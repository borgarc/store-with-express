const mysql = require('mysql');

const connection = () => {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'components'
    });

    return pool;
}

module.exports = connection();