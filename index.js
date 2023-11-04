const express = require('express')
const cors = require('cors')
const productsRoutes = require('./routes/productsRoutes')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
})

app.use('/products', productsRoutes)

app.listen(port, () => {
    console.log('servidor rodando em http://localhost:' + port);
})