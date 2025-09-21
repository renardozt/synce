# Synce - Discord Moderation Bot Website

🌐 **Synce**, Discord için geliştirilmiş bir **moderasyon botunun web sitesi**dir.  
Bu web uygulaması, bot hakkında bilgi, komut listesi ve kolay kullanım için gerekli tüm dokümantasyonu sunar.  

---

## ✨ Özellikler
- 📌 Ana sayfada botun tanıtımı  
- ⚡ Komutlar sayfası: tüm komutların listesi ve açıklamaları  
- 🎨 Modern tasarım (React + Material UI + Bootstrap)  
- 📱 Responsive (mobil uyumlu) arayüz  
- 🚀 Vite ile hızlı geliştirme ve build süreci  
- 📊 Sayaç, animasyon ve görsel efekt desteği  

---

## 🚀 Kurulum ve Çalıştırma

### 1. Depoyu klonla
```bash
git clone https://github.com/kullaniciadi/synce.git
cd synce
```

### 2. Bağımlılıkları yükle
```bash
npm install
```

### 3. Geliştirme sunucusunu başlat
```bash
npm run dev
```

### 4. Production build almak için
```bash
npm run build
```

### 5. Build’i önizlemek için
```bash
npm run preview
```

---

## 📦 Kullanılan Teknolojiler
- [React](https://react.dev/) – Frontend kütüphanesi  
- [Vite](https://vitejs.dev/) – Hızlı geliştirme ortamı  
- [Material UI](https://mui.com/) – Modern UI bileşenleri  
- [Bootstrap](https://getbootstrap.com/) – Responsive tasarım desteği  
- [Sass](https://sass-lang.com/) – Gelişmiş stil yönetimi  
- [Axios](https://axios-http.com/) – API istekleri  
- [React Router](https://reactrouter.com/) – Sayfa yönlendirme  
- [React CountUp](https://www.npmjs.com/package/react-countup) & [React Visibility Sensor](https://www.npmjs.com/package/react-visibility-sensor) – Animasyon ve sayaçlar  

---

## 📂 Proje Yapısı
```
/src
 ├── lang        # Çoklu dil desteği için çeviri dosyaları
 ├── pages       # Ana sayfa, komutlar sayfası vb.
 ├── parts       # Navbar, footer gibi site parçaları
 ├── styles      # Sass ve stiller
 ├── tools       # Yardımcı araçlar ve fonksiyonlar
 ├── App.jsx     # Uygulamanın ana bileşeni
 ├── config.json # Proje ayarları
 └── main.jsx    # Giriş noktası

/public
 └── img         # Görsellerinizi buraya ekleyin
     └── lang    # Dil bayraklarını buraya ekleyin
```

---

## ⚠️ Önemli Notlar
- `src/config.json` dosyası ile ayarlarda düzenleme yapabilirsiniz.  
- `public/img` klasörüne görsellerinizi atabilirsiniz.  
- `src/lang` klasörü ile dil ekleyebilir veya mevcut dilleri düzenleyebilirsiniz.  
- Yeni bir dil eklediğinizde, `public/img/lang` klasörüne bayrak görselini eklemeyi unutmayın (Wikipedia'dan bulabilirsiniz).  
- `src/styles` klasörü ile tasarımsal özelleştirmeler yapabilirsiniz.  
- `dev.bat` dosyası ile geliştirme sırasında sitenizi canlı olarak **http://localhost:5173** adresinde görüntüleyebilirsiniz.  
- `build.bat` dosyası ile sitenizi paketleyebilirsiniz (**dist** klasörüne çıkarılır).  
- Sitenizin istatistikleri için `stats.php` dosyasını Web Panel’inize yüklemeyi unutmayın.  
- İstatistik bölümünde kullanılacak şifreyi rastgele oluşturmak için:  
  ```bash
  node password_generator.js
  ```  
- Sitenizi paketledikten sonra `dist` klasöründe oluşan dosyaları dilediğiniz yerde kullanabilirsiniz.  

---

## 👨‍💻 Geliştirici
**İbrahim Öztepe**  
📌 [GitHub Profilim](https://github.com/renardozt)

---

## 📜 Lisans
Bu proje **MIT** lisansı ile lisanslanmıştır.
