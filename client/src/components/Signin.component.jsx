import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { http } from '../service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const productIds = JSON.parse(localStorage.getItem('productIds'))

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let response = await http.post('api/signin', { email: email, password: password, productIds })
            if (response.data.success) {
                localStorage.clear()
                localStorage.setItem('token', JSON.stringify(response.data.token))
                localStorage.setItem('userId', JSON.stringify(response.data.userId))
                localStorage.setItem('isAdmin', JSON.stringify(response.data.isAdmin))
                toast(response.data.message)
                navigate('/')
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
                            <h5 className="card-title text-center">Signin</h5>
                            <div className="mb-3 row ">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email*</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="staticEmail" onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password*</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-3 row  justify-content-end">
                                <div className="col-sm-10 d-flex">
                                    <button className="btn btn-primary">Signin</button>
                                    <Link to="/signup" className="nav-link ms-2 ">create account</Link>
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

export default Signin
