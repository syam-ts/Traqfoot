import axios from "axios";

export const UserService = {
    loginUser: async (email: string, password: string) => {
        try {
            const { data } = await axios.post("http://localhost:3000/user/login", {
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
            const { data } = await axios.post("http://localhost:3000/user/signup", {
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
