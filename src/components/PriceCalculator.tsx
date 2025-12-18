"use client";

import { useState, useMemo } from 'react';
import pricelistData from '../data/pricelist.json';

type PriceTier = {
  qty: number;
  price: number;
};

type ProductData = {
  name: string;
  category: string;
  specs: string[];
  prices: PriceTier[];
};

type Pricelist = Record<string, ProductData>;

const pricelist = pricelistData as Pricelist;

export default function PriceCalculator() {
  const [selectedModel, setSelectedModel] = useState<string>(Object.keys(pricelist)[0]);
  const [qty, setQty] = useState<number>(100);

  const product = pricelist[selectedModel];

  // Logic to find the closest price tier
  const estimatedPrice = useMemo(() => {
    if (!product) return { unit: 0, total: 0 };

    // Find the applicable price tier
    // We want the price for the tier equal to or less than the input qty
    // If input qty is higher than max tier, use the lowest price (highest qty tier)
    // If input qty is lower than min tier, use the highest price (lowest qty tier)
    
    // Sort prices by qty ascending just in case
    const sortedPrices = [...product.prices].sort((a, b) => a.qty - b.qty);
    
    let applicablePrice = sortedPrices[0].price; // Default to highest price (lowest qty)

    for (let i = 0; i < sortedPrices.length; i++) {
        if (qty >= sortedPrices[i].qty) {
            applicablePrice = sortedPrices[i].price;
        } else {
            break; 
        }
    }

    return {
      unit: applicablePrice,
      total: applicablePrice * qty
    };
  }, [product, qty]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Kalkulator Harga Pintar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hitung estimasi biaya undanganmu dengan mudah. Harga menyesuaikan dengan jumlah pesanan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Model Undangan
                </label>
                <select
                  id="model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900 transition-shadow"
                >
                  {Object.entries(pricelist).map(([key, data]) => (
                    <option key={key} value={key}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="qty" className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Pesanan (Pcs)
                </label>
                <input
                  type="number"
                  id="qty"
                  min="50"
                  step="10"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900 transition-shadow"
                />
                <p className="text-xs text-gray-500 mt-2">
                  *Minimal pemesanan 100 pcs untuk harga terbaik
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Spesifikasi:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {product.specs.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-primary/5 rounded-xl p-6 lg:p-8 flex flex-col justify-center items-center text-center space-y-6 border border-primary/10">
              <div>
                <p className="text-gray-600 font-medium mb-1">Harga Satuan</p>
                <p className="text-3xl font-bold text-primary font-serif">
                  {formatCurrency(estimatedPrice.unit)}
                </p>
                <span className="text-xs text-gray-500">per pcs</span>
              </div>

              <div className="w-full h-px bg-primary/20"></div>

              <div>
                <p className="text-gray-600 font-medium mb-1">Estimasi Total Biaya</p>
                <p className="text-4xl lg:text-5xl font-bold text-text-primary font-serif">
                  {formatCurrency(estimatedPrice.total)}
                </p>
              </div>

              <div className="w-full pt-4">
                 <a 
                  href={`https://wa.me/6287777479033?text=Halo%20Dondon,%20saya%20tertarik%20dengan%20${product.name}%20sejumlah%20${qty}%20pcs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors shadow-md"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
