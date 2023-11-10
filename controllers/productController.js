const productData = require('../data/product')


const getProducts = async () => {

    const products = productData.getProducts()
    if(products) {
        return products;
    } else {
        throw new Error('Erro ao obter os produtos')
    }



    //acessar o bd e fazer select dos dados
}

const getProductsById = async (productId) => {
    try {
        const product = productData.getProductById(productId)
        return product;

    // conectar e selecionar os dados no banco
    } catch (error) {
        throw new Error('error ao obter o produto. detalhes: ' + error.message);
    }
}

const getProductsPaginated = async (page = 1, pageSize = 20) => {
    //conectar com data
    try {

        if(page === 0){
            page = 1;
        }

        const startIndex = (page - 1) * pageSize;

        const products = productData.getProductsPaginated(startIndex, pageSize)
        return products;

    } catch (error) {
        throw new Error('Erro ao obter produtos paginados! detalhes: ' + error.message)
    }
}
 
const getProductsWithCategories = async () => {
    try{
        const products = productData.getProductsWithCategories()
        return products;
    } catch (error) {
        throw new Error('Erro ao obter produtos com categorias. detalhes: ' + error.message)
    }
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsWithCategories,
    getProductsPaginated
}