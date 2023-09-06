import axios, { AxiosError, CancelToken } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { gameByIdService } from "@/src/services";
import { setCookie } from "@/src/utils";

export const fetchGameById = createAsyncThunk(
  "games/fetchGameById",
  async (params: { id: string; cancelToken: CancelToken }, thunkAPI) => {
    let retries = 0;
    let error: string = "";

    while (retries < 3) {
      try {
        const response = await gameByIdService.fetchGameById(params);

        setCookie(params.id, JSON.stringify(response.data));

        return response.data;
      } catch (e: unknown) {
        if (axios.isCancel(e)) {
          error = "Request was canceled";
          retries++;
          continue;
        }

        const err = e as AxiosError;

        error = err.response?.data as string;
      }

      retries++;
    }

    return thunkAPI.rejectWithValue(error);
  }
);
