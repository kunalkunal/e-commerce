import React, { useEffect ,useState} from 'react'
import { http } from '../service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Category from './category.component.jsx';
const home = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const getItem=()=>{
      http.get('api/product').then((res)=>{
        setProducts(res.data.product)
      }).catch((err)=>{
        console.log('err',err)
      })
    }
    getItem()
  },[])
  const addTocart=async(selectedItem)=>{
    try{
      const token=localStorage.getItem('token')
      if(token){
        const userId=JSON.parse(localStorage.getItem('userId'))
        let response=await http.post('api/cart-product',{selectedItem:selectedItem,userId:userId})
        toast(response.data.message)
      }else{
        const cartProductIds=JSON.parse(localStorage.getItem('productIds'))||[]  
        if(!cartProductIds?.includes(selectedItem._id)){
           cartProductIds.push(selectedItem._id)
          localStorage.setItem("productIds",JSON.stringify(cartProductIds));
        }
        toast("selected item has been added")
      }

    }catch(err){
      console.log('err ',err)

    }
  }
  const filterCategory=(item)=>{
    try{
      http.get('api/product',{params:{category:item}}).then((res)=>{
        setProducts(res.data.product)
      }).catch((err)=>{
        console.log('err',err)
      })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <Category trackAction={filterCategory}/>
    <div className="mt-4 row row-cols-1 row-cols-md-3 g-4" >
      {products.map((product,index)=>{
       return(
      <div className="col" key={index}>
        <div className="card">
          <img src={product.productImage} className="card-img-top" height={'300px'} width={'80px'} alt="" />
          <div className="card-body">
            <h5 className="card-title">{product.brandName}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">price : {product.price}</p>
            <p className="card-text">sellingPrice :{product.price}</p>
           <button type="button" className="btn btn-primary" onClick={()=>addTocart(product)}>Add to cart</button>
          </div>

        </div>
      </div>
       )
      })}
    </div>
    <ToastContainer/>
    </> 
 )
}

export default home
