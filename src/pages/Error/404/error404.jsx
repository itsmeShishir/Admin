import React from 'react'
import error from  '../../../img/error.svg'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <>
        <div className="py-5 bg-blue-800">
            <div className="container">
                {/* Start of the Error Page 404 */}
                <div className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
            <div className="-intro-x lg:mr-20">
                <img alt="" className="h-48 lg:h-auto"
                    src={error}/>
            </div>
            <div className="text-white mt-10 lg:mt-0">
                <div className="intro-x text-8xl font-medium">404</div>
                <div className="intro-x text-xl lg:text-3xl font-medium mt-5">Oops. This page has gone missing.</div>
                <div className="intro-x text-lg mt-3">You may have mistyped the address or the page may have moved.</div>
                 <Link
                    className="intro-x btn py-3 px-4 text-white border-white mt-10" to='/'>Back
                    to Home</Link>
            </div>
        </div>
            </div>
        </div>
    </>
  )
}

export default Error404