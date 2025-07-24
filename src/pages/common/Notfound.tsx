import { Home, ArrowLeft, FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-7 pt-12">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                            Error 404
                        </span>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600">
                        The page you're looking for doesn't exist or has been moved
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden max-w-3xl mx-auto mb-8">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 px-8 py-8 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
                        <div className="relative z-10">
                            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                                <FileQuestion className="w-12 h-12" />
                            </div>
                            <h2 className="text-6xl font-bold mb-2">404</h2>
                            <div className="w-16 h-px bg-white/30 mx-auto mb-4"></div>
                            <p className="text-white/80">Oops! Something went wrong</p>
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                                We can't find that page
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
                                The page you are looking for might have been removed, had its
                                name changed, or is temporarily unavailable. Don't worry, it
                                happens to the best of us!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link to="/dashboard">
                                <button className="flex cursor-pointer items-center justify-center space-x-2 bg-gray-800 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-gray-700 transition-colors duration-200">
                                    <Home className="w-5 h-5" />
                                    <span>Go To Dashboard</span>
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="flex cursor-pointer items-center justify-center space-x-2 bg-gray-100 text-gray-800 py-3 px-6 rounded-2xl font-semibold hover:bg-gray-200 transition-colors duration-200 border border-gray-200">
                                    <ArrowLeft className="w-5 h-5" />
                                    <span>Go To Login</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
