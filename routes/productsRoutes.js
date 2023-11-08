const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', (req, res) => {
    productController.getProducts()
        .then((productsData) => {
            res.json(productsData)
        })
        .catch((error) => {
            res.status(500).send('Error ao obter produtos!')
        })

})

router.get('/:id', (req, res) => {
    productController.getProducts(req.params.id)
        .then((productsData) => {
            if(productsData){
                res.status(200).send(productsData)
            } else {
                res.status(404).send('produto não encontrado!')
            }
        })
        .catch((error) => {
            res.status(500).send('Error ao obter produtos!')
        })

})

module.exports = router;