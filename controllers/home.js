const express = require("express")
const {Income} = require("../models/income");
const {Expense} = require("../models/expense");

const homeController = require("../controllers/home")

const router = express.Router

async function  getHomePage(req, res, next) {
    const incomes = await Income.findAll();
    const expenses = await Expense.findAll();

    const incomesData = [];
    const expensesData = [];
    let budget = 0;
    let spentSoFar = 0;

    for(let i = 0; i < incomes.length; i++) {
        incomesData.push({
            id: incomes[i].dataValues.id,
            channelName: incomes[i].dataValues.channel,
            value: incomes[i].dataValues.value,
        });
        budget += incomes[i].dataValues.value
    }

    for (let i = 0; i < expenses.length; i++) {
        expensesData.push({
            id: expenses[i].dataValues.id,
            channelName: expenses[i].dataValues.channel,
            value: expenses[i].dataValues.value
        });
        spentSoFar += expenses[i].dataValues.value
    }

    const remaining =  budget - spentSoFar;

    res.render ('home', {
        incomes: incomesData,
        expenses: expensesData,
        budget: budget,
        remaining: remaining,
        spentSoFar: spentSoFar
    });
}

module.exports = { getHomePage };
