import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const models = [
  {
    id: "classic",
    name: "Classic Model",
    tagline: "The Flagship",
    subtitle: "Zero Upfront Risk. Maximum Reward.",
    description: "Start learning now, pay after placement. Our most popular model designed for students who believe in their potential.",
    color: "from-blue-500 to-blue-600",
    features: [
      { text: "Pay only after you get placed", included: true },
      { text: "100% Placement Guarantee", included: true },
      { text: "No upfront payment required", included: true },
      { text: "Access to all learning resources", included: true },
      { text: "Dedicated mentor support", included: true },
      { text: "Interview preparation", included: true },
      { text: "Resume building", included: true },
      { text: "Premium networking events", included: false },
    ],
    price: "Pay After Placement",
    priceNote: "Deduct a percentage from first 2 months salary",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Model",
    tagline: "In-Person Excellence",
    subtitle: "In-Person learning with flexible payments.",
    description: "Get the full classroom experience with flexible EMI options. Perfect for those who prefer face-to-face learning.",
    color: "from-purple-500 to-purple-600",
    features: [
      { text: "In-person classroom training", included: true },
      { text: "Flexible EMI options", included: true },
      { text: "100% Placement Assistance", included: true },
      { text: "Access to all learning resources", included: true },
      { text: "Dedicated mentor support", included: true },
      { text: "Interview preparation", included: true },
      { text: "Resume building", included: true },
      { text: "Premium networking events", included: true },
    ],
    price: "₹35,000 - ₹50,000",
    priceNote: "EMI options available starting ₹5,000/month",
    popular: false,
  },
  {
    id: "self-paced",
    name: "Self-Paced Model",
    tagline: "Learn at Your Speed",
    subtitle: "Flexible learning on your schedule.",
    description: "Perfect for working professionals. Access recorded sessions and learn at your own pace with weekend live doubt sessions.",
    color: "from-green-500 to-green-600",
    features: [
      { text: "Recorded video sessions", included: true },
      { text: "Weekend live doubt clearing", included: true },
      { text: "Placement Assistance", included: true },
      { text: "Access to all learning resources", included: true },
      { text: "Email mentor support", included: true },
      { text: "Interview preparation", included: false },
      { text: "Resume building", included: false },
      { text: "Premium networking events", included: false },
    ],
    price: "₹15,000 - ₹25,000",
    priceNote: "One-time payment with lifetime access",
    popular: false,
  },
];

const EngagementModels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Flexible <span className="text-yellow-300">Engagement Models</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Choose a payment model that works for your situation. We believe in making quality education accessible to everyone.
          </p>
        </div>
      </section>

      {/* Models Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div 
                key={model.id}
                className={`bg-card rounded-2xl overflow-hidden card-hover relative ${
                  model.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {model.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${model.color}`} />
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-primary font-medium">{model.tagline}</p>
                    <h3 className="font-heading text-2xl font-bold text-foreground mt-1">
                      {model.name}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">
                      {model.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {model.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-2xl font-bold text-foreground mb-1">{model.price}</p>
                    <p className="text-xs text-muted-foreground mb-4">{model.priceNote}</p>
                    
                    <Button 
                      className={`w-full ${model.popular ? "hero-gradient" : ""}`}
                      variant={model.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                What is the Classic Model (Pay After Placement)?
              </h3>
              <p className="text-muted-foreground">
                With our Classic Model, you don't pay anything upfront. You only start paying after you get placed 
                in a job. A percentage of your salary for the first 2 months goes towards course fees.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                Are EMI options available?
              </h3>
              <p className="text-muted-foreground">
                Yes! For the Premium Model, we offer flexible EMI options starting at ₹5,000 per month. 
                We've partnered with leading financial institutions to make this possible.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                What if I don't get placed?
              </h3>
              <p className="text-muted-foreground">
                For the Classic Model, if you don't get placed within 6 months of completing the program, 
                you don't pay anything. That's our guarantee. For other models, we continue to provide 
                placement support until you land a job.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                Can I switch between models?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade from Self-Paced to Premium model at any time by paying the difference. 
                However, once you start with the Classic Model, switching is not possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Talk to our counselors and find the perfect model for you.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">
              Get Free Counseling
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngagementModels;