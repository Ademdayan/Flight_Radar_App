# 🛫 Flight Radar Application | Uçuş Radar Uygulaması

[English](#english) | [Türkçe](#türkçe)

---

## 🇹🇷 Türkçe

Bu proje, kullanıcıların uçakları gerçek zamanlı olarak takip etmelerine ve detaylı uçuş verilerine erişmelerine olanak tanıyan bir **Uçuş Radar Uygulaması**dır. Uygulama, kullanıcıların uçak pozisyonlarını, uçuş detaylarını ve daha fazlasını görüntülemelerini sağlayan interaktif bir harita arayüzü sunar. Havacılık tutkunları ve profesyoneller için sorunsuz ve kullanıcı dostu bir deneyim sunar.

### ✈️ Temel Özellikler

- **🗺️ Gerçek Zamanlı Takip**: Uçak konumlarını interaktif harita üzerinde canlı olarak izleyin.
- **📌 Uçuş Detayları**: Kalkış ve varış havaalanları, uçak tipi ve uçuş kodları gibi bilgilere erişin.
- **🔎 Arama ve Filtreleme**: Kullanıcılar uçuşları havayolu şirketi, bölge veya uçak tipine göre filtreleyebilir.
- **🖱️ İnteraktif Harita**: Tıklanabilir simgeler uçuş detaylarını anında gösterir.
- **📱 Duyarlı Tasarım**: Hem masaüstü hem de mobil kullanım için optimize edilmiştir.

### 🛠 Kullanılan Teknolojiler

#### 🚀 Ön Uç

- **React**: Modern ve dinamik kullanıcı arayüzleri oluşturmak için.
- **React Router**: Uygulama içi navigasyonu yönetmek için.
- **Redux Toolkit**: Durum yönetimi için.

#### 🗺️ Haritalama

- **Leaflet**: İnteraktif haritalar oluşturmak için.
- **React Leaflet**: Leaflet'i React uygulamalarına entegre etmek için.
- **Leaflet RotatedMarker**: Haritada döndürülmüş uçak simgelerini göstermek için.

#### 🎨 UI/UX

- **Bootstrap**: Duyarlı ve modern tasarım için.
- **React Icons**: Tutarlı ve görsel olarak çekici simgeler için.

#### 🔗 API ve Veri İşleme

- **Axios**: HTTP isteklerini yönetmek ve API'lerle etkileşim kurmak için.
- **RESTful API**: Harici sağlayıcılardan gerçek zamanlı uçuş verilerini almak için.

### 🚀 Başlangıç

#### Ön Gereksinimler

- Node.js (16 veya daha yüksek sürüm)
- npm veya yarn

#### Kurulum

1. **Depoyu klonlayın**

   ```bash
   git clone https://github.com/Ademdayan/Flight_Radar_App.git
   cd Flight_Radar_App
   ```

2. **Bağımlılıkları yükleyin**

   ```bash
   npm install
   ```

3. **Ortam Kurulumu**

   Kök dizinde bir `.env` dosyası oluşturun ve API kimlik bilgilerinizi ekleyin:

   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   VITE_RAPIDAPI_HOST=flight-radar1.p.rapidapi.com
   VITE_API_BASE_URL=https://flight-radar1.p.rapidapi.com
   ```

   **Önemli**:

   - [RapidAPI Flight Radar API](https://rapidapi.com/hub/flight-radar1-api) adresinden kendi API anahtarınızı almanız gerekiyor
   - Ücretsiz hesap oluşturun ve Flight Radar API'ye abone olun
   - `your_rapidapi_key_here` kısmını gerçek API anahtarınızla değiştirin
   - Kodda bulunan mevcut API anahtarı sadece gösterim amaçlıdır ve çalışmayabilir

4. **Geliştirme sunucusunu çalıştırın**

   ```bash
   npm run dev
   ```

5. **Tarayıcınızı açın**
   Uygulamayı görüntülemek için `http://localhost:5173` adresine gidin.

#### Üretim için Derleme

```bash
npm run build
```

### 🔐 Güvenlik Notları

- `.env` dosyanızı asla versiyon kontrolüne dahil etmeyin
- `.env` dosyası zaten `.gitignore` dosyasına dahil edilmiştir
- API anahtarları gibi hassas veriler için her zaman environment variables kullanın

---

## 🇺🇸 English

This project is a **Flight Radar Application** that allows users to track aircraft in real time and access detailed flight data. The application features an interactive map interface, enabling users to view aircraft positions, flight details, and more. It offers a seamless and user-friendly experience for aviation enthusiasts and professionals.

### ✈️ Key Features

- **🗺️ Real-Time Tracking**: Monitor aircraft locations live on an interactive map.
- **📌 Flight Details**: Access information such as departure and arrival airports, aircraft type, and flight codes.
- **🔎 Search & Filter**: Users can filter flights based on airline, region, or aircraft type.
- **🖱️ Interactive Map**: Clickable icons display flight details instantly.
- **📱 Responsive Design**: Optimized for both desktop and mobile use.

### 🛠 Technologies Used

#### 🚀 Frontend

- **React**: For building modern and dynamic user interfaces.
- **React Router**: For handling in-app navigation.
- **Redux Toolkit**: For state management.

#### 🗺️ Mapping

- **Leaflet**: For rendering interactive maps.
- **React Leaflet**: For integrating Leaflet into React applications.
- **Leaflet RotatedMarker**: For displaying rotated airplane icons on the map.

#### 🎨 UI/UX

- **Bootstrap**: For a responsive and modern design.
- **React Icons**: For consistent and visually appealing icons.

#### 🔗 API & Data Handling

- **Axios**: For handling HTTP requests and interacting with APIs.
- **RESTful API**: To fetch real-time flight data from external providers.

### 🚀 Getting Started

#### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

#### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ademdayan/Flight_Radar_App.git
   cd Flight_Radar_App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add your API credentials:

   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   VITE_RAPIDAPI_HOST=flight-radar1.p.rapidapi.com
   VITE_API_BASE_URL=https://flight-radar1.p.rapidapi.com
   ```

   **Important**:

   - You need to get your own API key from [RapidAPI Flight Radar API](https://rapidapi.com/hub/flight-radar1-api)
   - Sign up for a free account and subscribe to the Flight Radar API
   - Replace `your_rapidapi_key_here` with your actual API key
   - The current API key in the code is for demonstration purposes only and may not work

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

#### Building for Production

```bash
npm run build
```

### 🔐 Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- Always use environment variables for sensitive data like API keys

