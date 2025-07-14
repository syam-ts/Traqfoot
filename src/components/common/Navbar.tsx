import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signOutUser } from "../../redux/slices/userSlice";

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const singout = () => {
        try {
            dispatch(signOutUser());
            navigate('/login'); 
        } catch (error) {
            console.log('ERROR: ',error);
        }
    }

    return (
        <div>
            <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-200/50 bg-white/90 backdrop-blur-md py-4 shadow-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex shrink-0">
                            <Link to="/dashboard" className="flex items-center space-x-2 group">
                                <div className="w-8 h-8 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200">
                                    <img className="h-5 w-auto" src="logo.webp" alt="Logo" />
                                </div>
                                <span className="text-xl font-bold text-gray-900 hidden sm:block">Traqfoot</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:space-x-1">
                            <Link 
                                to="/dashboard"
                                className="inline-flex items-center px-4 py-2 text-md font-medium text-gray-700 rounded-2xl transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                Dashboard
                            </Link>

                            <Link 
                                to="/addSensor"
                                className="inline-flex items-center px-4 py-2 text-md font-medium text-gray-700 rounded-2xl transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Sensor
                            </Link>

                            <Link 
                                to="/about"
                                className="inline-flex items-center px-4 py-2 text-md font-medium text-gray-700 rounded-2xl transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                About
                            </Link>
                        </div>

                        {/* User Menu */}
                        <div className="flex items-center justify-end">
                            <div className="relative">
                                <button
                                    onClick={() => setOpenNavbar(prev => !prev)}
                                    className="w-10 h-10 bg-gray-800 rounded-2xl flex items-center justify-center text-white font-semibold hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                >
                                    <span className="text-sm">H</span>
                                </button>

                                {/* Dropdown Menu */}
                                {openNavbar && (
                                    <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                                        {/* Mobile Navigation Links */}
                                        <div className="md:hidden border-b border-gray-100 pb-2 mb-2">
                                            <Link 
                                                to="/dashboard"
                                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                                onClick={() => setOpenNavbar(false)}
                                            >
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                </svg>
                                                Dashboard
                                            </Link>
                                            <Link 
                                                to="/addSensor"
                                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                                onClick={() => setOpenNavbar(false)}
                                            >
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                Add Sensor
                                            </Link>
                                            <Link 
                                                to="/about"
                                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                                onClick={() => setOpenNavbar(false)}
                                            >
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                About
                                            </Link>
                                        </div>

                                        {/* User Menu Items */}
                                        <Link 
                                            to='/profile'
                                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            onClick={() => setOpenNavbar(false)}
                                        >
                                            <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Profile
                                        </Link>
                                        
                                        <button
                                            onClick={() => {
                                                singout();
                                                setOpenNavbar(false);
                                            }}
                                            className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            Logout
                                        </button>
                                    </div>
                                )}

                                {/* Backdrop for closing dropdown */}
                                {openNavbar && (
                                    <div 
                                        className="fixed inset-0 z-40" 
                                        onClick={() => setOpenNavbar(false)}
                                    ></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;