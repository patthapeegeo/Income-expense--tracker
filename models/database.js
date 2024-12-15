const Database = require("better-sqlite3");
const db = new Database("database.sqlite", { varbose: console.log });

const createTableWithSeed = () => {
    const createTableQuery = 
        "CREATE TABLE IF NOT EXISTS incomes ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'channel' TEXT NOT NULL, 'value' INTEGER NOT NULL)";
    const createSeedDataQuery = "INSERT OR IGNORE INTO incomes ('id', 'channel', 'value') VALUES (1, 'Salary', 65000)"
    const createExpenseTableQuery = "CREATE TABLE IF NOT EXISTS expenses ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'channel' TEXT NOT NULL, 'value' INTEGER NOT NULL)";
    const createExpenseSeedDataQuery = "INSERT OR IGNORE INTO expenses ('id', 'channel', 'value') VALUES (1, 'Computer Installment', 5000)"
    
    db.exec(createTableQuery);
    db.exec(createSeedDataQuery);
    db.exec(createExpenseTableQuery);
    db.exec(createExpenseSeedDataQuery);
    console.log('Table incomes created Sucessfully!');
};

module.exports = {
    db,
    createTableWithSeed,
};