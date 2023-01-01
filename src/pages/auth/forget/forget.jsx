import React from 'react'
import { Link } from 'react-router-dom';
import "./forget.css"
function Forget() {
  return (
    <>
       
        <div className="container sm:px-10 flex items-center justify-center ">
            <div className="hidden xl:flex flex-col min-h-screen">
                <Link to="" className=" flex items-center pt-5">
                    <img alt="" className="w-6"
                        src="" />
                    <span className="text-white ml-3 text-3xl">
                        Hamro<small className='text-red-500 '> Car</small>
                    </span>
                </Link>
                <div className=" block gap-4 ">
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div
                    className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Forget Password</h2>
                    <div className="intro-x mt-2  text-slate-400 xl:hidden text-center">Plz provide the valid email address</div>
                    <div className="intro-x mt-8">
                        <input type="text" className="intro-x login__input form-control py-3 px-4 block"
                            placeholder="Email"/>
                        <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Password"/>
                    </div>
                    <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                        <div className="flex items-center mr-auto">
                            <input id="remember-me" type="checkbox" className="form-check-input border mr-2"/>
                            <label className="cursor-pointer select-none" for="remember-me">Remember me</label>
                        </div>
                        <Link to="/forget-password">Forgot Password?</Link>
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <Link to="/" className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Login</Link>
                        <Link to="/register"
                            className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">Register</Link>
                    </div>
                    <div className="intro-x mt-10 xl:mt-8 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                        By signin up, you agree to our <Link className="text-primary dark:text-slate-200" to="/">Terms and
                            Conditions</Link> & <Link className="text-primary dark:text-slate-200" to="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
        </div>
    </>
  )
}

export default Forget