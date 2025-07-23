import { Link, useNavigate } from "react-router";
import { UserService } from "../../services/userService";
import { signupValidation } from "../../Formik/signupValidation";
import { toast, Toaster } from "sonner";
import { Spinner } from "../../features/spinner/spinner";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
        const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
    

    const submitForm = async (
        infrastructure_name: string,
        email: string,
        mobile: number,
        password: string,
        since: number
    ): Promise<any> => {
        try {
            setLoadingSpinner(true)
            const response = await UserService.signupUser(
                infrastructure_name,
                email,
                mobile,
                password,
                since
            );

            console.log("rep", response);
            if (!response.success) {
                setLoadingSpinner(false)
                toast.error(response.message, {
                    style: {
                        backgroundColor: "red",
                        color: "white",
                        width: "10rem",
                        height: "3rem",
                    },
                    position: "top-center",
                });
            } else {
                setLoadingSpinner(false)
                navigate("/login");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
        signupValidation(submitForm);

    return (
        <div>
            {
                loadingSpinner && <Spinner />
            }
            <Toaster />
            <div className="min-h-screen flex">
                <div className="flex-1 flex items-center justify-center px-6 py-10">
                    <div className="max-w-md w-full">
                        <div className="text-center mb-8">
                            <div className="grid justify-center">
                                <div className="inline-flex items-center space-x-2 mb-6">
                                    <p className="text-2xl font-bold text-gray-900">Traqfoot</p>
                                </div>

                                <div className="inline-flex items-center space-x-2 mb-4">
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                                        Get Started
                                    </span>
                                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                </div>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-3">
                                Create Account
                            </h1>
                            <p className="text-gray-600">
                                Register your infrastructure for sensor monitoring
                            </p>
                            <div className="w-16 h-1 bg-gray-800 rounded-full mx-auto mt-4"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                            <form className="p-6 space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label className="flex items-center space-x-2 mb-2">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                            Infrastructure Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="infrastructure_name"
                                        onChange={handleChange}
                                        value={values.infrastructure_name}
                                        onBlur={handleBlur}
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl px-4 py-3 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="Enter your infrastructure name..."
                                    />
                                    {touched.infrastructure_name &&
                                        errors.infrastructure_name && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.infrastructure_name}
                                            </div>
                                        )}
                                </div>

                                <div>
                                    <label className="flex items-center space-x-2 mb-2">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                            Email Address
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl px-4 py-3 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="Enter your email address..."
                                    />
                                    {touched.email && errors.email && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="flex items-center space-x-2 mb-2">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                            Mobile Number
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        name="mobile"
                                        onChange={handleChange}
                                        value={values.mobile || ""}
                                        onBlur={handleBlur}
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl px-4 py-3 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="Enter your mobile number..."
                                    />
                                    {touched.mobile && errors.mobile && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.mobile}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="flex items-center space-x-2 mb-2">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl px-4 py-3 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="Create a secure password..."
                                    />
                                    {touched.password && errors.password && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="flex items-center space-x-2 mb-2">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                            Established Year
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        name="since"
                                        onChange={handleChange}
                                        value={values.since || "since"}
                                        onBlur={handleBlur}
                                        min="1900"
                                        max="2024"
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl px-4 py-3 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="e.g., 2020"
                                    />
                                    {touched.since && errors.since && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.since}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-800 text-white text-base font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-700 transform hover:scale-[1.01] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                    >
                                        <div className="flex items-center justify-center space-x-2">
                                            <span>Create Account</span>
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </form>

                            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">
                                        Already have an account?{" "}
                                        <Link
                                            to="/login"
                                            className="text-gray-800 font-medium hover:text-gray-700 transition-colors duration-200"
                                        >
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                        <div className="absolute top-32 right-20 w-12 h-12 bg-white rounded-full"></div>
                        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white rounded-full"></div>
                        <div className="absolute bottom-40 right-10 w-8 h-8 bg-white rounded-full"></div>
                    </div>

                    <div className="relative z-10 text-center text-white max-w-md px-8">
                        <div className="w-24 h-24 bg-white/20 rounded-3xl mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Join Our Platform</h2>
                        <p className="text-xl opacity-90 mb-8">
                            Start monitoring your infrastructure with advanced sensor
                            technology and real-time analytics
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">Quick Setup</span>
                            </div>
                            <div className="w-px h-4 bg-white/30"></div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">24/7 Monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
