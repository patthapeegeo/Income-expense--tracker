const { Income } = require("../models/income");

async function addIncome(req, res, next) {
    console.log("[addIncome] body:", req.body);

    await Income.create({
        channel: req.body["income-channel"],
        value: parseInt(req.body["income-value"]),
    })
    // res.redirect("/");
    res.redirect("/");
}

async function updateIncome(req, res, next) {
    console.log("[updateIncome] body:", req.body);
    console.log('[updateIncome param:', req.params.incomeId);

    await Income.update({
        channel: req.body['income-channel'],
        value: parseInt(req.body['income-value'])
    }, {
        where: {
            id: req.params.incomeId
        }
    })


    res.redirect("/")
}

async function deleteIncome(req, res, next) {
    console.log("[deleteIncome] param: ",req.body);
    console.log("[deleteIncome] param: ",req.params.incomeId);
   
   await Income.destroy({
       where: {
           id: req.params.incomeId
       }
   })
   console.log("Remove record successfully!");
   
    res.redirect("/");
};

module.exports = { addIncome, updateIncome, deleteIncome}