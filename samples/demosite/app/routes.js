const express = require('express');
const router = express.Router();

const {loginController} = require('./controllers/loginController');
const {assessmentController} = require('./controllers/assessmentController');

router.get('/login', loginController);
router.post('/create_assessment', assessmentController);

module.exports = router;
