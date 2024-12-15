const path=require('path');
const express = require("express");
const chalk = require("chalk");

const homeRoutes = require("./routes/ home");
const incomeRoutes = require('./routes/income');
const summaryRoutes = require("./routes/summary");
const expenseRoutes = require('./routes/expense')

const { createTableWithSeed } = require('./models/database')

const app = express();
const PORT = 3000;

createTableWithSeed();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json()) // utilizes the body-parser package
app.use(express.urlencoded({extended: true})) //Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(incomeRoutes);
app.use(summaryRoutes);
app.use(expenseRoutes);

app.listen(process.env.PORT || PORT, function() {
    console.log
        (`Income Expense Tracker App is running on >>> ${chalk.green(
            "http://localhost:3000" 
        )} >>>`
    );
});