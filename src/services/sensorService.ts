import axios from "axios";
import { config } from "../configs/helper/config"; 

const BACKEND_URL = config.BACKEND_URL;

export const SensorService = {
    addNewSensor: async (sensorName: string, sensorLocation: string) => {
        try { 
            const token = localStorage.getItem("token");
            const { data } = await axios.post(
                `${BACKEND_URL}/sensor/new`,
                {
                    sensorName,
                    sensorLocation,
                },
                {
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return data;
        } catch (err: any) { 
                return err.response.data
        }
    },

    getAllSensors: async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get(`${BACKEND_URL}/sensor/fetchAll`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("da", data);
            return data;
        } catch (err: any) {
            if (!err.response.data.success) {
                return err.response.data;
            }
        }
    },

    viewSensor: async (sensor_id: string | undefined) => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get(
                `${BACKEND_URL}/sensor/view/${sensor_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("da", data);
            return data;
        } catch (err: any) {
            if (!err.response.data.success) {
                return err.response.data;
            }
        }
    },
};
