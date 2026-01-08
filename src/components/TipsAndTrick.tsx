export default function TipsAndTrick() {
  const tips = [
    {
      title: "Kapan Sebaiknya Menyebar Undangan?",
      content: "Idealnya undangan fisik disebar H-1 bulan sebelum acara. Untuk undangan digital bisa disebar H-2 minggu agar tamu tidak lupa.",
      date: "12 Okt 2023",
    },
    {
      title: "Tips Memilih Kertas Undangan",
      content: "Untuk kesan mewah, pilih Art Carton dengan laminasi doff. Jika ingin kesan natural & vintage, kertas Jasmine atau Kraft bisa jadi pilihan tepat.",
      date: "28 Sep 2023",
    },
    {
      title: "Cek Dulu Sebelum Cetak!",
      content: "Pastikan tidak ada typo pada nama, gelar, tanggal, dan lokasi. Minta teman atau keluarga untuk bantu cross-check dummy desain.",
      date: "15 Sep 2023",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
              Tips & Trik Undangan
            </h2>
            <p className="text-gray-600 max-w-xl">
              Informasi berguna seputar persiapan pernikahan dan pemilihan undangan.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
            Baca Artikel Lainnya <span className="ml-2">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="p-6">
                <p className="text-xs text-secondary font-bold mb-2 uppercase tracking-wide">{tip.date}</p>
                <h3 className="text-xl font-bold text-text-primary font-serif mb-3 group-hover:text-primary transition-colors">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {tip.content}
                </p>
                {/* <a href="#" className="text-sm font-medium text-text-primary hover:text-primary inline-flex items-center">
                  Baca Selengkapnya
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
            Baca Artikel Lainnya <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
