const express = require('express')
const router = express.Router()
const { CategoryService }  = require('../services/category.service')

router.post('/create-caterory', (req,res)=>{
    const {parent_id, category_name, status} = req.body;
    CategoryService.createCategory(parent_id, category_name, status)
    .then(cate=>res.send({
        code: 1,
        data: cate,
        message:''
    }))
    .catch(err=>res.send({
        code:0,
        data:null,
        message: err.message
    }))
})

module.exports = router
