const express = require('express');
const { Income } = require("../models/income");

const incomeControllers = require('../controllers/income')

const router = express.Router();

router.post("/income", incomeControllers.addIncome);

router.post("/income/update/:incomeId", incomeControllers.updateIncome);

router.post("/income/delete/:incomeId", incomeControllers.deleteIncome);

module.exports = router;