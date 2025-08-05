import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions"; // İlgili action'ı import ediyoruz

const initialState = {
  isLoading: true, // Başlangıçta uçuşlar yükleniyor
  error: null,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight", // Slice ismi
  initialState,
  reducers: {}, // Redux'ta normalde bu kısımda reducer'lar yer alır ancak burada gerek yok

  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true; // Uçuşlar yükleniyor
      })
      .addCase(getFlights.rejected, (state, { error }) => {
        state.isLoading = false; // Yükleme durumu biter
        state.error = error.message; // Hata mesajını güncelle
      })
      .addCase(getFlights.fulfilled, (state, { payload }) => {
        state.isLoading = false; // Yükleme durumu biter
        state.error = null; // Hata null yapılır
        state.flights = payload; // Uçuş verisini güncelle
      });
  },
});

export default flightSlice.reducer;
