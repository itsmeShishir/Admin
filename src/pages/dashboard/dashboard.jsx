import React from 'react'
import Side from '../../components/dashboard/Side'
import SlideTwo from '../../components/dashboard/Slidetwo'
import { Link } from 'react-router-dom'
import { BsFillBellFill , BsCartCheckFill } from 'react-icons/bs';
import { AiOutlineReload } from "react-icons/ai";
function Dashboard() {
  return (
    <>
    <div className="py-1">
        <SlideTwo/>
        <Side><div className="content">
            <div className="top-bar">
                <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                    </ol>
                </nav>
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">
                        <input type="text" className="search__input form-control border-transparent"
                            placeholder="Search..."/>
                        <i data-lucide="search" className="search__icon dark:text-slate-500"></i>
                    </div>
                    <Link className="notification sm:hidden" to="">
                        <i data-lucide="search" className="notification__icon dark:text-slate-500"></i>
                    </Link>
                    <div className="search-result">
                        <div className="search-result__content">
                            <div className="search-result__content__title">Pages</div>
                            <div className="mb-5">
                                <Link to="" className="flex items-center">
                                    <div
                                        className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                                        <i className="w-4 h-4" data-lucide="inbox"></i>
                                    </div>
                                    <div className="ml-3">Mail Settings</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div
                                        className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                                        <i className="w-4 h-4" data-lucide="users"></i>
                                    </div>
                                    <div className="ml-3">Users & Permissions</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div
                                        className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                                        <i className="w-4 h-4" data-lucide="credit-card"></i>
                                    </div>
                                    <div className="ml-3">Transactions Report</div>
                                </Link>
                            </div>
                            <div className="search-result__content__title">Users</div>
                            <div className="mb-5">
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-6.jpg"/>
                                    </div>
                                    <div className="ml-3">Christian Bale</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        christianbale@left4code.com</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-15.jpg"/>
                                    </div>
                                    <div className="ml-3">Al Pacino</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        alpacino@left4code.com</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-6.jpg"/>
                                    </div>
                                    <div className="ml-3">Denzel Washington</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        denzelwashington@left4code.com</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-14.jpg"/>
                                    </div>
                                    <div className="ml-3">Al Pacino</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        alpacino@left4code.com</div>
                                </Link>
                            </div>
                            <div className="search-result__content__title">Products</div>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-13.jpg"/>
                                </div>
                                <div className="ml-3">Nike Tanjun</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Sport &amp; Outdoor
                                </div>
                            </Link>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-15.jpg"/>
                                </div>
                                <div className="ml-3">Dell XPS 13</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop
                                </div>
                            </Link>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-5.jpg"/>
                                </div>
                                <div className="ml-3">Dell XPS 13</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">PC &amp; Laptop
                                </div>
                            </Link>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-14.jpg"/>
                                </div>
                                <div className="ml-3">Samsung Q90 QLED TV</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Electronic</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown mr-auto sm:mr-6">
                    <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button"
                        aria-expanded="false" data-tw-toggle="dropdown">
                            <BsFillBellFill />
                        <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i>
                    </div>
                    <div className="notification-content pt-2 dropdown-menu">
                        <div className="notification-content__box dropdown-content">
                            <div className="notification-content__title">Notifications</div>
                            <div className="cursor-pointer relative flex items-center ">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-6.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="" className="font-medium truncate mr-5">Christian Bale</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has roots in a piece of classNameical Latin
                                        literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-15.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="" className="font-medium truncate mr-5">Al Pacino</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has roots in a piece of classNameical Latin
                                        literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-6.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="" className="font-medium truncate mr-5">Denzel Washington</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text
                                        of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry&#039;s standard dummy text ever since the 1500</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-14.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="" className="font-medium truncate mr-5">Al Pacino</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">06:05 AM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has roots in a piece of classNameical Latin
                                        literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-13.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="" className="font-medium truncate mr-5">Russell Crowe</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown w-8 h-8">
                    <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                        role="button" aria-expanded="false" data-tw-toggle="dropdown">
                        <img alt=""
                            src="https://rubick.left4code.com/dist/images/profile-1.jpg"/>
                    </div>
                    <div className="dropdown-menu w-56">
                        <ul className="dropdown-content bg-primary text-white">
                            <li className="p-2">
                                <div className="font-medium">Christian Bale</div>
                                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">DevOps Engineer</div>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-white/[0.08]"/>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item hover:bg-white/5">
                                    <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item hover:bg-white/5">
                                    <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item hover:bg-white/5">
                                    <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset Password
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item hover:bg-white/5">
                                    <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-white/[0.08]"/>
                            </li>
                            <li>
                                <Link to="" className="dropdown-item hover:bg-white/5">
                                    <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i> Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-9">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">General Report</h2>
                                <Link to="" className="ml-auto flex items-center text-primary">
                                    <AiOutlineReload />
                                    <i className="w-2 h-1 mr-1"></i> Reload Data
                                </Link>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <BsCartCheckFill/>
                                                <i data-lucide="shopping-cart"
                                                    className="report-box__icon text-primary"></i>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer"
                                                        title="33% Higher than last month">
                                                        33% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                                            <div className="text-base text-slate-500 mt-1">Item Sales</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="credit-card" className="report-box__icon text-pending"></i>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-danger tooltip cursor-pointer"
                                                        title="2% Lower than last month">
                                                        2% <i data-lucide="chevron-down" className="w-4 h-4 ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                                            <div className="text-base text-slate-500 mt-1">New Orders</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="monitor" className="report-box__icon text-warning"></i>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer"
                                                        title="12% Higher than last month">
                                                        12% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                                            <div className="text-base text-slate-500 mt-1">Total Products</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-lucide="user" className="report-box__icon text-success"></i>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer"
                                                        title="22% Higher than last month">
                                                        22% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                                            <div className="text-base text-slate-500 mt-1">Unique Visitor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">Weekly Top Products</h2>
                                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <button className="btn box flex items-center text-slate-600 dark:text-slate-300">
                                        <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to
                                        Excel
                                    </button>
                                    <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300">
                                        <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to
                                        PDF
                                    </button>
                                </div>
                            </div>
                            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table className="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-nowrap">IMAGES</th>
                                            <th className="whitespace-nowrap">PRODUCT NAME</th>
                                            <th className="text-center whitespace-nowrap">STOCK</th>
                                            <th className="text-center whitespace-nowrap">STATUS</th>
                                            <th className="text-center whitespace-nowrap">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-14.jpg"
                                                            title="Uploaded at 2 July 2020"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-6.jpg"
                                                            title="Uploaded at 26 June 2021"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-8.jpg"
                                                            title="Uploaded at 21 December 2020"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="" className="font-medium whitespace-nowrap">Apple MacBook Pro
                                                    13</Link>
                                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp;
                                                    Laptop</div>
                                            </td>
                                            <td className="text-center">98</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success">
                                                    <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                                </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <Link className="flex items-center mr-3" to="">
                                                        <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                                    </Link>
                                                    <Link className="flex items-center text-danger" to="">
                                                        <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-9.jpg"
                                                            title="Uploaded at 10 September 2020"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-3.jpg"
                                                            title="Uploaded at 26 September 2021"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-11.jpg"
                                                            title="Uploaded at 16 April 2022"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="" className="font-medium whitespace-nowrap">Dell XPS 13</Link>
                                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp;
                                                    Laptop</div>
                                            </td>
                                            <td className="text-center">58</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success">
                                                    <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                                </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <Link className="flex items-center mr-3" to="">
                                                        <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                                    </Link>
                                                    <Link className="flex items-center text-danger" to="">
                                                        <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-7.jpg"
                                                            title="Uploaded at 21 July 2022"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-1.jpg"
                                                            title="Uploaded at 15 June 2021"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-7.jpg"
                                                            title="Uploaded at 30 October 2021"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="" className="font-medium whitespace-nowrap">Sony Master Series
                                                    A9G</Link>
                                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Electronic
                                                </div>
                                            </td>
                                            <td className="text-center">102</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success">
                                                    <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                                </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <Link className="flex items-center mr-3" to="">
                                                        <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                                    </Link>
                                                    <Link className="flex items-center text-danger" to="">
                                                        <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-7.jpg"
                                                            title="Uploaded at 6 October 2020"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-5.jpg"
                                                            title="Uploaded at 4 July 2022"/>
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt=""
                                                            className="tooltip rounded-full"
                                                            src="https://rubick.left4code.com/dist/images/preview-13.jpg"
                                                            title="Uploaded at 29 July 2021"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="" className="font-medium whitespace-nowrap">Nike Tanjun</Link>
                                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Sport &amp;
                                                    Outdoor</div>
                                            </td>
                                            <td className="text-center">50</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-success">
                                                    <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                                </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <Link className="flex items-center mr-3" to="">
                                                        <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                                    </Link>
                                                    <Link className="flex items-center text-danger" to="">
                                                        <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                <nav className="w-full sm:w-auto sm:mr-auto">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                <i className="w-4 h-4" data-lucide="chevrons-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                <i className="w-4 h-4" data-lucide="chevron-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">...</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">1</Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link className="page-link" to="#">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">3</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">...</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                <i className="w-4 h-4" data-lucide="chevron-right"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">
                                                <i className="w-4 h-4" data-lucide="chevrons-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <select className="w-20 form-select box mt-3 sm:mt-0">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>35</option>
                                    <option>50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-3">
                    <div className="2xl:border-l -mb-10 pb-10">
                        <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3 2xl:mt-8">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">Transactions</h2>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-5.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Denzel Washington</div>
                                                <div className="text-slate-500 text-xs mt-0.5">2 July 2020</div>
                                            </div>
                                            <div className="text-success">+$171</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-9.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Denzel Washington</div>
                                                <div className="text-slate-500 text-xs mt-0.5">10 September 2020</div>
                                            </div>
                                            <div className="text-success">+$53</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-4.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Al Pacino</div>
                                                <div className="text-slate-500 text-xs mt-0.5">21 July 2022</div>
                                            </div>
                                            <div className="text-success">+$28</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-6.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Tom Cruise</div>
                                                <div className="text-slate-500 text-xs mt-0.5">6 October 2020</div>
                                            </div>
                                            <div className="text-success">+$63</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-2.jpg"/>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Sylvester Stallone</div>
                                                <div className="text-slate-500 text-xs mt-0.5">21 July 2020</div>
                                            </div>
                                            <div className="text-danger">-$21</div>
                                        </div>
                                    </div>
                                    <Link to=""
                                        className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500">View
                                        More</Link>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">Recent Activities</h2>
                                    <Link to="" className="ml-auto text-primary truncate">Show More</Link>
                                </div>
                                <div
                                    className="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div
                                            className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-10.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Al Pacino</div>
                                                <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-slate-500 mt-1">Has joined the team</div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div
                                            className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-4.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Kevin Spacey</div>
                                                <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-slate-500">
                                                <div className="mt-1">Added 3 new photos</div>
                                                <div className="flex mt-2">
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in"
                                                        title="Apple MacBook Pro 13">
                                                        <img alt=""
                                                            className="rounded-md border border-white"
                                                            src="https://rubick.left4code.com/dist/images/preview-6.jpg"/>
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in"
                                                        title="Dell XPS 13">
                                                        <img alt=""
                                                            className="rounded-md border border-white"
                                                            src="https://rubick.left4code.com/dist/images/preview-14.jpg"/>
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in"
                                                        title="Sony Master Series A9G">
                                                        <img alt=""
                                                            className="rounded-md border border-white"
                                                            src="https://rubick.left4code.com/dist/images/preview-7.jpg"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-x text-slate-500 text-xs text-center my-4">12 November</div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div
                                            className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-7.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Angelina Jolie</div>
                                                <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-slate-500 mt-1">Has changed <Link className="text-primary"
                                                    to="">Nikon Z6</Link> price and description</div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div
                                            className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt=""
                                                    src="https://rubick.left4code.com/dist/images/profile-7.jpg"/>
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">Morgan Freeman</div>
                                                <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                            </div>
                                            <div className="text-slate-500 mt-1">Has changed 
                                            <Link className="text-primary"
                                                    to="">Nikon Z6</Link> description</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> </Side>
    </div>
    </>
   
  )
}

export default Dashboard