import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../configs/interfaces/User";

interface UserState {
    currentUser: User | null;
    isUser: boolean;
}

const initialState: UserState = {
    currentUser: null,
    isUser: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInUser: (state, action: any) => {
            (state.currentUser = action.payload), (state.isUser = true);
        },
        signOutUser: (state) => {
            (state.currentUser = null), (state.isUser = false);
        },
    },
});

export default userSlice.reducer;
export const { signInUser, signOutUser } = userSlice.actions;
