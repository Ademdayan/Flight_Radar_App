import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions"; // İlgili action'ı import ediyoruz

const initialState = {
  isLoading: false,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail", // Slice ismi
  initialState,
  reducers: {
    clearRoute: (state) => {
      state.route = []; // Route bilgisini temizler
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.isLoading = true; // Yükleme durumu başlar
      })
      .addCase(getDetails.rejected, (state, { error }) => {
        state.isLoading = false; // Yükleme durumu biter
        state.error = error.message; // Hata mesajını güncelle
      })
      .addCase(getDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false; // Yükleme durumu biter
        state.error = null; // Hata null yapılır
        state.info = payload; // Detay verisi ile güncelle
        state.route = payload.trail || []; // Route bilgisini güncelle
      });
  },
});

export default detailSlice.reducer;

export const { clearRoute } = detailSlice.actions; // clearRoute action'ını export ediyoruz
