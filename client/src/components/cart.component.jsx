import React, { useState,useEffect } from 'react'
import { http } from '../service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';
const cart = () => {
const [cartItems,setCartItems] = useState([])
const [isOpen, setIsOpen] = useState(false); // State for modal visibility
const [selectedId,setSelectedId]=useState(null)
const token=JSON.parse(localStorage.getItem('token'))
const productIds=JSON.parse(localStorage.getItem('productIds'))||[]
const userId = JSON.parse(localStorage.getItem('userId'))
const navigate = useNavigate()

useEffect(()=>{
    const getCartItems=async()=>{
        const response = await http.get('api/cart-product', {
            params: {
                productIds: productIds,
                userId: userId
            }
        }).then((res) => {
            setCartItems(res.data?.cartProducts)
        }).catch((err) => {
            console.log('err ', err)
    
        })
    }
    getCartItems()
}, [])
const orderPlace=(orderProductId)=>{
    try{
    console.log('order ',orderProductId)
    if(token){
      toast('order has been placed')
    }else{
        toast('please signin to place order')
        navigate('/signin')
    }
    }catch(err){
        console.log(err)
    }
}
const deleteCartItem=async()=>{
    try{ 
        if(token){
            let response=await http.delete('api/cart-product',{params:{selectedId:selectedId}})
            setCartItems(cartItems.filter(elem=>elem._id!==selectedId))
            toast(response.data.message)  
        }else{
            console.log('itemId',selectedId)
            let productIds=JSON.parse(localStorage.getItem('productIds'))
            localStorage.setItem('productIds',JSON.stringify(productIds?.filter((elem)=>elem!==selectedId)))
            setCartItems(cartItems.filter(elem=>elem._id!==selectedId))
            toast("Selected item has been deleted sucessfully")  

        }
    }catch(err){
        console.log(err)
    }
}

const openConfirmationPopup=(itemId)=>{
    try{
        console.log('itemId ',itemId)
        setIsOpen(true)
        const myModal = document.getElementById('exampleModal');
        const modal = new bootstrap.Modal(myModal);
        modal.show();      
    }catch(err){
        console.log(err)
    }
}
  return (
    <>
         {cartItems.length>0? <div className="row row-cols-1 row-cols-md-3 g-4" >
              { cartItems?.map((cartItem, index) => {
                  return (
                      <div className="col" key={index}>
                          <div className="card">
                              <img src={cartItem.productImage} className="card-img-top" height={'300px'} width={'80px'} alt="" />
                              <div className="card-body">
                                  <h5 className="card-title">{cartItem.brandName}</h5>
                                  <p className="card-text">{cartItem.description}</p>
                                  <p className="card-text">price : {cartItem.price}</p>
                                  <div className="mb-3 row">
                                      <label htmlFor="qty" className="col-sm-2 col-form-label" >qty</label>
                                      <div className="col-sm-10">
                                          <input type="number" min={1} className="form-control" id="qty" placeholder='1' onChange={(e) => {
                                              setCartItems((cartItems) =>
                                                  cartItems.map((item) =>
                                                      item._id === cartItem._id ? { ...item, sellingPrice: item.price * e.target.value } : item
                                                  )
                                              );
                                          }} />
                                      </div>
                                  </div>                              
                                  <p className="card-text">sellingPrice :{cartItem.sellingPrice}</p>
                                  <button type="button" className="btn btn-primary" onClick={() => orderPlace(cartItem._id)}> Order place</button>
                                  <button type="button" className="btn btn-danger ms-2" onClick={() =>{ openConfirmationPopup();setSelectedId(cartItem._id)}}>delete</button>
                              </div>

                          </div>
                      </div>
                  )
              })}
          </div>:
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Add Product to cart</h5>
                      <Link to="/" className="btn btn-primary">Shop now</Link>
                  </div>
              </div>
          }
          <div className="modal" tabIndex="-1" id="exampleModal">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Confirmation</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                          <p>Are you sure ? you want to delete this product</p>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                          <button type="button" className="btn btn-primary" onClick={deleteCartItem} data-bs-dismiss="modal">Yes</button>
                      </div>
                  </div>
              </div>
          </div>
          <ToastContainer/>
      </>
  )
}

export default cart
