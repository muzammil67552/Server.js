const {Router, request} = require("express");
const { saveToDos, getToDos } = require("../controller/controllers");
const router =Router();


router.get('/get', getToDos); //request api for GetData
router.post('/save', saveToDos) // request api for save the data


module.exports = router;