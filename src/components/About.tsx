import aboutImage from "@/assets/about-palms.jpg";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] font-bold text-outline opacity-40 select-none whitespace-nowrap">
          ABOUT US
        </h2>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            আমাদের সম্পর্কে
          </h2>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground/90">
              আমরা বাংলাদেশের ঐতিহ্যবাহী খেজুরের গুড় উৎপাদনকারী। আমাদের গুড় সম্পূর্ণ প্রাকৃতিক উপায়ে তৈরি, কোনো রাসায়নিক বা কৃত্রিম উপাদান ব্যবহার করা হয় না।
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              প্রতিটি শীত মৌসুমে আমরা সযত্নে খেজুর গাছ থেকে রস সংগ্রহ করি এবং ঐতিহ্যবাহী পদ্ধতিতে গুড় তৈরি করি। আমাদের লক্ষ্য হলো বিশুদ্ধ ও স্বাস্থ্যকর খাদ্য সবার কাছে পৌঁছে দেওয়া।
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">✅</span>
                <span className="font-semibold">১০০% খাঁটি</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🌿</span>
                <span className="font-semibold">প্রাকৃতিক</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-2xl">🏆</span>
                <span className="font-semibold">উন্নত মান</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl gradient-primary p-1 animate-float overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Date Palm Trees" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
