import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { http } from '../service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const navigate = useNavigate()
    const productIds = JSON.parse(localStorage.getItem('productIds'))
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await http.post('api/signup', { email, password, name, productIds })
            if (response.data?.status) {
                localStorage.clear()
                toast(response.data.message)
                navigate('/signin')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center mt-4">
                    <div className="card w-50 mb-3">
                        <div className="card-body">
                            <h5 className="card-title ztext-center">SignUp</h5>
                            <div className="mb-3 row ">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"> Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required />
                                </div>
                            </div>
                            <div className="mb-3 row ">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail" onChange={(e) => { setEmail(e.target.value) }} required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <div className="mb-3 row  justify-content-end">
                                <div className="col-sm-10 d-flex">
                                    <button className="btn btn-primary">Signup</button>
                                    <Link to="/signin" className="nav-link ms-2 ">Signin</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default signup
