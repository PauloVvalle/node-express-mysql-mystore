const dbConnection = require('../data/connection')

const createCategory = (category_name) => {
    return new Promise((resolve, results) => {
        const query = "INSERT INTO categories (category_name) VALUE (?)";
        
        dbConnection.query(query, [category_name], (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    createCategory
}