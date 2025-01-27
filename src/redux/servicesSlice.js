import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "data/fetchServices",
  async () => {
    const response = await fetch(
      "https://jjgoegozmvelpbpghdri.supabase.co/rest/v1/services",
      {
        method: "GET",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ29lZ296bXZlbHBicGdoZHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjgyMDQsImV4cCI6MjA1Mjk0NDIwNH0.5IcSdFy13gInIB3NyL7S0O5TezDe_dW654fzVQlE03g",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const servicesReducer = servicesSlice.reducer;
