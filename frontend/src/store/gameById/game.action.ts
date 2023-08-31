import axios, { AxiosError, CancelToken } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { gameByIdService } from "@/src/services";
import { setCookie } from "@/src/utils";

export const fetchGameById = createAsyncThunk(
  "games/fetchGameById",
  async (params: { id: string; cancelToken: CancelToken }, thunkAPI) => {
    try {
      const response = await gameByIdService.fetchGameById(params);

      setCookie(params.id, JSON.stringify(response.data));

      return response.data;
    } catch (e: unknown) {
      if (axios.isCancel(e)) {
        return thunkAPI.rejectWithValue("Request was canceled");
      }
      
      const error = e as AxiosError;

      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
