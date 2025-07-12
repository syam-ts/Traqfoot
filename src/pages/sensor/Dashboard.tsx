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
    }
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

console.log('en', sensors)
  return (
    <div className="mt-[18rem] justify-center">
      {
        sensors.length > 1 && (
          <SensorCard sensors={sensors} />
        )
      }
    </div>
  );
};

export default Dashboard;
