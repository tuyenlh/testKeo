const express = require('express')
const {getHomePage,getHomeabc,getHometest}=require('../controllers/homeController')
const router=express.Router();




router.get('/', getHomePage);
  router.get('/abc', getHomeabc)
  router.get('/test',getHometest)
  module.exports=router;