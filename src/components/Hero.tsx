import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jaggery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Khejurer Gur Production" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <h2 className="text-[12rem] md:text-[20rem] font-bold text-outline opacity-40 select-none">
          JAGGERY
        </h2>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            খেজুরের গুড় 🌴
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-4 drop-shadow-lg">
            প্রকৃতির বিশুদ্ধ মিষ্টতা
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            ১০০% খাঁটি ও প্রাকৃতিক খেজুরের গুড় - সরাসরি গ্রাম থেকে আপনার ঘরে
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform text-lg px-8"
            >
              অর্ডার করুন <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8"
            >
              আরও জানুন
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
