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

const getProductsById = async (productId) => {
    try {
        const product = productsData.getProductById(productId)
        return product;

    // conectar e selecionar os dados no banco
    } catch (error) {
        throw new Error('error ao obter o produto. detalhes: ' + error.message);
    }
}

module.exports = {
    getProducts,
    getProductsById
}