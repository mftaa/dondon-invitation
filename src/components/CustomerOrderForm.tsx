"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';

// --- Pindahkan ke luar komponen utama ---
type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ label, name, type = "text", placeholder = "", required = false, value, onChange }: InputFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
      />
    </div>
  );
}

type TextareaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextareaField({ label, name, placeholder = "", required = false, rows = 3, value, onChange }: TextareaFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
      ></textarea>
    </div>
  );
}
// --- Sampai sini ---

export default function CustomerOrderForm() {
  const searchParams = useSearchParams();
  const model = searchParams.get('model') || '-';
  const qty = searchParams.get('qty') || '-';
  const price = searchParams.get('price') || '0';

  const [formData, setFormData] = useState({
    wanitaNamaLengkap: '',
    wanitaNamaPanggilan: '',
    wanitaNamaAyah: '',
    wanitaNamaIbu: '',
    wanitaAnakKe: '',
    priaNamaLengkap: '',
    priaNamaPanggilan: '',
    priaNamaAyah: '',
    priaNamaIbu: '',
    priaAnakKe: '',
    akadHariTanggal: '',
    akadWaktu: '',
    akadTempat: '',
    resepsiHariTanggal: '',
    resepsiWaktu: '',
    resepsiTempat: '',
    catatan: '',
    noWa: '',
    email: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'noWa') {
      let phone = value.replace(/\D/g, '');
      if (phone.startsWith('0')) phone = '62' + phone.slice(1);
      setFormData(prev => ({ ...prev, [name]: phone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatCurrency = (value: string | number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value));

   const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Halo Dondon Invitation, saya ingin mengirimkan data pemesanan undangan:

*DETAIL PESANAN*
Model: ${model}
Jumlah: ${qty} pcs
Estimasi Harga: ${formatCurrency(price)}

*MEMPELAI WANITA*
Nama Lengkap: ${formData.wanitaNamaLengkap}
Nama Panggilan: ${formData.wanitaNamaPanggilan}
Nama Ayah: ${formData.wanitaNamaAyah}
Nama Ibu: ${formData.wanitaNamaIbu}
Anak ke: ${formData.wanitaAnakKe}

*MEMPELAI PRIA*
Nama Lengkap: ${formData.priaNamaLengkap}
Nama Panggilan: ${formData.priaNamaPanggilan}
Nama Ayah: ${formData.priaNamaAyah}
Nama Ibu: ${formData.priaNamaIbu}
Anak ke: ${formData.priaAnakKe}

*UPACARA PERNIKAHAN (AKAD)*
Hari, Tanggal: ${formData.akadHariTanggal}
Waktu: ${formData.akadWaktu}
Tempat: ${formData.akadTempat}

*RESEPSI*
Hari, Tanggal: ${formData.resepsiHariTanggal}
Waktu: ${formData.resepsiWaktu}
Tempat: ${formData.resepsiTempat}

*KONTAK & CATATAN*
No. WA: ${formData.noWa}
Email: ${formData.email}
Catatan: ${formData.catatan}
`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6287777479033?text=${encodedMessage}`, '_blank');
  };

  const SectionTitle = ({ title }: { title: string }) => (
    <h3 className="text-xl font-serif font-bold text-primary mt-8 mb-4 border-b border-gray-200 pb-2">
      {title}
    </h3>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
              Form Data Pernikahan
            </h2>
            <p className="text-gray-600">
              Silakan lengkapi data berikut untuk keperluan desain undangan.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Order Summary Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-primary mb-4 font-serif">Detail Pesanan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="block text-gray-500">Model Undangan</span>
                  <span className="font-semibold text-gray-900">{model}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Jumlah Pesanan</span>
                  <span className="font-semibold text-gray-900">{qty} pcs</span>
                </div>
                <div>
                  <span className="block text-gray-500">Estimasi Total</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(price)}</span>
                </div>
              </div>
            </div>

            <SectionTitle title="Mempelai Wanita" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <InputField label="Nama Lengkap" name="wanitaNamaLengkap" required value={formData.wanitaNamaLengkap} onChange={handleChange} />
              <InputField label="Nama Panggilan" name="wanitaNamaPanggilan" required value={formData.wanitaNamaPanggilan} onChange={handleChange} />
              <InputField label="Nama Lengkap Ayah" name="wanitaNamaAyah" required value={formData.wanitaNamaAyah} onChange={handleChange} />
              <InputField label="Nama Lengkap Ibu" name="wanitaNamaIbu" required value={formData.wanitaNamaIbu} onChange={handleChange} />
              <InputField label="Anak Ke" name="wanitaAnakKe" placeholder="Contoh: Pertama, Kedua, Bungsu" required value={formData.wanitaAnakKe} onChange={handleChange} />
            </div>

            <SectionTitle title="Mempelai Pria" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <InputField label="Nama Lengkap" name="priaNamaLengkap" required value={formData.priaNamaLengkap} onChange={handleChange} />
              <InputField label="Nama Panggilan" name="priaNamaPanggilan" required value={formData.priaNamaPanggilan} onChange={handleChange} />
              <InputField label="Nama Lengkap Ayah" name="priaNamaAyah" required value={formData.priaNamaAyah} onChange={handleChange} />
              <InputField label="Nama Lengkap Ibu" name="priaNamaIbu" required value={formData.priaNamaIbu} onChange={handleChange} />
              <InputField label="Anak Ke" name="priaAnakKe" placeholder="Contoh: Pertama, Kedua, Bungsu" required value={formData.priaAnakKe} onChange={handleChange} />
            </div>

            <SectionTitle title="Upacara Pernikahan (Akad)" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <InputField label="Hari, Tanggal" name="akadHariTanggal" placeholder="Contoh: Minggu, 20 Oktober 2024" required value={formData.akadHariTanggal} onChange={handleChange} />
              <InputField label="Waktu" name="akadWaktu" placeholder="Contoh: 08.00 WIB - Selesai" required value={formData.akadWaktu} onChange={handleChange} />
              <div className="md:col-span-2">
                <TextareaField label="Tempat" name="akadTempat" required value={formData.akadTempat} onChange={handleChange} />
              </div>
            </div>

            <SectionTitle title="Resepsi" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <InputField label="Hari, Tanggal" name="resepsiHariTanggal" placeholder="Contoh: Minggu, 20 Oktober 2024" required value={formData.resepsiHariTanggal} onChange={handleChange} />
              <InputField label="Waktu" name="resepsiWaktu" placeholder="Contoh: 11.00 WIB - Selesai" required value={formData.resepsiWaktu} onChange={handleChange} />
              <div className="md:col-span-2">
                <TextareaField label="Tempat" name="resepsiTempat" required value={formData.resepsiTempat} onChange={handleChange} />
              </div>
            </div>

            <SectionTitle title="Kontak & Catatan" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <InputField label="No. WhatsApp" name="noWa" type="tel" placeholder="08..." required value={formData.noWa} onChange={handleChange} />
              <InputField label="Email" name="email" type="email" required value={formData.email} onChange={handleChange} />
              <div className="md:col-span-2">
                <TextareaField label="Catatan Penting (Opsional)" name="catatan" value={formData.catatan} onChange={handleChange} />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Kirim Data via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}