import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAboutPageData = createAsyncThunk(
  "data/fetchAboutPageDate",
  async () => {
    const response = await fetch(
      "https://jjgoegozmvelpbpghdri.supabase.co/rest/v1/about_page",
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
const about_pageSlice = createSlice({
  name: "about_page",
  initialState: {
    about_page: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutPageData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAboutPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.about_page = action.payload;
      })
      .addCase(fetchAboutPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const aboutReducer = about_pageSlice.reducer;
