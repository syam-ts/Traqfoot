import axios from "axios";
import { config } from "../configs/helper/config";

const BACKEND_URL = config.BACKEND_URL;

export const UserService = {
    loginUser: async (email: string, password: string) => {
        try {
            const { data } = await axios.post(`${BACKEND_URL}/user/login`, {
                email,
                password,
            });
            return data;
        } catch (err: any) {
            if (!err.response.data.success) {
                return err.response.data;
            }
        }
    },

    signupUser: async (
        infrastructure_name: string,
        email: string,
        mobile: number,
        password: string,
        since: number
    ) => {
        try {
            const { data } = await axios.post(`${BACKEND_URL}/user/signup`, {
                infrastructure_name,
                email,
                mobile,
                password,
                since,
            });
            return data;
        } catch (err: any) {
            if (!err.response.data.success) {
                return err.response.data;
            }
        }
    },
};
