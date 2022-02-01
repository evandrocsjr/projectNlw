import dotenv from "dotenv"
dotenv.config()

module.exports = {
    type: "mysql",
    host: "localhost",
    port: process.env.PORT,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    migrations: [
        "src/database/migrations/*.ts"
    ],
    entities: [
        "src/entities/*.ts"
    ],
    cli: {
        migrationsDir: "src/database/migrations",
        entitiesDir: "src/entities"
    }
}