import { Link } from "react-router";

interface Sensor {
    sensorName: string;
    sensorLocation: string;
    createdAt: string;
    timestamp: string;
    count: number;
}

interface SensorCardProps {
    sensors: Sensor[];
}

const SensorCard: React.FC<SensorCardProps> = ({ sensors }) => {
    
    return (
        <div className="flex flex-wrap mx-44 gap-2 ">
            {sensors.map((sensor: any) => (
                <div className="container bg-gradient-to-r  from-gray-300 to-gray-400 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                    <div className="text-3xl font-bold mb-4">{sensor.sensorName}</div>
                    <div className="text-lg mb-4">
                        Location:
                        <span className="text-black font-bold">
                            {sensor.sensorLocation}
                        </span>
                    </div>
                    <div className="text-base mb-4">Built: {sensor.createdAt}</div>

                    <div className="text-sm mt-4">
                        <p>
                            Valid until
                            <span className="font-semibold">
                                Last update: {sensor.timestamp}
                            </span>
                        </p>
                        <p className="text-xl font-bold text-black">
                            Count: {sensor.count}
                        </p>
                    </div>
                    <div className="pt-4">
                        <button
                            className=" cursor-pointer rounded-md bg-white text-black py-2 px-7 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                            type="button"
                        >
                            <Link to={`/sensor/${sensor._id}`}>
                            View
                            </Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SensorCard;
