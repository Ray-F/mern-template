const {Router} = require('express');

const defaultController = require('../controllers/defaultController');

const router = Router();


router.get('/hello', defaultController.helloWorld);

// To add another router:
// const inputRouter = require('./anotherRouter');
// router.use("/api/inputs", inputRouter);

router.use("/", (req, res, next) => {
  res.send(`
    <h2>Express API</h2>
    <p>
      You have reached the express API.
      Email rf.raymondfeng@gmail.com for any questions on usage.
    </p>
  `);
});




module.exports = router;
