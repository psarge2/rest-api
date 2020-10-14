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
//@desc create and post
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

module.exports = router;