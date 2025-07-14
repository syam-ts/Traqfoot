import { sensors } from "../../configs/constants/sensor";
import { SensorService } from "../../services/sensorService";
import { useNavigate } from "react-router-dom";
import { addSensorValidation } from "../../Formik/addSensorValidation";

const AddSensor = () => {
    const navigate = useNavigate();

    const submitForm = async (sensorName: string, sensorLocation: string) => {
        try {
            const response = await SensorService.addNewSensor(
                sensorName,
                sensorLocation
            );

            if (!response.success) {
                alert(response.message);
            } else {
                navigate("/dashboard");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
        addSensorValidation(submitForm);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-lg mx-auto px-6">
                <div className="text-center mb-7 pt-18">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                            Setup
                        </span>
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Add New Sensor
                    </h1>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                        Configure a new sensor to monitor traffic on your infrastructure
                        facilities
                    </p>
                    <div className="w-24 h-1 bg-gray-800 rounded-full mx-auto mt-6"></div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        <div>
                            <label className="flex items-center space-x-2 mb-3">
                                <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                    Sensor Type
                                </span>
                            </label>
                            <div className="relative">
                                <select
                                    name="sensorName"
                                    onChange={handleChange}
                                    value={values.sensorName}
                                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-2xl px-4 py-4 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 appearance-none cursor-pointer"
                                >
                                    <option value="">Select sensor type...</option>
                                    {sensors.map((sensor: string, index: number) => (
                                        <option key={index} value={sensor}>
                                            {sensor}
                                        </option>
                                    ))}
                                </select>
                                <svg
                                    className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            {touched.sensorName && errors.sensorName && (
                                <div className="mt-2 text-red-500 text-sm font-medium">
                                    {errors.sensorName}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="flex items-center space-x-2 mb-3">
                                <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                                    Installation Location
                                </span>
                            </label>
                            <input
                                type="text"
                                name="sensorLocation"
                                onChange={handleChange}
                                value={values.sensorLocation}
                                onBlur={handleBlur}
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-lg rounded-2xl px-4 py-4 transition duration-200 ease focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent hover:border-gray-300 placeholder:text-gray-400"
                                placeholder="Enter the sensor installation location..."
                            />
                            {touched.sensorLocation && errors.sensorLocation && (
                                <div className="mt-2 text-red-500 text-sm font-medium">
                                    {errors.sensorLocation}
                                </div>
                            )}
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white text-lg font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-700 transform hover:scale-[1.01] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                    <span>Add Sensor</span>
                                </div>
                            </button>
                        </div>
                    </form>

                    <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                Once added, your sensor will begin monitoring traffic
                                immediately
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="inline-flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        <span>Back to Dashboard</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddSensor;
