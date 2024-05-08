
const productDao=require('../dao/product.dao.js')
const cartDao=require('../dao/cart.dao.js')
const { ObjectId } = require('mongoose').Types;
const cloudinary = require('cloudinary');
const createProduct=async(req,res)=>{
    try{
      let product={
        brandName:JSON.parse(req.body.brandName),
        productName:JSON.parse(req.body.productName),
        category:JSON.parse(req.body.category),
        description:JSON.parse(req.body.description),
        price:Number(JSON.parse(req.body.price)),
        sellingPrice:Number(JSON.parse(req.body.sellingPrice))
      }
      let latestProduct
        cloudinary.v2.config({
            cloud_name: 'dwwoyezdv',
            api_key: '861122388515716',
            api_secret: '66m_xdMRT-q4Y4oulNpy89DSL3o',
            secure: true,
        });
        cloudinary.v2.uploader
            .upload(req.file.path, {
                folder: `products/${JSON.parse(req.body.category)}`,
                resource_type: 'image'
            })
            .then(async(res)=>{
                product.productImage=res.url
                console.log('product ',product)
              latestProduct= await productDao.create(product)
            }).catch(err=>{
                console.log('err ',err)
            })
            res.status(200).send({message:'Product Added successfully',product:latestProduct})
      
    }catch(error){
        console.log(error)
        res.status(500).send({message:'server error'})

    }
}
const getProductList=async(req,res)=>{
    try{
        let result
    if(req.query?.category){
        result=await productDao.find({category:req.query.category})
    }else{
        result=await productDao.find({})
 
    }
    //   console.log('result ',result)
      res.status(200).send({message:'fetched',product:result})
    }catch(error){
        console.log(error)
    }
}   
const getCartItems=async(req,res)=>{
    try{
        const userId=req.query.userId
        const productIds=req.query.productIds||[]
        let cartProducts=[]
        if(userId){
            let cartItems=await cartDao.find({userId:new ObjectId(userId)})
            productIds.push(...cartItems.map(elem=>elem.productId))
        }
        cartProducts.push(...await productDao.find({_id:{$in:productIds}}))
        res.status(200).send({message:'sucesss ',cartProducts:cartProducts})

    }catch(error){
        console.error(error)
    }
}    
const deleteCartItem=async(req,res)=>{
    try{
        const {selectedId}=req.query
        await cartDao.deleteOne({productId:new ObjectId(selectedId)})
        res.status(200).send({message:'selected item has been deleted sucessfully'})
    }catch(error){
        console.log(error)
        res.status(500).send({message:'Server error'})
    }
}
const addToCart=async(req,res)=>{
    try{
        const {selectedItem,userId}=req.body
        const cart=await cartDao.create({productId:selectedItem,userId:userId})
        res.status(200).send({message:'selected item has been added sucessfully',cart})
    }catch(error){
        console.log(error)
        res.status(500).send({message:'Server error'})
    }
}
const deleteProduct=async(req,res)=>{
    try{
        const {selectedId}=req.query
        await productDao.deleteOne({_id:new ObjectId(selectedId)})
        res.status(200).send({message:'selected item has been deleted sucessfully'})
    }catch(error){
        console.log(error)
        res.status(500).send({message:'Server error'})
    }
}


module.exports={createProduct,getProductList,getCartItems,deleteCartItem,addToCart,deleteProduct}
