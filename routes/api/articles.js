// routes/api/articles.js

const express = require('express');
const router = express.Router();

// Load Article model
const Article = require('../../models/Article');

// @route GET api/Article/test
// @description tests Article route
// @access Public
router.get('/test', (req, res) => res.send('Article route testing!'));

// @route GET api/Article
// @description Get all Article
// @access Public
router.get('/', (req, res) => {
    Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ nobooksfound: 'No Articles found' }));
});

// @route GET api/articles/:id
// @description Get single articles by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(404).json({ noarticlefound: 'No article found' }));
});

// @route GET api/articles
// @description add/save article
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
    .then(article => res.json({ mgs: 'article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a article' }));
});

module.exports = router;