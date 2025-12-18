"use client";

import { useState } from 'react';
import pricelistData from '../data/pricelist.json';

type ProductData = {
  key: string;
  name: string;
  category: string;
  specs: string[];
};

const products = Object.entries(pricelistData).map(([key, data]) => ({
  key,
  ...data,
})) as ProductData[];

const categories = ["All", "Hardcover", "Semi Hardcover", "Softcover"];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="katalog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Katalog Produk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Pilihan undangan eksklusif dengan berbagai model dan bahan berkualitas tinggi.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-transparent hover:border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.key} 
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                  <span className="font-medium">Foto: {product.name}</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-auto">
                  <div className="text-xs font-bold tracking-wider text-secondary uppercase mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary font-serif mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {product.specs.slice(0, 3).map((spec, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                  <span className="text-gray-500">Bonus Lengkap</span>
                  <span className="font-medium text-primary">Lihat Detail →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
                Tidak ada produk ditemukan untuk kategori ini.
            </div>
        )}
      </div>
    </section>
  );
}
