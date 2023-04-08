const express = require('express');

const Postpayment = require('../models/PaymentModel')

const router = express.Router();

//save posts

router.post('/payment/save',(req,res)=>{
    let newPost = new Postpayment(req.body);

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

router.get('/payment',(req,res)=>{
    Postpayment.find().exec((err,postsRepair)=>{
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

router.put('/payment/update/:id',(req,res)=>{
    Postpayment.findByIdAndUpdate(
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

router.delete('/payment/delete/:id',(req,res)=>{
    Postpayment.findByIdAndRemove(req.params.id).exec((err,deletedRepair)=>{
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