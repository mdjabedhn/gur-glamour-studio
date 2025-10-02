import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "রহিমা খাতুন",
    location: "ঢাকা",
    rating: 5,
    comment: "অসাধারণ! একদম খাঁটি গুড়। পরিবারের সবাই খুব পছন্দ করেছে। আবারও অর্ডার দেব।",
    avatar: "👩"
  },
  {
    name: "করিম মিয়া",
    location: "চট্টগ্রাম",
    rating: 5,
    comment: "দুর্দান্ত মান। স্বাদ এবং গন্ধ সব কিছুই পারফেক্ট। খুবই সন্তুষ্ট।",
    avatar: "👨"
  },
  {
    name: "সালমা বেগম",
    location: "রাজশাহী",
    rating: 5,
    comment: "এত ভালো গুড় অনেকদিন খাইনি। গ্রামের গুড়ের মতো একই স্বাদ।",
    avatar: "👩‍🦱"
  },
  {
    name: "জামাল সাহেব",
    location: "সিলেট",
    rating: 5,
    comment: "প্যাকেজিং এবং ডেলিভারি চমৎকার। পণ্যের মান অসাধারণ।",
    avatar: "🧔"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-2 font-hind">
            গ্রাহক মতামত
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-outline opacity-40 mb-6">
            REVIEWS
          </p>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            আমাদের সন্তুষ্ট গ্রাহকদের মতামত
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-500 card-3d bg-card/80 backdrop-blur-sm border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{review.avatar}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-primary">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic leading-relaxed">"{review.comment}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
