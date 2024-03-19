import { useEffect, useState } from "react"
import logo from "../assets/Group3.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthState } from "../store/store"

const HttpUrl = "https://employee-project-fb4q.onrender.com/api/login"

const Authentication = () => {

    const isAuthenticated = useSelector(selectAuthState);


    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [userDetail, setUserDetail] = useState({})

    const handleChange = (event) => {
        setUserDetail({ ...userDetail, [event.target.name]: event.target.value })
    }



    const handleSubmit = async (event) => {

        event.preventDefault()

        try {

            const response = await axios.post(HttpUrl, userDetail,)

            Cookies.set('token', response.data, { expires: 1 / 24 })
            dispatch(login());
            navigate("/")


        } catch (error) {
            alert(error.response.data)
        }



    }

    return (
        <>{
            isAuthenticated ?

                <div className="flex bg-gray-950 min-h-screen justify-center items-center" >

                    <div className="flex w-full  flex-col items-center justify-center " >
                        <a className="text-white font-semibold bg-green-600 p-2 rounded-2xl px-4" href="/" >Go To Dashboard</a>
                    </div>
                </div>

                :
                <div className="flex bg-background_black min-h-screen justify-center items-center" >

                    <div className="flex w-full  flex-col items-center justify-center " >
                        <div className="flex flex-col" >
                            <img src={logo} alt="logo" />
                            <span className="  font-port text-opacity-30 text-xl text-center text-green-600 mt-4" >
                                We Are Electric
                            </span>

                        </div>

                        <h4 className="text-green-100 mt-2 -mb-4 font-semibold" >Sign In</h4>

                        <form autoComplete="off" onSubmit={handleSubmit} className="flex w-8/12 flex-col" >
                            <input onChange={handleChange} name="email" className="bg-form_bg text-white pl-4 shadow-inner shadow-gray-500  rounded-full p-2 my-8 w-full focus:outline-none focus:ring focus:border-green-500 " type="email" placeholder="E-mail" ></input>
                            <input onChange={handleChange} name="password" className="bg-form_bg shadow-inner pl-4 text-white shadow-gray-500   rounded-full p-2  w-full focus:outline-none focus:ring focus:border-green-500 " type="password" placeholder="Password" ></input>
                            <button className=" rounded-full p-2 text-white font-semibold text-lg text-opacity-70 bg-gradient-to-t from-button_green2 to-button_green1 hover:bg-gradient-to-t hover:from-button_green1 hover:to-button_green2 my-8  " type="submit" >Login</button>
                            <span className=" text-center text-green-600 " >Don't Have An Account? <a className="underline underline-offset-2" href="/register" >Click Here</a> </span>
                        </form>


                    </div>
                </div>
        }
        </>
    )
}


export default Authentication;