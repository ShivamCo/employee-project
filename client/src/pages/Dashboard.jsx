import MOPTro from "../assets/moptrologo.png"
import CallIcon from "../components/CallIcon"
import Footer from "../components/Footer"
import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthState } from "../store/store"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HttpUrl = "http://localhost:5000/api/employee-list"

const Dashboard = () => {
    const navigate = useNavigate()
    const isAuthenticated = useSelector(selectAuthState);


    return (
        <>
            {
                !isAuthenticated ? 
                <div className="flex bg-gray-950 min-h-screen justify-center items-center" >

                    <div className="flex w-full  flex-col items-center justify-center " >
                    <a className="text-white font-semibold bg-green-600 p-2 rounded-2xl px-4" href="/login" >Login Now</a>
                    </div>
                </div>
                    
                    :
                    <>
                        <CallIcon />
                        <div className="flex bg-gray-950 min-h-screen justify-center items-center" >

                            <div className="flex w-full  flex-col items-center justify-center " >

                                <div className="flex w-full justify-center items-center flex-col ">

                                    <div className=" relative ">
                                        <img src={MOPTro} alt="dp" />

                                        <span className="text-green-500 w-8 h-8 text-center p-1 rounded-full bg-gray-800  absolute top-0 right-0 -m-6" >4</span>
                                    </div>

                                    <div className="bg-teal-950 mt-12 z-10 text-center w-10/12 p-4 px-8 rounded-full" >
                                        <span className="text-white text-opacity-60 text-center " >
                                            Employee Productivity Dashboard
                                        </span>
                                    </div>

                                    <div className="flex rounded-3xl flex-col w-10/12 -m-4  bg-teal-800 bg-opacity-10 " >
                                        <div className="mt-12 mb-4" >

                                            <ProductivityCard
                                                day={"Monday"}
                                                productivity={90}

                                            />
                                            <ProductivityCard
                                                day={"Tuesday"}
                                                productivity={30}

                                            />
                                            <ProductivityCard
                                                day={"Tuesday"}
                                                productivity={30}

                                            />
                                            <ProductivityCard
                                                day={"Tuesday"}
                                                productivity={30}

                                            />
                                            <ProductivityCard
                                                day={"Tuesday"}
                                                productivity={30}

                                            />
                                            <ProductivityCard
                                                day={"Tuesday"}
                                                productivity={30}

                                            />


                                        </div>
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )

}

const ProductivityCard = (props) => {
    let bar = props.productivity + "%"

    

    return (


        <div className=" flex flex-col  py-2  px-8" >
            <div className="flex " >
                <span className="flex-1  text-white font-light text-opacity-90 " >Productivity on {props.day}</span>
                <span className=" text-green-600 " >{props.productivity}%</span>
            </div>
            <div className="h-3 flex w-full my-2 -m-4 " >
                <div style={{ width: bar }} className={`h-3 bg-green-800 rounded-full border border-opacity-70 border-green-400`} ></div>
            </div>
        </div>





    )

}

export default Dashboard;