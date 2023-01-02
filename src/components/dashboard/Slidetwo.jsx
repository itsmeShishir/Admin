import React from 'react'
import { Link } from 'react-router-dom';
function SlideTwo() {
  return (
    <>
    <div className="mobile-menu md:hidden">
        <div className="mobile-menu-bar">
            <Link to="" className="flex mr-auto">
                <img alt="" className="w-6"
                    src="https://rubick.left4code.com/dist/images/logo.svg"/>
            </Link>
            <Link to="" className="mobile-menu-toggler">
                <i data-lucide="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i>
            </Link>
        </div>
        <div className="scrollable">
            <Link to="" className="mobile-menu-toggler">
                <i data-lucide="x-circle" className="w-8 h-8 text-white transform -rotate-90"></i>
            </Link>
            <ul className="scrollable__content py-2">
                <li>
                    <Link to="" className="menu menu--active">
                        <div className="menu__icon">
                            <i data-lucide="home"></i>
                        </div>
                        <div className="menu__title">
                            Dashboard
                            <i data-lucide="chevron-down" className="menu__sub-icon transform rotate-180"></i>
                        </div>
                    </Link>
                    <ul className="menu__sub-open">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="menu menu--active">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Overview 1
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="box"></i>
                        </div>
                        <div className="menu__title">
                            Menu Layout
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dashboard-overview-1"
                                className="menu menu--active">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Side Menu
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/simple-menu/light/dashboard-overview-1"
                                className="menu menu--active">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Simple Menu
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/top-menu/light/dashboard-overview-1"
                                className="menu menu--active">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Top Menu
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="shopping-bag"></i>
                        </div>
                        <div className="menu__title">
                            E-Commerce
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/categories" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Categories
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/add-product" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Add Product
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Products
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/product-list"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Product List</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/product-grid"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Product Grid</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Transactions
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/transaction-list"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Transaction List</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/transaction-detail"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Transaction Detail</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Sellers
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/seller-list"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Seller List</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/seller-detail"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Seller Detail</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/reviews" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Reviews
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="https://rubick.left4code.com/page/side-menu/light/inbox" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="inbox"></i>
                        </div>
                        <div className="menu__title">
                            Inbox
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="https://rubick.left4code.com/page/side-menu/light/file-manager" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="hard-drive"></i>
                        </div>
                        <div className="menu__title">
                            File Manager
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="https://rubick.left4code.com/page/side-menu/light/point-of-sale" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="credit-card"></i>
                        </div>
                        <div className="menu__title">
                            Point of Sale
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="https://rubick.left4code.com/page/side-menu/light/chat" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="message-square"></i>
                        </div>
                        <div className="menu__title">
                            Chat
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="https://rubick.left4code.com/page/side-menu/light/post" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="file-text"></i>
                        </div>
                        <div className="menu__title">
                            Post
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="https://rubick.left4code.com/page/side-menu/light/calendar" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="calendar"></i>
                        </div>
                        <div className="menu__title">
                            Calendar
                        </div>
                    </Link>
                </li>
                <li className="menu__devider my-6"></li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="edit"></i>
                        </div>
                        <div className="menu__title">
                            Crud
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/crud-data-list" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Data List
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/crud-form" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Form
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="users"></i>
                        </div>
                        <div className="menu__title">
                            Users
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/users-layout-1" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Layout 1
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/users-layout-2" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Layout 2
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/users-layout-3" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Layout 3
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="trello"></i>
                        </div>
                        <div className="menu__title">
                            Profile
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/profile-overview-1" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Overview 1
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="layout"></i>
                        </div>
                        <div className="menu__title">
                            Pages
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Wizards
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wizard-layout-1"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wizard-layout-2"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wizard-layout-3"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 3</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Blog
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/blog-layout-1"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/blog-layout-2"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/blog-layout-3"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 3</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Pricing
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/pricing-layout-1"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/pricing-layout-2"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 2</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Invoice
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/invoice-layout-1"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/invoice-layout-2"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 2</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    FAQ
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/faq-layout-1"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/faq-layout-2"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/faq-layout-3"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Layout 3</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/login/light/login" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Login
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/login/light/register" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Register
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/main/light/error-page" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Error Page
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/update-profile" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Update profile
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/change-password" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Change Password
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu__devider my-6"></li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="inbox"></i>
                        </div>
                        <div className="menu__title">
                            Components
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Table
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/regular-table"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Regular Table</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/tabulator" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Tabulator</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Overlay
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/modal" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Modal</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/slide-over" className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Slide Over</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/notification"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Notification</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/tab" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Tab
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/accordion" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Accordion
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/button" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Button
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/alert" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Alert
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/progress-bar" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Progress Bar
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/tooltip" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Tooltip
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/dropdown" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Dropdown
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/typography" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Typography
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/icon" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Icon
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/loading-icon" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Loading Icon
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="sidebar"></i>
                        </div>
                        <div className="menu__title">
                            Forms
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/regular-form" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Regular Form
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/datepicker" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Datepicker
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/tom-select" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Tom Select
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/file-upload" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    File Upload
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Wysiwyg Editor
                                    <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                                </div>
                            </Link>
                            <ul className="">
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wysiwyg-editor-classNameic"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">classNameic</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wysiwyg-editor-inline"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Inline</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wysiwyg-editor-balloon"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Balloon</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wysiwyg-editor-balloon-block"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Balloon Block</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://rubick.left4code.com/page/side-menu/light/wysiwyg-editor-document"
                                        className="menu">
                                        <div className="menu__icon">
                                            <i data-lucide="zap"></i>
                                        </div>
                                        <div className="menu__title">Document</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/validation" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Validation
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon">
                            <i data-lucide="hard-drive"></i>
                        </div>
                        <div className="menu__title">
                            Widgets
                            <i data-lucide="chevron-down" className="menu__sub-icon "></i>
                        </div>
                    </Link>
                    <ul className="">
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/chart" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Chart
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/slider" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Slider
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://rubick.left4code.com/page/side-menu/light/image-zoom" className="menu">
                                <div className="menu__icon">
                                    <i data-lucide="activity"></i>
                                </div>
                                <div className="menu__title">
                                    Image Zoom
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default SlideTwo