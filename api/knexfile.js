module.exports = {
    client: 'sqlite3',
    connection: {
        filename: './database/database.sqlite'
    },
    migrations: {
        directory: __dirname + '/database/migrations'
    },
};