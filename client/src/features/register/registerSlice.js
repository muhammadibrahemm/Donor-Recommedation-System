import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendRegisterVerificationCodeByEmail } from "../../api/register/register.api";

// create async function for registration a user using the verification code through email
export const sendVerificationCodeForRegistration = createAsyncThunk("verificationCode", async(email, {rejectWithValue}) => {

    try {

        const res = await sendRegisterVerificationCodeByEmail(email);
        console.log("data after response in registeration through verification code",res);
        return res;

    } catch (error) {
        console.log("error is sendRegisterVerificationCodeByEmail: ",error);
        return rejectWithValue(error);
    }
})

const initialState = {
    email: '',
    isLoading: false,
    isError: false,
    msg: '',
    verificationCode: '',
    status: null
}

const registerSlice = createSlice(
    {
        name:'Register',
        initialState: initialState,
        reducers:{
            updateStatus: (state, action) => {
                console.log("action payload in update status",action.payload)
                state.status = action.payload;
            }
        },
        extraReducers: (builder) => {
            /**
             * Registration
             */
            // 1. verification code by email
            builder
            .addCase(sendVerificationCodeForRegistration.pending,(state) => {
                state.isLoading = true
            })
            .addCase(sendVerificationCodeForRegistration.fulfilled, (state, action) => {
                state.isLoading = false;
                const { code, email, message, status } = action.payload || {};

                state.verificationCode = code ?? ""; 
                state.email = email ?? "";
                state.status = status ?? "";
                state.msg = message ?? "";

                console.log("action.payload: fulfilled status", action.payload);
                        })
            .addCase(sendVerificationCodeForRegistration.rejected,(state, action) => {
                console.log("action.payload in rejected status",action.payload);
            })
        }
    }
)


export const { updateStatus } = registerSlice.actions;
export default registerSlice.reducer;