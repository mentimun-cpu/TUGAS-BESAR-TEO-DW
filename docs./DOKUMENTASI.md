# LAPORAN TUGAS BESAR DESAIN WEB A
## NAMA PROYEK (WEBSITE PEMESANAN KOPI ONLINE)

---

### 1. IDENTITAS PROYEK
**Nama Proyek: Coffe Bean**  

**Deskripsi Singkat:**  
CoffeeBean adalah website e-commerce dan informasi untuk coffee shop premium yang menawarkan pengalaman digital yang lengkap untuk para pecinta kopi. Website ini menyajikan katalog menu kopi berkualitas tinggi dari berbagai kategori (Hot, Cold, Special), sistem pemesanan online dengan keranjang belanja interaktif, serta informasi lengkap tentang filosofi dan nilai-nilai coffee shop.

  Dibangun dengan teknologi modern menggunakan Tailwind CSS untuk desain responsif dan JavaScript vanilla untuk fungsionalitas interaktif, CoffeeBean menghadirkan antarmuka yang elegan dengan animasi smooth, navigasi yang intuitif, dan pengalaman pengguna yang optimal di semua perangkat (desktop, tablet, mobile).

  Fitur utama meliputi: sistem pemesanan kopi dengan quantity counter, keranjang belanja real-time, halaman tentang (about) yang informatif, testimonial pelanggan, dan desain visual yang konsisten dengan tema kopi melalui skema warna amber/emas yang hangat.

Website ini merupakan solusi one-stop digital untuk coffee shop yang ingin memperluas jangkauan pelanggan melalui platform online yang menarik dan fungsional. 

**Anggota Kelompok:**
| No. | Nama Lengkap | NIM | Peran |
|-----|--------------|-----|-------|
| 1.  | [Ketut Sumantre]       | [4524210048] | [Main Branch & Tamplate Menu Branch] |
| 2.  | [Farhan Ridwan Badawi]       | [4524210037] | [Fitur Kerangjang/pesanan] |
| 3.  | [Fais Base Febrian]       | [4524210033] | [Main Branch] |
| 4.  | [Vina Aisya Hafiz]       | [4524210131] | [Fitur Dashboard/Home] |
| 5.  | [Bunga Putri Nurimman]       | [4524210021] | [Fitur menu pesanan] |
| 6.  | [Lilis]       | [4524210051] | [fitur about] |

---

### 2. TEKNOLOGI
|  Teknologi/Framework | Versi | Alasan Pemilihan | 
|----------------------|--------------|-----|
| HTML5                | HTML5       | Digunakan sebagai struktur utama website dan didukung oleh semua browser modern. | 
|  Tailwind CSS        |  v3.x (CDN)       | Mempermudah styling dengan utility class, responsif, dan mempercepat proses pengembangan UI. |
| CSS                  | CSS#      | Digunakan untuk styling tambahan di file style.css yang tidak tercakup oleh Tailwind | 
| JavaScript           | ES6       | Digunakan untuk logika interaksi seperti navigasi halaman, keranjang belanja, dan manipulasi DOM. |
| Font Awesome         | 6.4.0      | Menyediakan ikon siap pakai untuk mempercantik tampilan antarmuka website.  | 
|  GitHub              | –       | Digunakan sebagai version control dan media penyimpanan repository project agar mudah dikelola dan dikembangkan. | 
|  CDN                 | –       | Digunakan untuk memuat library eksternal secara cepat tanpa instalasi lokal. | 



---

### 3. DAFTAR FITUR
#### Halaman Utama (Home)
- [x] **Hero Section** dengan CTA
Menampilkan judul website, deskripsi singkat CoffeeBean, serta tombol CTA untuk mengarahkan pengguna ke halaman menu kopi.
- [x] Navbar Responsif
Navbar berisi menu Home, Menu, About, dan ikon keranjang, serta menyesuaikan tampilan pada berbagai ukuran layar (desktop dan mobile).
- [x] Informasi Keunggulan CoffeeBean
Menampilkan keunggulan coffee shop seperti kualitas biji kopi, barista berpengalaman, dan layanan pengiriman.
- [X] Testimoni Pelanggan
Menampilkan ulasan pelanggan sebagai bentuk kepercayaan dan pengalaman pengguna terhadap CoffeeBean.

