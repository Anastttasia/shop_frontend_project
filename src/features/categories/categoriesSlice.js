import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import BASE_URL from '../../utils/constans'

export const getCategoties = createAsyncThunk(
    'categories/getCategoties', 
    async (_, thunkAPI) => { 
        try{
            const res = await axios(`${BASE_URL}/`)
        } catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    })

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: []
    }
})