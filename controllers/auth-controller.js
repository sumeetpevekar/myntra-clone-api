const Products = require("../models/product-model");
const getProducts = async (req, res) => {
    try{
        const product = await Products.find();
        res.status(200).send({message : product})
    }catch(error){
        // res.send(error)
        console.log(error)
    }
}
module.exports = {getProducts}