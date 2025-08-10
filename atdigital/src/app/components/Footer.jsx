import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#4f46e5] text-white">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo-white.png"
                alt="at digital logo"
                width={150}
                height={40}
              />
            </Link>
            <p className="text-indigo-200 text-sm">
              Your goal is our target. Not anything in between. We are an online marketing platform that enables businesses to grow objective - your business results.
            </p>
          </div>

          {/* Column 2: Our Technologies */}
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4">Our Technologies</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">ReactJS</Link>
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">Gatsby</Link>
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">NextJS</Link>
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">NodeJS</Link>
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4">Our Services</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">Social Media Marketing</Link>
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">Web & Mobile App Development</Link>
              <Link href="#" className="block text-indigo-200 hover:text-white transition-colors">Data & Analytics</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-indigo-500/50 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-indigo-200 order-2 sm:order-1 mt-4 sm:mt-0">© {new Date().getFullYear()} AT Digital. All rights reserved.</p>
          <div className="flex space-x-4 order-1 sm:order-2">
            <Link href="#" className="text-indigo-200 hover:text-white">Privacy Policy</Link>
            <span className="text-indigo-400">|</span>
            <Link href="#" className="text-indigo-200 hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;