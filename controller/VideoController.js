const express = require('express');
const bodyParser = require('body-parser');
const video = require('../model/Video');
const router = express.Router();

router.get("/listar", (req, res) => {
    res.json(JSON.stringify(video.getAll()));

});