const express = require('express');
const router = express.Router();
//posts Model
const Posts = require('../../models/Posts');

//@routes POST api/posts
//@desc create and post
router.post('/', async (req, res) => {
    const newPosts = new Posts(req.body);

    try {
        const post = await newPost.save()
        if(!post) throw Error('Something went wrong while saving post');

        res.status(200).json(post);

    } catch(err) {
        res.status(400).json( {msg: err} )
    }
});

module.exports = router;