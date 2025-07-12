import axios from "axios";

export const SensorService = {
    addNewSensor: async (sensorName: string, sensorLocation: string) => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await axios.post(
                "http://localhost:3000/sensor/new-sensor",
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
                "http://localhost:3000/sensor/fetch-allSensors", 
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
