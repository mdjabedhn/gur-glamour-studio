import { Card } from "@/components/ui/card";
import { FaDumbbell, FaShieldAlt, FaHeartbeat, FaSnowflake, FaLeaf, FaStar } from "react-icons/fa";
import { IconType } from "react-icons";

const benefits = [
  {
    icon: FaDumbbell,
    title: "শক্তি বৃদ্ধি",
    description: "প্রাকৃতিক শর্করা যা তাৎক্ষণিক শক্তি প্রদান করে"
  },
  {
    icon: FaShieldAlt,
    title: "রোগ প্রতিরোধ",
    description: "অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ যা রোগ প্রতিরোধ ক্ষমতা বাড়ায়"
  },
  {
    icon: FaHeartbeat,
    title: "হৃদপিণ্ড সুরক্ষা",
    description: "কোলেস্টেরল নিয়ন্ত্রণে সাহায্য করে"
  },
  {
    icon: FaSnowflake,
    title: "শীতকালীন সুরক্ষা",
    description: "শরীর গরম রাখে এবং ঠান্ডা থেকে রক্ষা করে"
  },
  {
    icon: FaLeaf,
    title: "পুষ্টি সমৃদ্ধ",
    description: "আয়রন, ক্যালসিয়াম এবং ভিটামিন সমৃদ্ধ"
  },
  {
    icon: FaStar,
    title: "ত্বকের উজ্জ্বলতা",
    description: "ত্বক সুন্দর ও উজ্জ্বল রাখতে সাহায্য করে"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 gradient-warm relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] font-bold text-outline opacity-40 select-none whitespace-nowrap">
          BENEFITS
        </h2>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            স্বাস্থ্য উপকারিতা
          </h2>
          <div className="h-1 w-24 gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            খেজুরের গুড়ের অসাধারণ স্বাস্থ্য উপকারিতা
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 card-3d bg-card/50 backdrop-blur-sm border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
