import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai";
function Side() {
    
  return (
    <div>
       <div className="flex mt-[4.7rem] md:mt-0">
        <nav className="side-nav">
            <Link to="" className="intro-x flex items-center pl-5 pt-4">
                <img alt="" className="w-6"
                    src="https://rubick.left4code.com/dist/images/logo.svg"/>
                <span className="hidden xl:block text-white text-lg ml-3">
                    Admin Dashbaord
                </span>
            </Link>
            <div className="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <Link to="" className="side-menu side-menu--active">
                        <div className="side-menu__icon">
                            <i data-lucide="home"></i>
                        </div>
                        <div className="side-menu__title">
                            <span className='mr-3'><AiFillHome /></span>
                            Dashboard
                            <div className="side-menu__sub-icon transform rotate-180">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            User
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All User
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Add User
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Category
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All Category
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Add Category
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Product
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All Product
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Add Product
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Coupone
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All Coupone
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Add Coupone
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Blog Category
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All Blog Category
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Add Blog Category
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Blog
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All Blog
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Add Blog
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Comment
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    All Comment
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Setting
                            <div className="side-menu__sub-icon ">
                                <i data-lucide="chevron-down"></i>
                            </div>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    SEO Setting
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Profile Setting
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        
    </div>
    </div>
  )
}

export default Side
