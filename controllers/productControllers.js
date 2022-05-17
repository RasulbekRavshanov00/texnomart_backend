const ProductModel = require('../models/Product.model');


//method => GET
//descr => get all product

const getAllProducts = async (req, res) => {
    try{
        const product = await ProductModel.find();

        res.status(200).json({
            message: 'success',
            product: product
        })
    } catch (err) {
        res.send(err)
    }
}

//method => GET
//descr => get one product by id

const getProductById = async (req, res) => {
    try{
        const product = await ProductModel.findById(req.params.id)

       if(!product){
           return res.status(404).json({
               message: 'Not found'
           })
       }

       return res.status(200).json({
           message: 'success',
           product: product
       })
    } catch (err){
        res.send(err)
    }
}

//method => POST
//descr => Add new product

const addProduct = async (req, res) => {
    try{
       const { title, image, descr } = req.body 

       const newProduct = await ProductModel.create({
        title,
        image,
        descr
       })

       res.status(201).json({
           message: 'success',
           newProduct: newProduct
       })
    } catch (err){
        res.send(err)
    }
}

//method => PUT
//descr => edit product

const updateProduct = async (req, res) => {
    try{
       const { title, image, descr } = req.body 

        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id,{
            title,
            image,
            descr
        })

       res.status(200).json({
           message: 'success',
           updatedProduct
       })
    } catch (err){
        res.send(err)
    }
}

//method => DELETE
//descr => delet product

const deleteProduct = async (req, res) => {
    try{

       await ProductModel.findByIdAndRemove(req.params.id)

       res.status(200).json({
           message: 'deleted',
       })
    } catch (err){
        res.send(err)
    }
}


module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}