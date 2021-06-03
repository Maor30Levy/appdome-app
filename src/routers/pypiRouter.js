const express = require('express');
const axios = require('axios');
const auth = require('../auth');
const router = new express.Router();

router.post('/', auth, async (req, res) => {
    try {
        // const result = axios.get('http://pypi.interview.internal:8081');
        const result = {};
        result.data = { data: '<div>hello</div>' }
        return res.send(result.data);
    } catch (err) {
        return res.status(400).send(err.message)
    }
});


module.exports = router;