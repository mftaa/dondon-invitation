export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah & Dimas",
      quote: "Hasil undangannya bagus banget, sesuai ekspektasi. Kertasnya tebal dan cetakannya tajam. Adminnya juga ramah banget ngelayanin revisi desain berkali-kali. Recommended!",
      rating: 5,
    },
    {
      name: "Rina & Budi",
      quote: "Pengerjaan cepet banget, pesen 500 pcs selesai kurang dari 2 minggu. Harganya juga miring dibanding tempat lain tapi kualitas ga murahan. Makasih Dondon Invitation!",
      rating: 5,
    },
    {
      name: "Putri & Reza",
      quote: "Awalnya ragu pesen online, tapi pas barang dateng puas banget. Packing aman dan rapi. Bonus plastiknya juga pas jumlahnya. Sukses terus ya!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Kata Mereka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testimoni jujur dari pasangan yang telah mempercayakan undangan pernikahan mereka kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">"{review.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-text-primary font-serif">{review.name}</p>
                <p className="text-xs text-gray-500">Happy Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
