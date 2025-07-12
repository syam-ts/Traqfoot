import { Link } from "react-router";

const Navbar = () => {
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
                                <Link to="/about">About</Link>
                            </p>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <a
                                className="hidden items-center justify-center rounded-full bg-white py-3 px-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                href="/login"
                            >
                                Profile
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
