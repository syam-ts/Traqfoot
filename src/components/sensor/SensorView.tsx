import { useEffect, useState } from "react";
import type { Sensor } from "../../configs/interfaces/Sensor";
import { SensorService } from "../../services/sensorService";
import { useParams } from "react-router";
import { Spinner } from "../../features/spinner/Spinner";

const SensorView = () => {
    const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);

    const [sensor, setSensor] = useState<Sensor>({
        sensorName: "",
        sensorLocation: "",
        userId: "",
        createdAt: "",
        timestamp: "",
        count: 0,
    });

    const { sensor_id } = useParams<{ sensor_id: string }>();

    useEffect(() => {
        const viewSensor = async (sensor_id: string | undefined) => {
            try {
                setLoadingSpinner(true);
                const response = await SensorService.viewSensor(sensor_id);

                // console.log("Response: ", response.sensor);
                if (!response.success) {
                    setLoadingSpinner(false);
                    alert(response.message);
                } else {
                    setLoadingSpinner(false);
                    setSensor(response.sensor);
                }
            } catch (error) {
                console.log("ERROR: ", error);
            }
        };
        viewSensor(sensor_id);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-36">
            {loadingSpinner && <Spinner />}
            {sensor.sensorName !== "" && (
                <div className="max-w-2xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 mb-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                                Live Sensor
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {sensor.sensorName}
                        </h1>
                        <p className="text-lg text-gray-600">
                            Real-time monitoring dashboard
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 mb-8 overflow-hidden">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 px-8 py-12 text-center text-white">
                            <p className="text-sm opacity-80 mb-2 uppercase tracking-wide">
                                Current Count
                            </p>
                            <p className="text-6xl font-bold mb-4">
                                {sensor.count.toLocaleString()}
                            </p>
                            <div className="w-24 h-1 bg-white/30 rounded-full mx-auto"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
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
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                                        Location
                                    </h3>
                                    <p className="text-xl font-semibold text-gray-900">
                                        {sensor.sensorLocation}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                                        Created
                                    </h3>
                                    <p className="text-xl font-semibold text-gray-900">
                                        {new Date(sensor.createdAt).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-200">
                                    <svg
                                        className="w-6 h-6 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                                        Last Update
                                    </h3>
                                    <p className="text-xl font-semibold text-gray-900">
                                        {new Date(sensor.timestamp).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-600 font-medium">
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors duration-200"
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
                            <span>Back to Sensors</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SensorView;
