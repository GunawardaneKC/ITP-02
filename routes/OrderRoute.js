const express = require('express');

const Postorder = require('../models/OrderModel')

const router = express.Router();

//save posts

router.post('/order/save',(req,res)=>{
    let newPost = new Postorder(req.body);

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

router.get('/order',(req,res)=>{
    Postorder.find().exec((err,postsRepair)=>{
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

router.put('/order/update/:id',(req,res)=>{
    Postorder.findByIdAndUpdate(
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

router.delete('/order/delete/:id',(req,res)=>{
    Postorder.findByIdAndRemove(req.params.id).exec((err,deletedRepair)=>{
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