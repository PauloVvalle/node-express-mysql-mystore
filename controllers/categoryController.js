const categoryData = require('../data/category');

const createCategory = async (category_name) => {
    
    
    try {
        const result = categoryData.createCategory(category_name)
        return result;
        
    } catch (error) {
        throw new Error('error ao inserir categoria. detalhes: ' + error.message);
    }

        
} 

module.exports = {
    createCategory
}