
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Diabetic Food Recommendation Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personalized AI assistant for managing diabetic-friendly meals across different dietary preferences and schedules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Diabetes Management Levels</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>No Diabetic - General healthy eating guidelines</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Mild Diabetic - Basic blood sugar control</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Moderate Diabetic - Stricter dietary control</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Severe Diabetic - Intensive dietary management</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Profiliative Diabetic - Specialized nutrition plans</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Dietary Preferences</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-medium mb-2">Vegetarian</h3>
                <p className="text-sm text-muted-foreground">Plant-based meals with dairy and eggs</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-medium mb-2">Non-Vegetarian</h3>
                <p className="text-sm text-muted-foreground">Complete meal plans including meat options</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-medium mb-2">Vegan</h3>
                <p className="text-sm text-muted-foreground">100% plant-based meal recommendations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Meal Schedule Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 rounded-lg border border-border bg-card text-center">
              <h3 className="font-medium">Breakfast</h3>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card text-center">
              <h3 className="font-medium">Morning Snack</h3>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card text-center">
              <h3 className="font-medium">Lunch</h3>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card text-center">
              <h3 className="font-medium">Mid-day Snack</h3>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card text-center">
              <h3 className="font-medium">Dinner</h3>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Weekly Meal Planning</h2>
            <p className="text-muted-foreground">
              Get personalized meal recommendations for every day of the week
            </p>
          </div>
          <Link to="/chat">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Start Chat Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
