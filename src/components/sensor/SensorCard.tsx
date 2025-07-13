import { Link } from "react-router";
 

interface SensorCardProps {
    sensors: any[];
}

const SensorCard: React.FC<SensorCardProps> = ({ sensors }) => {
    return (
        <div className="flex flex-wrap w-[96rem] justify-center gap-6 space-y-12 mx-auto px-8 py-12 bg-white">
             
            {sensors.map((sensor) => (
                <div
                    key={sensor._id}
                    className="group relative bg-white/80 backdrop-blur-sm border border-white/100 rounded-3xl px-4 py-2 shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out max-w-xs w-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 via-gray-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                    <div className="relative z-10 mb-1">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Active Sensor
                                </span>
                            </div>
                            <div className="px-3 py-1 bg-black rounded-full text-white text-xs font-semibold">
                                Live
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors duration-300">
                            {sensor.sensorName}
                        </h3>
                    </div>

                    <div className="relative z-10 mb-1">
                        <div className="flex items-center space-x-3 py-2 px-2 bg-gradient-to-r from-gray-50 to-gray-50 rounded-2xl border border-gray-300">
                            <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white"
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
                                <p className="text-xs text-gray-500 uppercase tracking-wide">
                                    Location
                                </p>
                                <p className="text-lg font-semibold text-gray-900">
                                    {sensor.sensorLocation}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* count section */}
                    <div className="relative z-10 rounded-full">
                        <div className="text-center p-2 bg-gradient-to-br bg-black rounded-xl text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                            <div className="relative z-10">
                                <p className="text-sm opacity-90 ">Current Count</p>
                                <p className="text-3xl font-bold ">
                                    {sensor.count.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 space-y-2 mb-3 py-2">
                      
                        <div className="flex items-center justify-between p-1 bg-green-50 rounded-xl border border-green-100">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-700">Last Update</span>
                            </div>
                            <span className="text-sm font-medium text-green-900">
                                {new Date(sensor.timestamp).toLocaleString("en-US", {
                                            // year: "numeric",
                                            // month: "long",
                                            // day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                            </span>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <Link
                            to={`/sensor/${sensor._id}`}
                            className="group/btn relative w-full inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r bg-black to-gray-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 flex items-center space-x-2">
                                <span>View Details</span>
                                <svg
                                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </div>
                            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform transition-transform duration-1000 ease-out skew-x-12"></div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SensorCard;
