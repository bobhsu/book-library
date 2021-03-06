var express = require('express');
var router = express.Router();
var book_info = require('../api/book-info');
var user_api = require('../api/user');
var PreOrderResource = require('../api/pre-order-resource');

router.get('/book', book_info.generateBookInfo);
router.get('/book/add', book_info.addBook);
router.get('/book/find', book_info.find);
router.get('/book/delete', book_info.delete);
router.get('/book/news', book_info.newBooks);
router.get('/books', book_info.listBooks);
router.get('/book/count', book_info.count);

router.get('/user/login', user_api.login);
router.get('/user/logon', user_api.logon);

router.post('/preOrder', PreOrderResource.addPreOrder);
router.get('/preOrder', PreOrderResource.listPreOrders);

module.exports = router;