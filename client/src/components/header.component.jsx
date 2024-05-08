import React from 'react'
// import link from 'react-router-dom'
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const header = () => {
     const token=localStorage.getItem('token')
     const isAdmin=JSON.parse(localStorage.getItem('isAdmin'))
     const navigate = useNavigate()

     const logout=()=>{
        try{
            toast('logout succesfully')
            localStorage.clear()
            setInterval(()=>{
                navigate('/')
            },300)
        }catch(err){
            console.log(err)
        }
     }
    return (
        <>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
           {isAdmin && <li className="nav-item">
                <Link className="nav-link " to="/products">Products</Link>
            </li>}
            <li className="nav-item">
                <Link className="nav-link " to="/cart">Cart</Link>
            </li>
            {token?(<li className="nav-item"><Link to="/" className="nav-link " onClick={logout}>Logout</Link></li>):
            (
                <>
            <li className="nav-item">
                <Link className="nav-link " to="/signin">Signin</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link " to="/signup">Signup</Link>
            </li></>)}
        </ul>
       <ToastContainer/>

        </>
    )
}

export default header
