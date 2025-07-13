import { useEffect, useState } from "react";
import SensorCard from "../../components/sensor/SensorCard";
import { SensorService } from "../../services/sensorService";

interface Sensors {
  sensorName: string;
  sensorLocation: string;
  createdAt: string;
  timestamp: string;
  count: number;
}

const Dashboard = () => {
  const [sensors, setSensors] = useState<Sensors[]>([
    {
      sensorName: "",
      sensorLocation: "",
      createdAt: "",
      timestamp: "",
      count: 0,
    },
  ]);

  useEffect(() => {
    const fetchAllSensors = async () => {
      try {
        const response = await SensorService.getAllSensors();

        console.log("Response: ", response.sensors);
        if (!response.success) {
          alert(response.message);
        } else {
          setSensors(response.sensors);
        }
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    fetchAllSensors();
  }, []);

 
  return (
    <div className="mt-[10rem] justify-center">
      {sensors.length > 1 ? (
        <div>
          <div className="text-center mb-12 py-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                Monitoring Dashboard
              </span>
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              All Sensors
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time monitoring and analytics for all your connected sensors
            </p>
            <div className="w-24 h-1 bg-gray-800 rounded-full mx-auto mt-6"></div>
          </div>
          <SensorCard sensors={sensors} />
        </div>
      ) : (
        <div className="text-3xl font-semibold text-gray-800 text-center mb-8 tracking-tight">
          No Sensor to Show
        </div>
      )}
    </div>
  );
};

export default Dashboard;
