const express = require('express');
const router = express.Router();
//posts Model
const Posts = require('../../models/Posts');

//@routes GET api/posts
//@desc get all post
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if(!posts) throw Error('No Items');
        res.status(200).json(posts);
    } catch {
        res.status(400).json( {msg: err} )
    }
});

//@routes POST api/posts
//@desc create a post
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save();
        if(!post) throw Error('Something went wrong while saving post');
        res.status(200).json(post);
    } catch(err) {
        res.status(400).json( {msg: err} )
    }
});

//@routes DELETE api/posts/:id
//@desc delete a post
router.delete('/:id', async (req, res) => {
    try {
        const posts = await Posts.findByIdAndDelete(req.params.id);
        if(!posts) throw Error('No Post Found!');
        res.status(200).json({success : true });
    } catch {
        res.status(400).json( {msg: err} )
    }
});

//@routes UPDATE api/posts/:id
//@desc update a post
router.patch('/:id', async (req, res) => {
    try {
        const posts = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!posts) throw Error('Something went wrong when updating the post');
        res.status(200).json({success : true });
    } catch(err) {
        res.status(400).json( {msg: err} )
    }
})

module.exports = router;