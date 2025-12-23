export default function Footer() {
  return (
    <footer id="lokasi" className="bg-text-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Dondon Invitation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Spesialis cetak undangan pernikahan unik, elegan, dan berkualitas dengan harga terjangkau di Semarang.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/dondon_invitation" className="text-gray-400 hover:text-secondary transition-colors">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-serif text-white">Hubungi Kami</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+62 877-7747-9033 (WhatsApp)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>dondon.inv@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
             <h4 className="text-lg font-bold font-serif text-white">Alamat Workshop</h4>
             <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                   <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                   <span>Jl. Pegandan I No. 35,<br/>Semarang, Jawa Tengah</span>
                </li>
             </ul>
          </div>
          
           {/* Map */}
           <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-700">
             {/* Use an iframe for Google Maps Embed */}
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.203874020352!2d110.40798487499696!3d-6.985223293015748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b492323e031%3A0xc3676c0724838686!2sJl.%20Pegandan%20I%20No.35%2C%20Panggung%20Lor%2C%20Kec.%20Semarang%20Utara%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050177!5e0!3m2!1sen!2sid!4v1703000000000!5m2!1sen!2sid"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dondon Invitation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
