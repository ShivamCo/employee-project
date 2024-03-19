import { useEffect, useState } from "react";
import MOPTro from "../assets/moptrologo.png"
import CallIcon from "../components/CallIcon";
import Footer from "../components/Footer";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuthState } from "../store/store"

const HttpUrl = "https://employee-project-fb4q.onrender.com/api/employee-list"

const Searchpage = () => {
    const isAuthenticated = useSelector(selectAuthState);


    const [searchTerm, setSearchTerm] = useState("")
    const [employeeList, setEmployeeList] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleChange = (event) => {
        setSearchTerm(event.target.value)

    }

    const handleInput = async (e) => {

        try {
            const response = await axios.post(HttpUrl, { name: searchTerm })
            setEmployeeList(response.data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }


    }


    useEffect(() => {
        handleInput()
    }, [searchTerm])


    return (
        <>
            {
                !isAuthenticated
                    ?
                    <div className="flex bg-gray-950 min-h-screen justify-center items-center" >

                        <div className="flex w-full  flex-col items-center justify-center " >
                            <a className="text-white font-semibold bg-green-600 p-2 rounded-2xl px-4" href="/login" >Login Now</a>
                        </div>
                    </div>

                    :
                    <>
                        <CallIcon />
                        <div className="flex z-0 bg-background_black min-h-screen  items-center" >
                            <div className="flex w-full  flex-col items-center  " >
                                <div className=" relative   ">
                                    <img src={MOPTro} alt="dp" />

                                    <span className="text-green-500 w-8 h-8 text-center p-1 rounded-full bg-gray-800  absolute top-0 right-0 -m-6" >4</span>
                                </div>
                                <div className="w-full flex items-center justify-center" >

                                    <input onChange={handleChange} className="my-4 bg-form_bg text-white shadow-gray-500 text-center font-semibold shadow-inner w-9/12 p-3 px-8 rounded-2xl " placeholder="Search with Name" />

                                </div>
                                {
                                    loading ?
                                        <div
                                            className="inline-block text-white h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                                            role="status">
                                            <span
                                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                            >Loading...</span>
                                        </div>
                                        :
                                        <div className="w-full h-96 overflow-auto flex flex-col items-center ">

                                            {

                                                employeeList?.map((i) =>
                                                    < EmployeeCard
                                                        key={i._id}
                                                        emp_id={i.emp_id}
                                                        dob={i.dob}
                                                        name={i.name}
                                                        role={i.role}
                                                        serial={employeeList.indexOf(i)}
                                                    />
                                                )
                                            }


                                        </div>}
                            </div>
                            <Footer />

                        </div>
                    </>
            }
        </>
    )

}


const EmployeeCard = (props) => {

    return (
        <div className="flex relative my-2 bg-form_bg p-2 w-9/12 rounded-2xl flex-col" >
            <div className=" flex absolute bg-gray-900 right-8 top-4 rounded-full border border-black text-center items-center justify-center text-white w-8 h-8 " >
                {props.serial + 1}
            </div>
            <div className="flex-col p-2 flex justify-start items-start " >
                <span className="text-white my-2 " >EMP ID : {props.emp_id}</span>
                <span className="text-white my-2" >Name : <span className="font-medium text-opacity-60 " >{props.name}</span></span>
                <span className="text-white my-2" >DOB : <span className="text-orange-400 font-medium text-opacity-60 " >{(props.dob).slice(0, 10)}</span> </span>
                <span className="text-white my-2" >Role :  <span className="text-green-400 font-medium text-opacity-60 " >{props.role}</span> </span>
            </div>
        </div>
    )

}

export default Searchpage;