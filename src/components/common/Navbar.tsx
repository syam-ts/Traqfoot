import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);

    return (
        <div>
            <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <img className="h-7 w-auto" src="logo.webp" alt="" />
                            </a>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <p className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                <Link to="/dashboard">Dashboard</Link>
                            </p>

                            <p className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                <Link to="/addSensor">Add new Sensor</Link>
                            </p>

                            <p className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
                                <Link to="/about">About</Link>
                            </p>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <div
                               onClick={() => setOpenNavbar(prev=> !prev)}
                             className="w-10 h-10 p-1 cursor-pointer rounded-full text-center font-bold py-2 ring-2 ring-gray-300 dark:ring-gray-500">
                                <span>H</span>

                                {
                                    openNavbar && (
                                        <div>
                                
                                    <ul
                                        role="menu"
                                        data-popover="menu"
                                        data-popover-placement="bottom"
                                        className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
                                    >
                                        <li
                                            role="menuitem"
                                            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                        >
                                           <Link to='/profile'>
                                             Profile
                                           </Link>
                                        </li>
                                        <li
                                            role="menuitem"
                                            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                        >
                                           Logout
                                        </li>
                                    
                                    </ul>
                                </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
