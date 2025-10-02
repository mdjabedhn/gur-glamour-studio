const Footer = () => {
  const whatsappMessage = encodeURIComponent("hello");
  const whatsappUrl = `https://wa.me/8801818238270?text=${whatsappMessage}`;
  
  return (
    <footer className="py-8 gradient-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-2">
          Designed and developed by{" "}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-white/80 transition-colors"
          >
            Jabed Digital Agency
          </a>
        </p>
        <p className="text-sm text-white/80">
          © 2025 খেজুরের গুড়। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
