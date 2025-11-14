const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

router.get('/',async(req , res)=>{
    const products = await Product.find({},"name slug price imageUrl")
    res.json(products);
})

router.get('/:slug',async(req ,res)=>{
    const p = await Product.findOne({slug:req.params.slug})
    if(!p) return res.status(404).json({error:"Product not found"})
    res.json(p);
})

module.exports = router