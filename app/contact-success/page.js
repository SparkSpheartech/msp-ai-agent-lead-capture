import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Thank You - Message Received',
};

export default function ContactSuccess() {
  return (
    <>
      <Navbar />
      <main className="min-h-[75vh] flex items-center justify-center bg-black pt-20 px-6">
        <div className="max-w-md text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            ✓
          </div>
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            We've received your message and will get back to you within 24 hours.
          </p>
          <Link 
            href="/" 
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-primary hover:text-black transition-colors"
          >
            Return Home
          </Link>
          <div className="mt-8 text-sm text-gray-500">Or call us at <a href="tel:2602670641" className="underline">(260) 267-0641</a></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
