import React from 'react'
import { Link } from 'react-router-dom'


function UserDetails() {
  return (
    <>
        <div className="content">
            <div className="top-bar">
                <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">Application</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">
                        <input type="text" className="search__input form-control border-transparent"
                            placeholder="Search..."/>
                        <i data-lucide="search" className="search__icon dark:text-slate-500"></i>
                    </div>
                    <Link className="notification sm:hidden" href="">
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
                                        <img alt="Midone - HTML Admin Template" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-11.jpg"/>
                                    </div>
                                    <div className="ml-3">Brad Pitt</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        bradpitt@left4code.com</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-10.jpg"/>
                                    </div>
                                    <div className="ml-3">Johnny Depp</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        johnnydepp@left4code.com</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-14.jpg"/>
                                    </div>
                                    <div className="ml-3">Tom Hanks</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        tomhanks@left4code.com</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full"
                                            src="https://rubick.left4code.com/dist/images/profile-1.jpg"/>
                                    </div>
                                    <div className="ml-3">Kate Winslet</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                                        katewinslet@left4code.com</div>
                                </Link>
                            </div>
                            <div className="search-result__content__title">Products</div>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-1.jpg"/>
                                </div>
                                <div className="ml-3">Samsung Q90 QLED TV</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Electronic</div>
                            </Link>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-2.jpg"/>
                                </div>
                                <div className="ml-3">Samsung Galaxy S20 Ultra</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Smartphone &amp;
                                    Tablet</div>
                            </Link>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-6.jpg"/>
                                </div>
                                <div className="ml-3">Samsung Q90 QLED TV</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Electronic</div>
                            </Link>
                            <Link to="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/preview-12.jpg"/>
                                </div>
                                <div className="ml-3">Nike Tanjun</div>
                                <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Sport &amp; Outdoor
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown mr-auto sm:mr-6">
                    <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button"
                        aria-expanded="false" data-tw-toggle="dropdown">
                        <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i>
                    </div>
                    <div className="notification-content pt-2 dropdown-menu">
                        <div className="notification-content__box dropdown-content">
                            <div className="notification-content__title">Notifications</div>
                            <div className="cursor-pointer relative flex items-center ">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-11.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="javascript:;" className="font-medium truncate mr-5">Brad Pitt</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-10.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="javascript:;" className="font-medium truncate mr-5">Johnny Depp</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has roots in a piece of classNameical Latin
                                        literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-14.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="javascript:;" className="font-medium truncate mr-5">Tom Hanks</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact
                                        that a reader will be distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-1.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="javascript:;" className="font-medium truncate mr-5">Kate Winslet</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of
                                        passages of Lorem Ipsum available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Midone - HTML Admin Template" className="rounded-full"
                                        src="https://rubick.left4code.com/dist/images/profile-9.jpg"/>
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600">
                                    </div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <Link to="javascript:;" className="font-medium truncate mr-5">Kate Winslet</Link>
                                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has roots in a piece of classNameical Latin
                                        literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown w-8 h-8">
                    <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                        role="button" aria-expanded="false" data-tw-toggle="dropdown">
                        <img alt="Midone - HTML Admin Template"
                            src="https://rubick.left4code.com/dist/images/profile-15.jpg"/>
                    </div>
                    <div className="dropdown-menu w-56">
                        <ul className="dropdown-content bg-primary text-white">
                            <li className="p-2">
                                <div className="font-medium">Brad Pitt</div>
                                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">Backend Engineer</div>
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
            <h2 className="intro-y text-lg font-medium mt-10">Data List Layout</h2>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                    <button className="btn btn-primary shadow-md mr-2">Add New Product</button>
                    <div className="dropdown">
                        <button className="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                            <span className="w-5 h-5 flex items-center justify-center">
                                <i className="w-4 h-4" data-lucide="plus"></i>
                            </span>
                        </button>
                        <div className="dropdown-menu w-40">
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="" className="dropdown-item">
                                        <i data-lucide="printer" className="w-4 h-4 mr-2"></i> Print
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item">
                                        <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to Excel
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item">
                                        <i data-lucide="file-text" className="w-4 h-4 mr-2"></i> Export to PDF
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                    <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                        <div className="w-56 relative text-slate-500">
                            <input type="text" className="form-control w-56 box pr-10" placeholder="Search..."/>
                            <i className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i>
                        </div>
                    </div>
                </div>
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                    <table className="table table-report -mt-2">
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
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-10.jpg"
                                                title="Uploaded at 22 December 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-2.jpg"
                                                title="Uploaded at 22 December 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-11.jpg"
                                                title="Uploaded at 22 December 2022"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Samsung Galaxy S20 Ultra</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet
                                    </div>
                                </td>
                                <td className="text-center">137</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-9.jpg"
                                                title="Uploaded at 3 April 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-13.jpg"
                                                title="Uploaded at 3 April 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-1.jpg"
                                                title="Uploaded at 3 April 2022"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Dell XPS 13</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp; Laptop</div>
                                </td>
                                <td className="text-center">215</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-5.jpg"
                                                title="Uploaded at 6 May 2020"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-14.jpg"
                                                title="Uploaded at 6 May 2020"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-3.jpg"
                                                title="Uploaded at 6 May 2020"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Sony Master Series A9G</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Electronic</div>
                                </td>
                                <td className="text-center">50</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-danger">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-5.jpg"
                                                title="Uploaded at 26 October 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-3.jpg"
                                                title="Uploaded at 26 October 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-13.jpg"
                                                title="Uploaded at 26 October 2022"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Nike Tanjun</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Sport &amp; Outdoor
                                    </div>
                                </td>
                                <td className="text-center">78</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-9.jpg"
                                                title="Uploaded at 2 February 2021"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-5.jpg"
                                                title="Uploaded at 2 February 2021"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-6.jpg"
                                                title="Uploaded at 2 February 2021"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Nikon Z6</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Photography</div>
                                </td>
                                <td className="text-center">117</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-2.jpg"
                                                title="Uploaded at 2 December 2021"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-8.jpg"
                                                title="Uploaded at 2 December 2021"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-3.jpg"
                                                title="Uploaded at 2 December 2021"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Nike Air Max 270</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Sport &amp; Outdoor
                                    </div>
                                </td>
                                <td className="text-center">65</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-15.jpg"
                                                title="Uploaded at 12 September 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-15.jpg"
                                                title="Uploaded at 12 September 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-1.jpg"
                                                title="Uploaded at 12 September 2022"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Nike Air Max 270</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Sport &amp; Outdoor
                                    </div>
                                </td>
                                <td className="text-center">50</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-4.jpg"
                                                title="Uploaded at 5 April 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-9.jpg"
                                                title="Uploaded at 5 April 2022"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-15.jpg"
                                                title="Uploaded at 5 April 2022"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Apple MacBook Pro 13</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp; Laptop</div>
                                </td>
                                <td className="text-center">186</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="intro-x">
                                <td className="w-40">
                                    <div className="flex">
                                        <div className="w-10 h-10 image-fit zoom-in">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-15.jpg"
                                                title="Uploaded at 11 April 2021"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-10.jpg"
                                                title="Uploaded at 11 April 2021"/>
                                        </div>
                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full"
                                                src="https://rubick.left4code.com/dist/images/preview-12.jpg"
                                                title="Uploaded at 11 April 2021"/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <Link to="" className="font-medium whitespace-nowrap">Oppo Find X2 Pro</Link>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet
                                    </div>
                                </td>
                                <td className="text-center">50</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center text-success">
                                        <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active
                                    </div>
                                </td>
                                <td className="table-report__action w-56">
                                    <div className="flex justify-center items-center">
                                        <Link className="flex items-center mr-3" href="javascript:;">
                                            <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit
                                        </Link>
                                        <Link className="flex items-center text-danger" href="javascript:;"
                                            data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
                                            <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                    <nav className="w-full sm:w-auto sm:mr-auto">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link className="page-link" href="#">
                                    <i className="w-4 h-4" data-lucide="chevrons-left"></i>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">
                                    <i className="w-4 h-4" data-lucide="chevron-left"></i>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">...</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">1</Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" href="#">2</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">3</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">...</Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">
                                    <i className="w-4 h-4" data-lucide="chevron-right"></i>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" href="#">
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
            <div id="delete-confirmation-modal" className="modal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="p-5 text-center">
                                <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i>
                                <div className="text-3xl mt-5">Are you sure?</div>
                                <div className="text-slate-500 mt-2">Do you really want to delete these records? <br/>This
                                    process cannot be undone.</div>
                            </div>
                            <div className="px-5 pb-8 text-center">
                                <button type="button" data-tw-dismiss="modal"
                                    className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                <button type="button" className="btn btn-danger w-24">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserDetails