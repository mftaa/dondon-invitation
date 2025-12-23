import { Suspense } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomerOrderForm from '../../components/CustomerOrderForm';

export default function OrderFormPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]">Loading...</div>}>
          <CustomerOrderForm />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
