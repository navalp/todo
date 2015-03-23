var express = require('express')
        , router = express.Router()
        ,UserController=require('../controllers/UserController');

/* GET users listing. */
router.get('/user', UserController.getList);
router.post('/user', UserController.save);
router.get('/user/:id', UserController.delete);

module.exports = router;
