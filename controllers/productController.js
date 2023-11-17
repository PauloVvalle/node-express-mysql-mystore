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

const createProduct = async (
    product_title,
    product_price,
    product_description,
    product_image,
    product_rate,
    product_count,
    category_id
) => {
    try {
        product_rate = product_rate || 0;
        product_count = product_count || 0;

        const result = productData.createProduct(
            product_title, 
            product_price,
            product_description,
            product_image,
            product_rate,
            product_count,
            category_id
        );
        return result;
    } catch (error) {
        throw new Error('erro ao criar o producto. detalhes: ' + error.message)
    }
}

const searchProducts = async (searchTerm) => {
    try {
        const products = productData.searchProducts(searchTerm)
        return products;
    } catch (error) {
        throw new Error('error ao encontrar produtos')
    }
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsWithCategories,
    getProductsPaginated,
    createProduct,
    searchProducts
}