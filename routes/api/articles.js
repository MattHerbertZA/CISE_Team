// routes/api/articles.js

const express = require('express');
const router = express.Router();

// Load Article model
const Book = require('../../models/Article');

// @route GET api/article/test
// @description tests alrticle route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/article
// @description Get all article
// @access Public
router.get('/', (req, res) => {
    Article.find()
    .then(article => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No articles found' }));
});

// @route GET api/article/:id
// @description Get single article by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
    .then(article => res.json(book))
    .catch(err => res.status(404).json({ noarticlefound: 'No article found' }));
});

// @route GET api/articles
// @description add/save articles
// @access Public
router.post('/', (req, res) => {
    Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/article/:id
// @description Update article
// @access Public
router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
    .then(article => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/article/:id
// @description Delete article by id
// @access Public
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, req.body)
    .then(article => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Article' }));
});

module.exports = router;