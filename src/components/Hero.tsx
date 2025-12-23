import Link from 'next/link';
import Image from 'next/image';
import heroImage from '@/assets/images/products/product0.jpg';
export default function Hero() {
  return (
    <section className="relative bg-background py-18 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-text-primary mb-6 leading-tight">
              Premium Wedding <br/>
              <span className="text-primary">Invitation</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Wujudkan undangan pernikahan impianmu dengan desain elegan, bahan berkualitas, dan harga terjangkau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="https://drive.google.com/file/d/18pR7pYLbwNTd4-4Hn_PnVmT-twY3-xV_/view?usp=sharing" 
                target="_blank"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Lihat Katalog
              </Link>
              <a 
                href="https://wa.me/6287777479033?text=Halo%20Dondon%20Invitation,%20saya%20ingin%20konsultasi%20undangan" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all shadow-md"
              >
                Konsultasi Gratis
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Free Kartu Penukaran Souvenir</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Free Plastik</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Free Label Nama</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Free E-Invitation</span>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200">
               {/* Placeholder for Product Image */}
               <Image
                 src={heroImage}
                 alt="Hero Product Image"
                 fill
                 className="object-cover"
                 placeholder="blur" // Menampilkan efek blur saat loading
               />
               {/* <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
                  <span className="text-xl font-medium">Foto Produk High-Res</span>
               </div> */}
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-[-30px] left-[-30px] w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
