const express = require('express')
const router = express.Router()



router.get("/", (req, res) => {
   // console.log(res);
    res.send("Hello freom server from home file! ");
});


module.exports = router