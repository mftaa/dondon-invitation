"use client";

import { useState } from 'react';
import pricelistData from '../data/pricelist.json';
import Image from 'next/image';
// Pastikan import gambar Anda sudah benar path-nya
import hardcover from '@/assets/images/catalogs/hardcover.jpeg';
import semihard from '@/assets/images/catalogs/semihard.jpeg';
import softcover from '@/assets/images/catalogs/softcover.jpeg';

// --- Tipe Data ---
type ProductData = {
  key: string;
  name: string;
  category: string;
  specs: string[];
};

// --- Data Setup ---
const products = Object.entries(pricelistData).map(([key, data]) => ({
  key,
  ...data,
})) as ProductData[];

const categories = ["Hardcover", "Semi Hardcover", "Softcover"];

// Mapping gambar ke kategori
const categoryImages: Record<string, any> = {
  "Hardcover": hardcover,
  "Semi Hardcover": semihard,
  "Softcover": softcover,
};

// Mapping deskripsi (opsional, bisa dipakai di overlay gambar)
const categoryDescriptions: Record<string, string> = {
  "Hardcover": "Tampilan eksklusif dan tahan lama.",
  "Semi Hardcover": "Pilihan ekonomis kualitas tinggi.",
  "Softcover": "Ringan, fleksibel, dan elegan.",
};


export default function ProductCatalogSideLayout() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter produk berdasarkan kategori yang aktif
  const filteredProducts = products.filter(product => product.category === activeCategory);
  // Ambil gambar yang sesuai kategori aktif
  const activeImage = categoryImages[activeCategory];

  return (
    <section id="katalog" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- HEADER SECTION (Judul & Filter) --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Katalog Produk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Pilihan undangan eksklusif dengan berbagai model dan bahan berkualitas tinggi. Silakan pilih kategori di bawah.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 inline-block bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>


        {/* --- MAIN CONTENT LAYOUT (Kiri: Foto, Kanan: List) --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* === KOLOM KIRI: Showcase Image === */}
          {/* lg:w-5/12 artinya di layar besar lebarnya 5 dari 12 kolom (sekitar 40%) */}
          {/* sticky top-24 membuat gambar tetap terlihat saat di-scroll */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-28 z-10">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <Image
                src={activeImage}
                alt={activeCategory}
                fill
                priority // Tambahkan priority karena ini gambar utama (LCP)
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Informasi Kategori di atas Gambar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium text-white/80 mb-1 uppercase tracking-wider">Kategori</span>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2">{activeCategory}</h3>
                <p className="text-white/90 text-sm lg:text-base max-w-xs">
                  {categoryDescriptions[activeCategory]}
                </p>
              </div>
            </div>
          </div>


          {/* === KOLOM KANAN: Daftar Varian Produk === */}
          <div className={`w-full lg:w-7/12 grid gap-4 ${
            // Logika dinamis: Jika produk > 2, gunakan 2 kolom di desktop agar tidak terlalu panjang
            filteredProducts.length > 2
              ? 'grid-cols-1 xl:grid-cols-2'
              : 'grid-cols-1'
            }`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.key}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Tag Kategori */}
                    <div className="text-[10px] font-bold tracking-wider text-secondary uppercase mb-2 inline-block bg-secondary/10 px-2 py-0.5 rounded">
                      {product.category}
                    </div>

                    {/* Nama Produk - Dibuat lebih ringkas ukurannya */}
                    <h3 className="text-lg font-bold text-text-primary font-serif mb-3 group-hover:text-primary transition-colors leading-tight">
                      {product.name}
                    </h3>

                    {/* Spesifikasi - Gunakan text-xs agar lebih hemat ruang */}
                    <ul className="space-y-1.5 mb-4">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="line-clamp-1">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bagian Bawah Kartu */}
                  {/* <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-medium italic">Bonus Lengkap</span>
                    <button className="text-xs font-bold text-primary hover:underline">
                      Detail →
                    </button>
                  </div> */}
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-400">
                Tidak ada produk.
              </div>
            )}
          </div>

        </div> {/* End Main Content Layout */}

      </div>
    </section>
  );
}