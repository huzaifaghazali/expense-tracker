const { addIncome, getIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income', addIncome).get('/get-incomes', getIncome);

module.exports = router;
