import React, { useEffect, useState } from 'react'
import { http, httpUploadAuth } from '../service'
import { ToastContainer, toast } from 'react-toastify';
import { Link,useNavigate } from 'react-router-dom'

const product = () => {
    const [products, setProducts] = useState([])
    const [brandName, setBrandName] = useState([])
    const [productName, setProductName] = useState([])
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])
    const [sellingPrice, setSellingPrice] = useState([])
    const [productImage, setProductImage] = useState([])

    const navigate = useNavigate()

    
    useEffect(() => {
        const isAdmin=localStorage.getItem('isAdmin')
        if(!isAdmin){
            navigate('/')
        }
        const getItem = () => {
            http.get('api/product').then((res) => {
                setProducts(res.data.product)
            }).catch((err) => {
                console.log('err', err)
            })
        }
        getItem()
    }, [])
    const deleteItems = async(selectedId) => {
        try {
           let response= await http.delete('api/product',{params:{selectedId:selectedId}})
               toast(response.data.message)
               setProducts(products.filter((elem)=>elem._id!==selectedId))
        } catch (err) {
            console.log(err)
        }
    }
    const openModal = () => {
        try {
            const myModal = document.getElementById('addpopup');
            const modal = new bootstrap.Modal(myModal);
            modal.show();

        } catch (err) {
            console.log(err)
        }
    }
    const handleSubmit=async(e)=>{
        try{
            e.preventDefault()
        const formData = new FormData()
        formData.append("brandName", JSON.stringify(brandName));
        formData.append("productName", JSON.stringify(productName));
        formData.append("category", JSON.stringify(category));
        formData.append("description", JSON.stringify(description));
        formData.append("price", JSON.stringify(price));
        formData.append("sellingPrice", JSON.stringify(sellingPrice));
        for (const element of productImage) {
            formData.append("file", element);
        }
        let response=await httpUploadAuth.post('api/product',formData)
        toast(response.data.message)
        setProducts((elem)=>[...elem,response.data.product])
        const closebtn=document.getElementById('closebtn')
        closebtn.click()
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={openModal}>Add Product</button>
            <div className="mt-4 row row-cols-1 row-cols-md-3 g-4" >
                {products.map((product, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card">
                                <img src={product?.productImage} className="card-img-top" height={'300px'} width={'80px'} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{product?.brandName}</h5>
                                    <p className="card-text">{product?.description}</p>
                                    <p className="card-text">price : {product?.price}</p>
                                    <p className="card-text">sellingPrice :{product?.price}</p>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteItems(product._id)}>Delete product</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="modal" tabIndex="-1" id="addpopup">
                <form onSubmit={handleSubmit} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" id="closebtn" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 row">
                                <label htmlFor="brandName" className="col-sm-2 col-form-label" >Brand Name*</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="brandName" onChange={(e)=>setBrandName(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="productName" className="col-sm-2 col-form-label" >Product Name*</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="productName" onChange={(e)=>setProductName(e.target.value)} required />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="category" className="col-sm-2 col-form-label" >Category*</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="category"onChange={(e)=>setCategory(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="description" className="col-sm-2 col-form-label" >Description*</label>
                            <div className="col-sm-10">
                                <input type="textarea" className="form-control" id="description" onChange={(e)=>setDescription(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="price" className="col-sm-2 col-form-label" >Price*</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="price" onChange={(e)=>setPrice(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="sellingPrice" className="col-sm-2 col-form-label" >Selling Price*</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="sellingPrice" onChange={(e)=>setSellingPrice(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="productImage" className="col-sm-2 col-form-label" >Selling Price*</label>
                            <div className="col-sm-10">
                                <input type="file" className="form-control" id="productImage" onChange={(e)=>setProductImage(e.target.files)} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div >
                </div>
                </form>
            </div>
            <ToastContainer/>

        </>
    )
}

export default product
