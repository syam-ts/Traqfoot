import { Link, useNavigate } from "react-router";
import { UserService } from "../../services/userService";
import { signupValidation } from "../../Formik/signupValidation";

const Signup = () => {
    const navigate = useNavigate();

    const submitForm = async (
        infrastructure_name: string,
        email: string,
        mobile: number,
        password: string,
        since: number
    ): Promise<any> => {
        try {
            const response = await UserService.signupUser(
                infrastructure_name,
                email,
                mobile,
                password,
                since
            );

            console.log("rep", response);
            if (!response.success) {
                alert(response.message);
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
        signupValidation(submitForm);

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <img
                src="https://cdn.pixabay.com/photo/2024/04/05/05/17/airport-8676548_1280.jpg"
                className="w-screen h-screen absolute"
                alt="track-crowd image"
            />
            <div className="mx-auto my-10 max-w-md relative backdrop-blur-[4px] px-4 py-20 mt-44 text-gray-700 sm:px-8">
                <div className="mb-6">
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            type="text"
                            name="infrastructure_name"
                            onChange={handleChange}
                            value={values.infrastructure_name}
                            onBlur={handleBlur}
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Infrastructure Name"
                        />
                    </div>
                    {touched.infrastructure_name && errors.infrastructure_name && (
                        <div className="text-red-500 text-center font-sans text-sm">
                            {errors.infrastructure_name}
                        </div>
                    )}
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Email"
                        />
                    </div>
                    {touched.email && errors.email && (
                        <div className="text-red-500 text-center font-sans text-sm">
                            {errors.email}
                        </div>
                    )}
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            type="number"
                            name="mobile"
                            onChange={handleChange}
                            value={values.mobile || "mobile"}
                            onBlur={handleBlur}
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Mobile"
                        />
                    </div>
                    {touched.mobile && errors.mobile && (
                        <div className="text-red-500 text-center font-sans text-sm">
                            {errors.mobile}
                        </div>
                    )}
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>
                    {touched.password && errors.password && (
                        <div className="text-red-500 text-center font-sans text-sm">
                            {errors.password}
                        </div>
                    )}
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            type="number"
                            name="since"
                            onChange={handleChange}
                            value={values.since || "since"}
                            onBlur={handleBlur}
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Since"
                        />
                    </div>
                    {touched.since && errors.since && (
                        <div className="text-red-500 text-center font-sans text-sm">
                            {errors.since}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="mb-6 relative bg-blue-600 px-8 py-2 font-medium text-white hover:bg-blue-800"
                >
                    Signup
                </button>

                <div className="mx-28">
                    <p className="text-black text-sm">
                        <Link to="/login">Login to existing Account</Link>
                    </p>
                    <hr className="bg-white" />
                </div>
            </div>
        </form>
    );
};

export default Signup;
