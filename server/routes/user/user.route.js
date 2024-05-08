const express = require('express');
const router = express.Router();
router.get('/contact-list',contactController.getContacts)
module.exports=router