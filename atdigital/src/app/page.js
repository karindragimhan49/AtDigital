import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center md:justify-start h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-xl mx-4 md:mx-0 md:ml-12 lg:ml-24">
          
         
          <div 
            className="bg-gradient-to-r from-teal-400 to-cyan-500 p-6 md:p-8 rounded-lg shadow-2xl text-center md:text-left" /* <-- මෙතන තමයි වෙනස */
          >
            {/* Headline */}
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            
            {/* Button */}
            <Link 
              href="/consultation" 
              className="mt-8 inline-block bg-orange-500 text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}