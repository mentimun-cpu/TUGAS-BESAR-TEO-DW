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
| 1.  | [Ketut Sumantre]       | [4524210048] | [Main Branch] |
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
| **Mobile** (375px) | ![Mobile Home]<img width="468" height="800" alt="image" src="https://github.com/user-attachments/assets/0596a176-0915-483b-b3ef-efb5ca8d3226" />)|
| **Tablet** (768px) | ![Tablet Home]<img width="959" height="788" alt="image" src="https://github.com/user-attachments/assets/860db7ff-feef-46c4-81c0-43375655a4a5" />) |
| **Desktop** (1440px) | ![Desktop Home]<img width="1526" height="793" alt="image" src="https://github.com/user-attachments/assets/397a246a-816f-46c0-b6b7-a653d715c216" />) |

#### Halaman [Menu]
| Device | Screenshot |
|--------|------------|
| **Mobile** | ![Mobile Page] <img width="466" height="801" alt="Screenshot 2026-01-05 224624" src="https://github.com/user-attachments/assets/28977ddf-a61a-4064-a8f4-f43904f719c1" />) |
| **Tablet** | ![Tablet Page]<img width="956" height="803" alt="image" src="https://github.com/user-attachments/assets/944232e6-4efe-4f7c-8c1d-904431ef2839" />) |
| **Desktop** | ![Desktop Page]<img width="1531" height="806" alt="image" src="https://github.com/user-attachments/assets/8e7e39eb-dff8-405b-a992-f1a65528f402" />) |

#### Halaman [About]
| Device | Screenshot |
|--------|------------|
| **Mobile** | ![Mobile Page](link-mobile.jpg) |
| **Tablet** | ![Tablet Page](link-tablet.jpg) |
| **Desktop** | ![Desktop Page]<img width="1524" height="800" alt="image" src="https://github.com/user-attachments/assets/d556c658-3f1f-4321-9ed6-debdeea9209a" />) |

#### Halaman [Keranjang]
| Device | Screenshot |
|--------|------------|
| **Mobile** | ![Mobile Page](<img width="469" height="801" alt="image" src="https://github.com/user-attachments/assets/34ee5a4e-f054-477a-bd48-5d7023760701" />
) |
| **Tablet** | ![Tablet Page](<img width="957" height="798" alt="image" src="https://github.com/user-attachments/assets/5d027aef-15dd-4f1b-b683-082bfc994359" />
) |
| **Desktop** | ![Desktop Page](<img width="1530" height="802" alt="image" src="https://github.com/user-attachments/assets/b398b554-524e-45c2-97e0-3f137fbb31b1" />
) |


---

### 6. BUKTI AKSESIBILITAS

#### Hasil Audit Lighthouse

**Halaman Utama**
### 6. BUKTI AKSESIBILITAS

#### Hasil Audit Lighthouse

**Halaman Utama**
![Lighthouse Home](<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/9ff467d2-607c-423d-abd0-2c4d964be2ad" />
)

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
