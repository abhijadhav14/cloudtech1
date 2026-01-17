import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Building, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const placements = [
  {
    name: "Shashidhara Chandrashekar",
    role: "SAP Consultant",
    company: "Capgemini",
    salary: "14 LPA",
    program: "SAP Training",
    initials: "SC",
    quote: "Career gap of 5 months. Cloud Tech Solutions helped me restart my career with confidence. The practical training was exactly what I needed.",
  },
  {
    name: "Bharath Kumar AS",
    role: "SAP Fico Consultant",
    company: "L&T Infotech",
    salary: "12 LPA",
    program: "SAP Training",
    initials: "BKS",
    quote: "Switched from non-IT to IT. Best decision of my life. The mentors were incredibly supportive throughout my journey.",
  },
  {
    name: "Anil Reddy",
    role: "Cloud Developer",
    company: "L&T Infotech",
    salary: "6 LPA",
    program: "SAP",
    initials: "AR",
    quote: "Fresher with no experience. Got placed in 45 days. The placement support was outstanding.",
  },
  {
    name: "Sneha Patel",
    role: "DevOps Engineer",
    company: "Wipro",
    salary: "8 LPA",
    program: "DevOps Engineering",
    initials: "SP",
    quote: "The hands-on projects and real-world scenarios prepared me perfectly for my current role.",
  },
  {
    name: "Vikram Singh",
    role: "Cloud Architect",
    company: "Google",
    salary: "18 LPA",
    program: "Cloud Computing",
    initials: "VS",
    quote: "The AWS and Azure certification prep was invaluable. Now I'm working at my dream company.",
  },
  {
    name: "Deepa Nair",
    role: "Python Developer",
    company: "Tech Mahindra",
    salary: "5 LPA",
    program: "Python Full-Stack",
    initials: "DN",
    quote: "Coming from a non-technical background, I was nervous. But the structured approach made learning easy.",
  },
];

const companies = [
  "TCS", "Infosys", "Wipro", "Amazon", "Google", "Microsoft", 
  "Tech Mahindra", "HCL", "Cognizant", "Accenture", "IBM", "Cisco"
];

const Placements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Alumni <span className="text-yellow-300">Success Stories</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Real stories from real people who transformed their careers with Cloud Tech Solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">2500+</span>
              </div>
              <p className="text-muted-foreground">Students Placed</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-success" />
                <span className="text-3xl font-bold text-foreground">97%</span>
              </div>
              <p className="text-muted-foreground">Placement Rate</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-muted-foreground">Hiring Partners</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-warning" />
                <span className="text-3xl font-bold text-foreground">28 LPA</span>
              </div>
              <p className="text-muted-foreground">Highest Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="text-blue-500">Achievers</span>
            </h2>
            <p className="section-subtitle">
              Meet some of our successful alumni who are now working at top companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placements.map((placement) => (
              <div key={placement.name} className="bg-card rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground text-xl font-bold">
                    {placement.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{placement.name}</h3>
                    <p className="text-sm text-muted-foreground">{placement.role}</p>
                    <p className="text-sm text-primary font-medium">{placement.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-star fill-star" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm italic mb-4">
                  "{placement.quote}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Program</p>
                    <p className="text-sm font-medium text-foreground">{placement.program}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Package</p>
                    <p className="text-lg font-bold text-success">{placement.salary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="text-blue-500">Hiring Partners</span>
            </h2>
            <p className="section-subtitle">
              Top companies that hire from Cloud Tech Solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company) => (
              <div 
                key={company}
                className="bg-card px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to write your success story?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community of successful professionals and transform your career.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/programs">
              Explore Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;