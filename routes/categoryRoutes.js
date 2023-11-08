const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/categoryController')

router.post('/', (req, res) => {
    const category_name = req.body;
    categoryController.createCategory(category_name)
        .then((result) => {
            res.status(200).send('categoria criada com sucesso! id: ' + result.insertId)  
        })
        .catch((error) => {
            res.status(500).send('Error ao inserir categoria!' + error)
        })
})


module.exports = router;