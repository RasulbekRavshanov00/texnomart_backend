const { Router } = require('express');
const router = Router()
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct} = require('../controllers/productControllers')



router.get('/', getAllProducts)
router.post('/add', addProduct)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router