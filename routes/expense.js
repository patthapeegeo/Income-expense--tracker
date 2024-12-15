const express = require("express");
const { Expense } = require("../models/expense");

const { mapValueFieldNames } = require("sequelize/lib/utils");

const router = express.Router();
router.post("/expense", async function (req, res, next) {
    console.log("[addExpense] body: ", req.body);

    await Expense.create({
        channel: req.body["expense-channel"],
        value: parseInt(req.body["expense-value"])
    });

    res.redirect("/");
});

router.post("/expense/update/:expenseId", async function(req, res, next){
    console.log('[updateExpense] param: ', req.params.expenseId);
    console.log('[updateExpense] body: ', req.body);

    await Expense.update({
        channel: req.body["expense-channel"],
        value: parseInt(req.body['expense-value'])
    },
    {
        where: {
            id: parseInt(req.params.expenseId),
        },
    }
);

    res.redirect("/");
});

router.post("/expense/delete/:expenseId", async function (req, res, next) {
    console.log("[deleteExpense] param: ", req.params.expenseId);
    console.log("[deleteExpense] body", req.body)

    await Expense.destroy({
        where: {
            id: parseInt(req.params.expenseId)
        }
    });

    res.redirect("/");
});

module.exports = router;