const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, fle, cb){
        cb(null, 'public/upload');
        },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.').pop();
        const newName = Date.now() + '-' + Math.floor(Math.random() * 10000) + '.' + ext;
        cb(null, newName)
        // cb(null, file.fieldname + 'up' + Date.now())
    }
})

const upload = multer({ storage: storage})

module.exports = upload;