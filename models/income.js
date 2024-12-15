const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite", 
    storage: "./database.sqlite"
})

const Income = sequelize.define("income", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
    },
    channel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    }, 
    {timestamps: false }
);

module.exports = { Income };
