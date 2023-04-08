const express = require('express');

const Poststock = require('../models/StockModel')

const router = express.Router();

//save posts

router.post('/stock/save',(req,res)=>{
    let newPost = new Poststock(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post save successfully"
        });
    });
});

//get posts

router.get('/stock',(req,res)=>{
    Poststock.find().exec((err,postsRepair)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsRepair
            });
        
    });
});

//update Posts

router.put('/stock/update/:id',(req,res)=>{
    Poststock.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
                return res.status(200).json({
                    success:"Updated Succesfully"
                    
                });
            }
        
    );
});


//delete post

router.delete('/stock/delete/:id',(req,res)=>{
    Poststock.findByIdAndRemove(req.params.id).exec((err,deletedRepair)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedRepair
                
            });
        

    });
});


module.exports = router;