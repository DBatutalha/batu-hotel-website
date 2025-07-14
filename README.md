# 🏨 The Batu Hotel - Luxury Hotel Booking System

> **Portfolio Projesi** - Bu proje, modern web geliştirme teknolojileri kullanılarak oluşturulmuş bir otel rezervasyon sistemi olup, **portfolio amaçlı** geliştirilmiştir.

## 📋 Proje Hakkında

**The Batu Hotel**, İtalya Dolomitleri'nde hayali bir lüks otel için geliştirilmiş tam işlevsel bir rezervasyon sistemidir. Proje, gerçek dünya senaryolarına uygun olarak tasarlanmış ve modern web geliştirme teknikleri kullanılarak inşa edilmiştir.

## ✨ Ana Özellikler

### 🔐 Kullanıcı Yönetimi

- **Google OAuth** entegrasyonu ile güvenli giriş
- Kullanıcı profil yönetimi
- Otomatik misafir kaydı oluşturma

### 🏠 Kabin Yönetimi

- Lüks kabin galeri sayfası
- Kapasite bazında filtreleme (2-4, 4-7, 8-12 kişilik)
- Detaylı kabin bilgileri ve görselleri
- Fiyat hesaplama (normal fiyat + indirimler)

### 📅 Rezervasyon Sistemi

- **İnteraktif tarih seçici** (React Day Picker)
- Dolu tarihlerin otomatik engellenmesi
- Minimum/maksimum konaklama süresi kontrolü
- Gerçek zamanlı fiyat hesaplama
- Misafir sayısı seçimi ve özel istekler

### 👤 Kullanıcı Hesap Paneli

- **Rezervasyon Yönetimi:**
  - Aktif ve geçmiş rezervasyonları görüntüleme
  - Rezervasyon düzenleme
  - Rezervasyon iptali
- **Profil Yönetimi:**
  - Kişisel bilgileri güncelleme
  - Ülke ve kimlik bilgileri

### 🎨 Tasarım Özellikleri

- **Tamamen responsive** tasarım
- Modern ve lüks görünüm
- **Tailwind CSS** ile özel tasarım sistemi
- Smooth animasyonlar ve geçişler
- Accessibility (erişilebilirlik) desteği

## 🛠️ Kullanılan Teknolojiler

### 🚀 Frontend Framework & Library

- **Next.js 15.3.3** - React framework (App Router)
- **React 19.1.0** - UI kütüphanesi
- **React DOM 19.1.0** - DOM render

### 🎨 Styling & UI

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **@heroicons/react 2.2.0** - Icon kütüphanesi
- **Google Fonts (Josefin Sans)** - Typography

### 🔐 Authentication & Database

- **NextAuth.js 5.0.0-beta.29** - Authentication çözümü
- **Google OAuth Provider** - Sosyal medya girişi
- **Supabase** - Backend-as-a-Service
  - PostgreSQL veritabanı
  - Authentication
  - File storage (kabin görselleri)

### 📅 Date & Time Management

- **react-day-picker 9.8.0** - İnteraktif tarih seçici
- **date-fns 4.1.0** - Tarih hesaplama ve formatla

### 🔧 Development Tools

- **ESLint 8** - Code linting
- **PostCSS 8** - CSS processing
- **Next.js ESLint Config** - Next.js optimizasyonları

## 📂 Proje Yapısı

