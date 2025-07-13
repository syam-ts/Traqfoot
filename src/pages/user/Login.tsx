import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserService } from "../../services/userService";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/slices/userSlice";

interface FormData {
    email: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
      
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeFormData = (event: any): void => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitForm = async (): Promise<any> => {
        try {
            const { email, password } = formData;
            const response = await UserService.loginUser(email, password);

            console.log("rep", response);
            if (!response.success) {
                alert(response.message);
            } else {
                localStorage.setItem("token", response.token);
                dispatch(signInUser(response.user))
                navigate("/dashboard");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    return (
        <div className="flex">
            <img
                src="https://cdn.pixabay.com/photo/2024/04/05/05/17/airport-8676548_1280.jpg"
                className="w-screen h-screen absolute"
                alt="track-crowd image"
            />
            <div className="mx-auto my-10 max-w-md relative px-4 py-64 text-gray-700 sm:px-8">
                <div className="mb-6">
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            onChange={(e) => changeFormData(e)}
                            type="email"
                            name="email"
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Email"
                        />
                    </div>
                    <div className="focus-within:border-b-blue-500 relative mb-3 w-[20rem] flex overflow-hidden border-b-2 transition">
                        <input
                            onChange={(e) => changeFormData(e)}
                            type="password"
                            name="password"
                            className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <button
                    onClick={() => submitForm()}
                    className="mb-6 relative bg-blue-600 px-8 py-2 font-medium text-white hover:bg-blue-800"
                >
                    Login
                </button>

                <div className="mx-28">
                    <p className="text-black text-sm">
                        <Link to="/signup">Create new account</Link>
                    </p>
                    <hr className="bg-white" />
                </div>
            </div>
        </div>
    );
};

export default Login;
