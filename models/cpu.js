let connector = require('../persistence/db-connector');

module.exports = {
    getAll: () => {
        console.log(connector);
        connector.getConnection((err, conn) => {
            connection.query('SELECT * FROM Cpus', function (error, results, fields) { 
                connection.release();

                //if (error) throw error;

                console.log(results[0]);
                console.log(fields[0]);
            });
        });
    }
}