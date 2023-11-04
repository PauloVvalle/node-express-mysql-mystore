const productsData = require('../data/product')


const getProducts = async () => {

    const products = productsData.getProducts()
    if(products) {
        return products;
    } else {
        throw new Error('Erro ao obter os produtos')
    }



    //acessar o bd e fazer select dos dados
}

module.exports = {
    getProducts
}