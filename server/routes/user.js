const express = require('express');
const router = express.Router();
const {signUp, login, getUser, resetpassword, confirmpassword, contact, bookmark, removebookmark} = require('../controllers/user')

router.post('/signup', signUp)
router.post('/login', login)
router.get('/user/:id', getUser )
router.post('/reset', resetpassword)
router.post('/confirm', confirmpassword)
router.post('/contact', contact)
router.post('/bookmark/:id', bookmark)
router.post('/removebookmark/:id', removebookmark)

// router.route('/:id').get()

module.exports = router;
