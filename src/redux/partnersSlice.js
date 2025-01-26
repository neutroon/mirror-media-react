import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetch partners from the API
export const fetchPartners = createAsyncThunk(
  "data/fetchPartners",
  async () => {
    const response = await fetch(
      "https://jjgoegozmvelpbpghdri.supabase.co/rest/v1/partners?select=category_id,partner_rank,id,name,logo,description,categories(name)",
      {
        method: "GET",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ29lZ296bXZlbHBicGdoZHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjgyMDQsImV4cCI6MjA1Mjk0NDIwNH0.5IcSdFy13gInIB3NyL7S0O5TezDe_dW654fzVQlE03g",
        },
      }
    );
    const partners = await response.json();
    const groubedPartners = partners.reduce((acc, partner) => {
      if (!acc.find((cat) => cat.categoryName === partner.categories.name)) {
        acc.push({
          categoryName: partner.categories.name,
          partners: [partner],
        });
      } else {
        const cat = acc.find(
          (cat) => cat.categoryName === partner.categories.name
        );
        cat.partners.push(partner);
      }
      return acc;
    }, []);
    return groubedPartners;
  }
);

// Slice to manage the partners state
const partnersSlice = createSlice({
  name: "partners",
  initialState: {
    partners: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.partners = action.payload;
      })
      .addCase(fetchPartners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Exporting the reducer as default
export default partnersSlice.reducer;
