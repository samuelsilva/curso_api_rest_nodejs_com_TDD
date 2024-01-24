module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            database: 'seubarriga'
        },
        migrations: {
            directory: '../src/migrations',
        },
    },
};