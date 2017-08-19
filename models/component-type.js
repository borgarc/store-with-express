const pool = require('../persistence/db-connector');

module.exports = {
    getAll: (done) => {
        let res;
        pool.query('SELECT * FROM componentstype', function (error, results, fields){
            if (error) throw error;
            res = results;
            done (error, res);
        })
    }
};

