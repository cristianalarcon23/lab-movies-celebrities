const router = require("express").Router();
const Celebrity = require('../models/Celebrity')

// all your routes here

router.get('/create', (req, res, next) => {
    try {
        res.render('celebrities/new-celebrity')
    } catch (error) {
        next(error)
    }
});

router.post('/create', async (req, res, next) => {
    const {name, occupation, phrase} = req.body;
    try {
        await Celebrity.create({name, occupation, phrase});
        res.redirect('/celebrities')
    } catch (error) {
        res.render('celebrities/new-celebrity');
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find({});
        res.render('celebrities/celebrities', {celebrities})
    } catch (error) {
        next(error)
    }
})

module.exports = router;