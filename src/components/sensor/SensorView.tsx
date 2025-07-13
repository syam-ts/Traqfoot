import { useEffect, useState } from "react";
import type { Sensor } from "../../configs/interfaces/Sensor";
import { SensorService } from "../../services/sensorService";
import { useParams } from "react-router";

const SensorView = () => {
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
        const viewSensor = async (sensor_id: string| undefined) => {
            try {
                const response = await SensorService.viewSensor(sensor_id);

                console.log("Response: ", response.sensor);
                if (!response.success) {
                    alert(response.message);
                } else {
                    setSensor(response.sensor);
                }
            } catch (error) {
                console.log("ERROR: ", error);
            }
        };
        viewSensor(sensor_id);
    }, []);

    console.log("The sensor ", sensor);

    return (
        <div>
           {
            sensor.sensorName !== "" &&( 
                 <div className="mx-center text-center py-44 font-extrabold ">
                <ul className="border p-44">
                    <li> {sensor.sensorName}</li>
                    <li> {sensor.sensorLocation}</li>
                    <li>{sensor.createdAt}</li>
                    <li>{sensor.timestamp}</li>
                    <li>count: {sensor.count},</li>
                </ul>
            </div>
            )
           }
        </div>
    );
};

export default SensorView;
