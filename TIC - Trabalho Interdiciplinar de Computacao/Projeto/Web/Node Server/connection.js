const config = {
    host: 'localhost',
    port: 5432,
    database: 'calendario_academico',
    user: 'postgres',
    password: 'hirroba1304'
};

const db = require('pg-promise')()(config);

global.db = {
    json: async function (query, params) {
        let result = await db.proc(query, params);

        return result ? result[Object.keys(result)[0]] : null;
    },
    query: db.query,
    proc: db.proc,
    func: db.func
};