```
21-batu-hotel-website/
├── app/                          # Next.js App Router
│   ├── _components/              # Reusable components
│   │   ├── Cabin.js             # Kabin detay component
│   │   ├── CabinCard.js         # Kabin kartı
│   │   ├── CabinList.js         # Kabin listesi
│   │   ├── DateSelector.js      # Tarih seçici
│   │   ├── Filter.js            # Kapasite filtresi
│   │   ├── Header.js            # Site başlığı
│   │   ├── Navigation.js        # Ana navigasyon
│   │   ├── Reservation*.js      # Rezervasyon bileşenleri
│   │   └── ...
│   ├── _lib/                    # Utility functions
│   │   ├── actions.js           # Server actions
│   │   ├── auth.js              # Authentication config
│   │   ├── data-service.js      # Supabase queries
│   │   └── supabase.js          # Supabase client
│   ├── _styles/                 # Global styles
│   │   └── globals.css          # Tailwind & custom CSS
│   ├── about/                   # Hakkımızda sayfası
│   ├── account/                 # Kullanıcı hesap sayfaları
│   │   ├── profile/             # Profil yönetimi
│   │   ├── reservations/        # Rezervasyon yönetimi
│   │   └── ...
│   ├── api/                     # API routes
│   │   └── auth/                # NextAuth endpoints
│   ├── cabins/                  # Kabin sayfaları
│   │   ├── [cabinId]/          # Dinamik kabin detay
│   │   └── ...
│   └── layout.js                # Root layout
├── public/                      # Static assets
├── middleware.js                # Route protection
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Dependencies
```

## 💡 Öne Çıkan Özellikler

### 🏗️ Modern Mimari

- **Server Components** ve **Client Components** hibrit kullanımı
- **Server Actions** ile form işlemleri
- **Middleware** ile route koruması
- **Suspense** ile loading states

### 🎯 State Management

- **React Context** (ReservationContext)
- **useOptimistic** hook ile optimistic updates
- **Server State** yönetimi

### 🔄 Real-time Features

- Rezervasyon durumu güncellemeleri
- Optimistic UI updates
- Form validation ve error handling

### 📱 Responsive Design

- Mobile-first yaklaşım
- Tablet ve desktop optimizasyonları
- Touch-friendly interface

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- npm veya yarn
- Supabase hesabı
- Google OAuth credentials

### 1. Proje Klonlama

```bash
git clone [repository-url]
cd 21-batu-hotel-website
```

### 2. Bağımlılıkları Yükleme

```bash
npm install
```

### 3. Environment Değişkenleri

`.env.local` dosyası oluşturun:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# Google OAuth Configuration
AUTH_GOOGLE_ID=your_google_oauth_client_id
AUTH_GOOGLE_SECRET=your_google_oauth_client_secret

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

### 4. Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

### 5. Production Build

```bash
npm run build
npm start
```

## 🗄️ Veritabanı Şeması

### Supabase Tabloları:

- **guests** - Kullanıcı bilgileri
- **cabins** - Kabin detayları
- **bookings** - Rezervasyon kayıtları
- **settings** - Sistem ayarları

## 🎨 Design System

### Renk Paleti

- **Primary:** Mavi tonlar (50-950)
- **Accent:** Altın/sarı tonlar (50-950)
- **Custom:** Arbitrary values için bracket notation

### Typography

- **Font Family:** Josefin Sans (Google Fonts)
- **Responsive:** text-sm'den text-8xl'e kadar

## 📈 Performance Özellikleri

- **Static Generation** için generateStaticParams
- **Image Optimization** (Next.js Image component)
- **Code Splitting** (dynamic imports)
- **Caching** strategies
- **SEO** optimizasyonu

## 🔒 Güvenlik Özellikleri

- **CSRF Protection** (NextAuth)
- **Route Protection** (Middleware)
- **SQL Injection** koruması (Supabase)
- **XSS** koruması
- **Input Validation**

## 👨‍💻 Geliştirici Bilgileri

Bu proje, modern React ve Next.js ecosystem'inin en güncel özelliklerini showcase etmek amacıyla geliştirilmiştir. Portfolio projesi olarak, gerçek dünya senaryolarını simüle eder ve production-ready kod kalitesindedir.

### Öğrenilen/Uygulanan Teknkler:

- ✅ Next.js 15 App Router
- ✅ React 19 yeni özellikleri
- ✅ Server Components & Server Actions
- ✅ Modern Authentication patterns
- ✅ Database design ve optimization
- ✅ Responsive Design best practices
- ✅ Performance optimization

## 📄 Lisans

Bu proje portfolio amaçlı geliştirilmiştir ve eğitim/örnek proje olarak kullanılabilir.

---

**🌟 Portfolio amaçlı geliştirilmiştir • Modern Web Development Showcase**
