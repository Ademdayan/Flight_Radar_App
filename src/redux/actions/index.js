import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

// Uçuşları almayı sağlayan asyncThunk
export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // Parametreleri belirleyelim
  const params = {
    bl_lat: "34.64943", // Başlangıç enlem
    bl_lng: "24.65734", // Başlangıç boylam
    tr_lat: "43.42391", // Bitiş enlem
    tr_lng: "46.118554", // Bitiş boylam
    speed: "1,999999",  // Hız parametresi
  };

  try {
    // API'ye istek gönder
    const res = await api.get("/flights/list-in-boundary", { params });

    // Gelen veriyi formatlayalım, çünkü veriler dizi şeklinde geliyor
    const formatted = res.data.aircraft.map((i) => ({
      id: i[0],
      code: i[1],
      lat: i[2],
      lng: i[3],
      deg: i[4],
    }));

    // Formatlanmış veriyi geri döndürelim
    return formatted;
  } catch (error) {
    // Hata durumunda hata mesajı
    console.error("Uçuşlar alınırken hata oluştu:", error);
    throw error; // Redux'da hata yakalamak için error'ı fırlatıyoruz
  }
});

// Uçuş detaylarını almayı sağlayan asyncThunk
export const getDetails = createAsyncThunk("detail/getDetail", async (id) => {
  const params = {
    flight: id, // Parametre olarak uçuş ID'sini gönderiyoruz
  };

  try {
    // API'ye uçuş detayları için istek gönder
    const res = await api.get("/flights/detail", { params });

    // Detayları geri döndürelim
    return res.data;
  } catch (error) {
    // Hata durumunda hata mesajı
    console.error("Uçuş detayları alınırken hata oluştu:", error);
    throw error; // Redux'da hata yakalamak için error'ı fırlatıyoruz
  }
});
