const cartData = require('../data/cart')

const getCartSumByUserId = async (userId) => {
    try {
        const cartInfo = cartData.getCartSumByUserId(userId);
        return cartInfo;
    } catch (error) {
        throw new Error('error ao consultar informações do carrinho deste usuário. Detalhes: ' + error)
        
    }
}

const addProductToCart = (userId, productId, quantity) => {
    try {
        const activeCart = cartData.getCartByUserId(userId)

        if(activeCart.length > 0) {
            const cartId = activeCart[0].cart_Id;
            const result = cartData.addToCart(cartId, productId, quantity)
            return result;
        } else {
            const newCartId = cartData.createNewCart(userId);
            const result = cartData.addToCart(newCartId, productId, quantity)
            return result;
        }
    } catch (error) {
        throw new Error('erro ao adicionar produto ao carrinho. detalhes: ' + error)
    }
}

const getCartsInfo = async (sortOrder) => {
    try {
        const carts = cartData.getCartsInfo(sortOrder);
        return carts;
    } catch (error) {
        throw new Error('erro ao obeter carrinhos. detalhes: ' + error)
    }
}

const getProductsByCartId = (cartId) => {
    try {
        const products = cartData.getCartByUserId(cartId);
        return products;
    } catch (error) {
        throw new Error('error ao boter produtos do carrinho. detalhes: ' + error)
    }
}


module.exports = {
    getCartSumByUserId,
    getProductsByCartId,
    getCartsInfo,
    addProductToCart
};