const express = require('express')
const router = express.Router();
const cartController = require('../controllers/cartController')

router.post('/addProductToCart', (req, res) => {
    const {userId, productId, quantity} = req.body;
    cartController.addProductToCart(userId, productId, quantity)
    .then((result) => {
        res.send(result)
    })
    .catch((error) => {
        res.status(500).send('erro ao adicionar o producto ao carrinho. detalhes: ' + error)
    })
})

router.get('/cartInfo/:sortOrder', (req, res) => {
    let sortOrder = req.params.sortOrder;
    sortOrder = sortOrder.toUpperCase();

    if(sortOrder == 'ASC' || sortOrder == 'DESC'){
        cartController.getCartsInfo(sortOrder)
        .then((results) => {
            res.json(results)
        })
        .catch((error) => {
            res.status(500).send('erro ao obter carrinhos para sort. detalhes: ' + error)
        })
    } else {
        res.status(400).send('parametro invalido. O parametro sortOrder deve ser ASC ou DESC')
    }

})

router.get('/cartByUser/:userId', (req, res) => {
    cartController.getCartSumByUserId(req.params.userId)
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.status(500).send('erro ao obter carrinho do usuario. detalhe: ' + error)
    })
})

router.get('/:cartId/products', (req, res) => {
    const cartId = req.params.cartId;

    cartController.getProductsByCartId(cartId)
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        res.status(500).send('erro ao obter produtos do carrinho. detalhes: ' + error)
    })
    
})


module.exports = router;