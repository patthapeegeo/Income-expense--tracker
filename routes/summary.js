const express = require("express");
const { Income } = require("../models/income");
const { Expense } = require("../models/expense");

const router = express.Router();

router.get("/summary", async function (req, res, next) {
    const incomes = await Income.findAll();
    const expenses = await Expense.findAll();
    const data = [];
    const expenseData = [];
    let summary = 0;
    let sumExpense = 0;
    for(let i = 0; i < incomes.length; i++) {
        data.push({
            id: incomes[i].dataValues.channel,
            channelName: incomes[i].dataValues.channel,
            value: incomes[i].dataValues.value,
        });
        summary += incomes[i].dataValues.value;
    }
    for( let i = 0; i <expenses.length; i++) {
        expenseData.push({
            id: expenses[i].dataValues.id,
            channelName: expenses[i].dataValues.channel,
            value: expenses[i].dataValues.value
        })
        sumExpense += expenses[i].dataValues.value
    }

    console.log('expensesData: ', expenseData)


    res.render("summary", {
        incomes: data,
        summary: summary,
        expenses: expenseData,
        sumExpense: sumExpense,
    });
});

module.exports = router;