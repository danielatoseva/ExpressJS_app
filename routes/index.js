var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

const operationDao = require("../data_access/operations.dao");

/* GET home page. */
router.get('/', function(req, res, next) {
  let weekdays = [
    { day: "Monday", type: "Working day"},
    { day: "Tuesday", type: "Working day"},
    { day: "Wednesday", type: "Working day"},
    { day: "Thursday", type: "Woring day"},
    { day: "Friday", type: "Day of the maistor"},
    { day: "Saturday", type: "Restday"},
    { day: "Sunday", type: "Restday"}
  ];

  let data = {
    title: "Express",
    weekdays: weekdays
  }
  res.render('index', data);
});

router.get('/aboutus', function(req, res, next) {
  const newOperation = {
    date: new Date(),
    type: "Приход",
    quantity: 100,
    userFk: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  operationDao.create(newOperation);
  res.render('aboutus', { title: 'Basic information'});
});

router.get('/aboutthem', async function(req, res, next){
  let operations = await operationDao.getAllWithUsers();
  operations = {"operations": operations};
  res.render('aboutthem', operations);
});

router.get('/greet/:name', function(req, res, next) {
  res.render('greet', {name: req.query.name})
});
module.exports = router;