#### Halaman Menu (Katalog Kopi)
- [x] Daftar Menu Kopi Dinamis
Menampilkan daftar menu kopi berdasarkan kategori (Hot, Cold, Special) yang diambil dari data JavaScript dan ditampilkan secara dinamis ke halaman.
- [x] Filter Kategori Menu
Pengguna dapat memfilter menu kopi berdasarkan kategori tertentu untuk memudahkan pencarian.
- [x] Quantity Counter (Jumlah Pesanan)
Pengguna dapat menambah atau mengurangi jumlah pesanan untuk setiap menu kopi.

#### Halaman Order (Keranjang Pesanan)
- [x] Keranjang Belanja Interaktif
Menampilkan daftar menu yang dipilih oleh pengguna beserta jumlah pesanan.
- [x] Perhitungan Total Harga Otomatis
Sistem menghitung total harga pesanan secara otomatis berdasarkan jumlah item yang dipilih.
- [x] Tombol Checkout
Menyediakan tombol checkout sebagai simulasi proses pemesanan kopi.

#### Halaman About
- [x] Informasi Tentang CoffeeBean
Menampilkan deskripsi coffee shop, nilai-nilai perusahaan, dan filosofi CoffeeBean.

#### Fitur Umum
- [x] Responsive Design
Tampilan website menyesuaikan berbagai ukuran layar menggunakan Tailwind CSS dan media query.
- [x] Navigasi Antar Halaman Tanpa Reload
Perpindahan antar halaman dilakukan menggunakan JavaScript untuk memberikan pengalaman pengguna yang lebih interaktif.
---

### 4. STRUKTUR HALAMAN
#### Sitemap Website
```
SITEMAP COFFEEBEAN
│
├── HOME (Dashboard)
│   ├── Hero Section dengan Background Image
│   ├── Features (3 kolom)
│   │   ├── Biji Kopi Pilihan
│   │   ├── Barista Berpengalaman
│   │   └── Pengiriman Cepat
│   ├── Statistics (4 metrik)
│   ├── Newsletter Subscription
│   ├── Testimonials (2 testimoni)
│   └── Call-to-Action Buttons
│
├── MENU (Katalog Kopi)
│   ├── Menu Items Grid Layout
│   │   ├── Hot Coffee (6 item)
│   │   │   ├── Americano
│   │   │   ├── Cappuccino
│   │   │   ├── Espresso
│   │   │   ├── Latte
│   │   │   ├── Macchiato
│   │   │   └── Mocha
│   │   ├── Cold Coffee (5 item)
│   │   │   ├── Iced Americano
│   │   │   ├── Cold Brew
│   │   │   ├── Iced Cappuccino
│   │   │   ├── Iced Mocha
│   │   │   └── Black Coffee
│   │   └── Special Coffee (4 item)
│   │       ├── Caramel Macchiato
│   │       ├── Affogato
│   │       ├── Flavored Latte
│   │       └── Vietnam Drip
│   └── Quantity Counter System
│
├── ABOUT (Tentang Kami)
│   ├── Hero Image dengan Overlay
│   ├── Konten Tentang CoffeeBean
│   ├── Nilai-Nilai Perusahaan
│   │   ├── Kualitas Terbaik
│   │   ├── Pelayanan Ramah
│   │   └── Berkelanjutan
│   ├── Experience Section
│   └── Navigation Buttons
│
├── ORDER (Keranjang Pesanan)
│   ├── Daftar Item Pesanan
│   ├── Subtotal per Item
│   ├── Total Keseluruhan
│   ├── Checkout Button
│   └── Empty State (jika kosong)
│
└── FOOTER
    ├── Logo & Tagline
    ├── Copyright Information
    ├── Social Media Links
    ├── Contact Information
    └── Operating Hours
```
#### Hirarki Navigasi Website
```
NAVBAR
├── HOME (default landing page)
├── MENU (katalog produk)
├── ABOUT (informasi perusahaan)
└── CART ICON (akses ke ORDER page)
```
#### User Flow

1. User masuk ke HOME → melihat fitur & testimoni
2. Klik "Lihat Menu Kopi" → menuju MENU
3. Pilih kopi dengan quantity counter → otomatis masuk ke cart
4. Klik cart icon → menuju ORDER untuk review
5. Checkout → kembali ke HOME atau MENU
6. Bisa explore ABOUT untuk informasi coffee shop
---

