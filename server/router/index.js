const express=require('express');
const router=express.Router();
const db=require('../db');

router.get ('/',async(req,res,next)=>{
    try{
        let result= await db.all();
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.get ('/:id',async(req,res,next)=>{
    try{
        let result= await db.one(req.params.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});

module.exports=router;