import axios from "axios";

export const SensorService = {
    addNewSensor: async (sensorName: string, sensorLocation: string) => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.post(
                "http://localhost:3000/sensor/new",
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
            if (!err.response.data.success) {
                return err.response.data;
            }
        }
    },

    getAllSensors: async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.get(
                "http://localhost:3000/sensor/fetchAll", 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('da', data)
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
                `http://localhost:3000/sensor/view/${sensor_id}`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('da', data)
            return data;
        } catch (err: any) {
            if (!err.response.data.success) {
                return err.response.data;
            }
        }
    },
};
