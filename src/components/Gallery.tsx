import Image from 'next/image';
// Import gambar secara manual (Next.js butuh ini untuk optimasi folder src)
import product1 from '@/assets/images/products/product1.jpeg';
import product2 from '@/assets/images/products/product2.jpeg';
import product3 from '@/assets/images/products/product3.jpeg';
import product4 from '@/assets/images/products/product4.jpeg';
import product5 from '@/assets/images/products/product5.jpeg';
import product6 from '@/assets/images/products/product6.jpg';

export default function Gallery() {
  // Array objek agar kita bisa menambahkan caption sesuai model di pricelist
  const galleryItems = [
    { src: product1, alt: "Model Single Hardcover", category: "Hardcover" },
    { src: product2, alt: "Model Boarding Pass", category: "Semi Hardcover" },
    { src: product3, alt: "Model Softcover Lipat 3", category: "Softcover" },
    { src: product4, alt: "Wedding Invitation Gold", category: "Premium" },
    { src: product5, alt: "Custom Envelope Design", category: "Hardcover" },
    { src: product6, alt: "Elegant Softcover Invitation", category: "Softcover" },
  ];

  return (
    <section className="py-20 bg-[#F4F4F4]"> {/* Menggunakan background light grey dari TechSpec */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#2C3333] mb-4">
            Galeri Produk Dondon Invitation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Koleksi undangan mulai dari Hardcover, Semi Hardcover, hingga Softcover dengan bahan Art Carton berkualitas[cite: 6, 15, 255, 350].
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur" // Menampilkan efek blur saat loading
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs uppercase tracking-widest mb-1">{item.category}</p>
                  <p className="font-serif font-medium">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://instagram.com/dondon_invitation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5F7161] font-medium hover:text-[#E7AB79] transition-colors"
          >
            {/* SVG Instagram tetap sama */}
            Lihat Portfolio Lengkap di Instagram
          </a>
        </div>
      </div>
    </section>
  );
}