### 5. BUKTI RESPONSIVITAS & TAMPILAN
#### Halaman Utama (Home)
| Device | Screenshot |
|--------|------------|
| **Mobile** (375px) | ![Mobile Home]<img width="465" height="797" alt="image" src="https://github.com/user-attachments/assets/1ba05049-f7c5-467e-9212-438e82e778b9" />)|
| **Tablet** (768px) | ![Tablet Home]<img width="960" height="797" alt="image" src="https://github.com/user-attachments/assets/b5ae7d7b-43f1-4276-adea-4bec4130cdc9" />) |
| **Desktop** (1440px) | ![Desktop Home]<img width="1526" height="798" alt="image" src="https://github.com/user-attachments/assets/fc9aed73-eb15-43db-a3e9-ce28903cf0a7" />) |

#### Halaman [Menu]
| Device | Screenshot |
|--------|------------|
| **Mobile** | ![Mobile Page] <img width="468" height="800" alt="image" src="https://github.com/user-attachments/assets/4d485a40-f35c-4304-b347-dd1cd2f8fb6b" />
/>) |
| **Tablet** | ![Tablet Page] <img width="959" height="804" alt="image" src="https://github.com/user-attachments/assets/d369575a-2d7a-4a0a-8fb6-38221118d03a" />
/>) |
| **Desktop** | ![Desktop Page] <img width="1528" height="800" alt="image" src="https://github.com/user-attachments/assets/4713c986-c160-4e11-bc44-e10373058daf" />
/>) |

#### Halaman [About]
| Device | Screenshot |
|--------|------------|
| **Mobile** | ![Mobile Page](<img width="464" height="795" alt="image" src="https://github.com/user-attachments/assets/c6e3341b-c6f1-48a3-889c-45901e1900e4" />
) |
| **Tablet** | ![Tablet Page](<img width="958" height="805" alt="image" src="https://github.com/user-attachments/assets/8352a918-dca4-43de-a0c7-b54012b8d7a3" />
) |
| **Desktop** | ![Desktop Page]<img width="1525" height="826" alt="image" src="https://github.com/user-attachments/assets/1fea395e-6a88-4e18-b10b-40c47c37582c" />
/>) |

#### Halaman [Keranjang]
| Device | Screenshot |
|--------|------------|
| **Mobile** | ![Mobile Page](<img width="467" height="797" alt="image" src="https://github.com/user-attachments/assets/34a3f6d1-7c65-44c4-a205-5acfcb2fd473" />
) |
| **Tablet** | ![Tablet Page](<img width="956" height="797" alt="image" src="https://github.com/user-attachments/assets/65f15d9f-86fc-456d-9481-87193b8d6ad7" />
) |
| **Desktop** | ![Desktop Page](<img width="1527" height="802" alt="image" src="https://github.com/user-attachments/assets/69b20b9e-249a-47b7-9359-e3083c838cc3" />
) |


---


### 6. BUKTI AKSESIBILITAS

#### Hasil Audit Lighthouse

**Halaman Utama**
<img width="1896" height="907" alt="image" src="https://github.com/user-attachments/assets/6a920e68-041d-4472-a0db-00f13e83ce1d" />


*Skor:*
- Performance: **79**
- Accessibility: **82**
- Best Practices: **100**
- SEO: **82**

Audit Lighthouse dilakukan menggunakan Google Chrome DevTools. Hasil menunjukkan bahwa website telah memenuhi sebagian besar standar aksesibilitas dan praktik terbaik pengembangan web. Skor Accessibility sebesar 82 menandakan bahwa website cukup ramah bagi pengguna, meskipun masih terdapat beberapa aspek minor yang dapat ditingkatkan.

---


#### Kontras Warna (WCAG Check)

**Contoh Palette:**
- Primary: `#6f4e37` (AA pada putih)
- Text: `#1f1f1f` (AAA pada putih)
- Background: `#ffffff`

Kombinasi warna yang digunakan pada website memiliki rasio kontras yang cukup antara teks dan latar belakang, sehingga konten dapat dibaca dengan jelas. Penggunaan warna ini telah mendukung prinsip aksesibilitas berdasarkan pedoman WCAG (Web Content Accessibility Guidelines).
