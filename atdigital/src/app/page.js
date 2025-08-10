import Link from 'next/link';
import Image from 'next/image'; 
import Faq from './components/Faq';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main>
      
      <div className="block lg:hidden">
        
        
        <div className="relative h-[50vh] w-full">
          <Image
            src="/hero-background.png"
            alt="A modern workspace with a laptop"
            fill 
            className="object-cover" 
          />
        </div>
          
        
        
        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-8 text-center">
          <h1 className="text-white text-3xl font-bold leading-tight">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <Link
            href="/consultation"
            className="mt-6 inline-block bg-orange-500 text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-orange-600"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

     
      <section 
        className="relative hidden lg:flex items-center justify-start h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-xl ml-24">
          <div 
            className="bg-gradient-to-r from-teal-400 to-cyan-500 p-8 rounded-lg shadow-2xl text-left"
          >
            <h1 className="text-white text-4xl font-bold leading-tight">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <Link 
              href="/consultation" 
              className="mt-8 inline-block bg-orange-500 text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-orange-600"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

  

      {/* Services Section Container */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">

          {/* 1. Web & Mobile App Development Section */}
          <div className="flex flex-col md:flex-row items-center mb-16 md:mb-24">
            {/* Image Div */}
            <div className="md:w-1/2 p-4 flex justify-center">
              <Image 
                src="/image1.png" 
                alt="Web and Mobile App Development"
                width={400}
                height={400}
                className="max-w-xs md:max-w-sm"
              />
            </div>
            {/* Text Div */}
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
                Web & Mobile App Development
              </h2>
              <p className="text-gray-600 mb-6">
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <Link href="/learn-more" className="inline-block bg-orange-500 text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-orange-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>

          {/* 2. Digital Strategy Consulting Section */}
          
          <div className="flex flex-col md:flex-row-reverse items-center">
            {/* Image Div */}
            <div className="md:w-1/2 p-4 flex justify-center">
              <Image 
                src="/image2.png" 
                alt="Digital Strategy Consulting"
                width={400}
                height={400}
                className="max-w-xs md:max-w-sm"
              />
            </div>
            {/* Text Div */}
            <div className="md:w-1/2 p-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#4f46e5] mb-4">
                Digital Strategy Consulting
              </h2>
              <p className="text-gray-600 mb-6">
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <Link href="/learn-more" className="inline-block bg-orange-500 text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-orange-600 transition-colors">
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Faq />

<Footer />
    </main>
  );
}