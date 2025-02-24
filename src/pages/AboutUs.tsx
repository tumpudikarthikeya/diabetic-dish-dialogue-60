
import { Info } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Info className="w-8 h-8 text-emerald-500" />
            <h1 className="text-4xl font-bold">About Us</h1>
          </div>
          
          <div className="space-y-8 text-lg">
            <div className="bg-card/50 backdrop-blur-lg rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                We are dedicated to helping individuals manage their dietary needs through personalized meal recommendations, 
                with a special focus on diabetic-friendly options. Our AI-powered assistant provides tailored suggestions 
                based on your specific diabetes level, dietary preferences, and daily schedule.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-lg rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>Personalized meal recommendations for 5 different diabetic levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>Support for vegetarian, non-vegetarian, and vegan dietary preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>Comprehensive meal planning for all times of day</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
                  <span>Weekly meal variety with day-specific recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-lg rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                We combine nutritional expertise with AI technology to provide intelligent, personalized meal suggestions 
                that account for your specific dietary requirements, preferences, and lifestyle needs. Our recommendations 
                are designed to help you maintain a healthy, balanced diet while managing your diabetes effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
