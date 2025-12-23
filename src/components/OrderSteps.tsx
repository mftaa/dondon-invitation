import Link from 'next/link';

export default function OrderSteps() {
  const steps = [
    {
      id: 1,
      title: "Order Via WhatsApp",
      description: "Konsultasi awal dan pemilihan model undangan.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Isi Data & DP 1",
      description: "Mengisi form data pernikahan & pembayaran DP 50%.",
      link: "/order-form",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Proses Desain",
      description: "Revisi desain hingga acc (Teks unlimited, Desain 2x).",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Cetak & Pelunasan",
      description: "Pelunasan sisa pembayaran sebelum proses cetak dimulai.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      id: 5,
      title: "Pengiriman",
      description: "Undangan siap dikirim ke alamat tujuan.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="cara-pesan" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Alur Pemesanan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proses mudah dan transparan dari awal hingga undangan sampai di tanganmu.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-3 z-0 mx-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-white rounded-full text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-primary font-serif mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 px-2 leading-relaxed mb-2">
                  {step.description}
                </p>
                
                {step.link && (
                    
                  <Link href={step.link} className="text-sm font-medium text-primary hover:text-secondary hover:underline transition-colors">
                    Klik untuk isi form
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
