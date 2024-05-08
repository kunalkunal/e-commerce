const express = require('express');
const router = express.Router();
const productController=require('../controllers/product.controller.js')
const userController=require('../controllers/user.controller.js')
const upload=require('../utils/upload.utils.js')
router.get('/product', productController.getProductList);
router.get('/cart-product', productController.getCartItems);
router.delete('/cart-product', productController.deleteCartItem);
router.post('/signin', userController.signin);
router.post('/signup', userController.createUser);
router.post('/cart-product', productController.addToCart);
router.post('/product',upload.multerSingle, productController.deleteProduct);
router.delete('/product',productController.deleteProduct)


module.exports=router