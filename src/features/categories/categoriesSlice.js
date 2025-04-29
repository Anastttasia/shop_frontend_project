import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from '../../utils/constans'

export const getCategoties = createAsyncThunk(
    'categories/getCategoties',
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    })

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCategoties.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCategoties.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLoading = false;
        })
        builder.addCase(getCategoties.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default categoriesSlice.reducer;