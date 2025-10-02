import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    image: product1,
    name: "খেজুরের গুড় ব্লক",
    nameEn: "Jaggery Blocks",
    price: "৳৪৫০",
    weight: "১ কেজি",
    description: "খাঁটি খেজুরের রস থেকে তৈরি কঠিন গুড়"
  },
  {
    image: product2,
    name: "খেজুরের গুড় পাউডার",
    nameEn: "Jaggery Powder",
    price: "৳৫০০",
    weight: "১ কেজি",
    description: "সহজে ব্যবহারযোগ্য পাউডার গুড়"
  },
  {
    image: product3,
    name: "খেজুরের রস",
    nameEn: "Palm Syrup",
    price: "৳৩৫০",
    weight: "৫০০ মিলি",
    description: "তাজা খেজুরের তরল রস"
  }
];

const Products = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-2 font-hind">
            আমাদের পণ্য
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-outline opacity-40 mb-6">
            OUR PRODUCTS
          </p>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            সকল পণ্য ১০০% খাঁটি এবং প্রাকৃতিক
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all duration-500 card-3d bg-card border-primary/20"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {product.weight}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 italic">{product.nameEn}</p>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">{product.price}</span>
                  <Button className="gradient-primary text-white shadow-[var(--shadow-glow)]">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    অর্ডার করুন
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
