import React from 'react'
import login from  '../../../img/illustration.svg'
import { Link } from 'react-router-dom';
import "./register.css"
function Register() {
  return (
    <>
        <div className='login'>
        <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
            <div className="hidden xl:flex flex-col min-h-screen">
                <Link to="" className="-intro-x flex items-center pt-5">
                    <img alt="" className="w-6"
                        src="" />
                    <span className="text-white ml-3 text-3xl">
                        Hamro<small className='text-red-500 '> Car</small>
                    </span>
                </Link>
                <div className="my-auto">
                    <img alt="" className="-intro-x w-1/2 -mt-16"
                        src={login}/>
                    <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">Lets get Going.</div>
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Helps all the member and lets build and grow commodity</div>
                </div>
            </div>
            <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div
                    class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Sign Up</h2>
                    <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">A few more clicks to sign in to your
                        account. Manage all your e-commerce accounts in one place</div>
                    <div class="intro-x mt-8">
                        <input type="text" class="intro-x login__input form-control py-3 px-4 block"
                            placeholder="User Name"/>
                        <input type="text" class="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Email"/>
                        <input type="text" class="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Password"/>
                        <div class="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                            <div class="col-span-3 h-full rounded bg-success"></div>
                            <div class="col-span-3 h-full rounded bg-success"></div>
                            <div class="col-span-3 h-full rounded bg-success"></div>
                            <div class="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        </div>
                        <Link to="" class="intro-x text-slate-500 block mt-2 text-xs sm:text-sm">What is a secure
                            password?</Link>
                        <input type="text" class="intro-x login__input form-control py-3 px-4 block mt-4"
                            placeholder="Password Confirmation"/>
                    </div>
                    <div class="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                        <input id="remember-me" type="checkbox" class="form-check-input border mr-2"/>
                        <label class="cursor-pointer select-none" for="remember-me">Terms and
                            Conditions</label>
                        <Link class="text-primary dark:text-slate-200 ml-1" to="/">Privacy Policy</Link>.
                    </div>
                    <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <Link to="/login" className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Register</Link>
                        <Link to="/login" className="btn btn-outline-secondary py-3 px-4 w-full xl:w-44 mt-3 xl:mt-0 align-top">Have an account</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Register