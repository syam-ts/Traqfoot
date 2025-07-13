import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { UserService } from "../../services/userService";
import { signInUser } from "../../redux/slices/userSlice";
import { loginValidation } from "../../Formik/loginValidation";
import { toast, Toaster } from "sonner";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitForm = async (email: string, password: string): Promise<any> => {
        try {
            const response = await UserService.loginUser(email, password);

            console.log("rep", response);
            if (!response.success) {
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
                localStorage.setItem("token", response.token);
                dispatch(signInUser(response.user));
                navigate("/dashboard");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
        loginValidation(submitForm);

    return (
        <div>
            <Toaster />
            <div className="min-h-screen flex">
                <div className="flex-1 flex items-center justify-center px-6 py-12">
                    <div className="max-w-md w-full">
                        <div className="text-center mb-12">
                            <div className="grid items-center space-x-2 mb-6">
                                <span className="text-2xl font-bold text-gray-900">
                                    Traqfoot
                                </span>
                            </div>

                            <div className="inline-flex items-center space-x-2 mb-1">
                                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                                    Welcome Back
                                </span>
                                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-3">Sign In</h1>
                            <p className="text-gray-600">
                                Access your sensor monitoring dashboard
                            </p>
                            <div className="w-16 h-1 bg-gray-800 rounded-full mx-auto mt-4"></div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                            <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="flex items-center space-x-2 mb-3">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
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
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-2xl px-4 py-4 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="Enter your email address..."
                                    />
                                </div>
                                {touched.email && errors.email && (
                                    <div className="text-red-500 text-center">{errors.email}</div>
                                )}
                                <div>
                                    <label className="flex items-center space-x-2 mb-3">
                                        <div className="w-5 h-5 bg-gray-800 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
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
                                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-2xl px-4 py-4 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                        placeholder="Enter your password..."
                                    />
                                </div>
                                {touched.password && errors.password && (
                                    <div className="text-red-500 text-center">
                                        {errors.password}
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-800 text-white text-lg font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-700 transform hover:scale-[1.01] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                    >
                                        <div className="flex items-center justify-center space-x-2">
                                            <button type="submit">Sign In</button>
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                ></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </form>

                            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">
                                        Don't have an account?
                                        <Link
                                            to="/signup"
                                            className="text-gray-800 font-medium hover:text-gray-700 transition-colors duration-200"
                                        >
                                            Create New Account
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    ></path>
                                </svg>
                                <span>
                                    Your data is protected with enterprise-grade security
                                </span>
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
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">
                            Monitor Your Infrastructure
                        </h2>
                        <p className="text-xl opacity-90 mb-8">
                            Real-time sensor tracking and analytics for smart infrastructure
                            management
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">Live Monitoring</span>
                            </div>
                            <div className="w-px h-4 bg-white/30"></div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">Real-time Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
