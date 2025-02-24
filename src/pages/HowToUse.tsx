
import { HelpCircle, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";

const HowToUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-emerald-500" />
            <h1 className="text-4xl font-bold">How to Use</h1>
          </div>

          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-lg rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">Step 1: Select Your Diabetic Level</h2>
              <p className="text-muted-foreground mb-4">
                Before asking for meal recommendations, select your diabetic level from the dropdown menu:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6 list-disc mb-6">
                <li>No Diabetic</li>
                <li>Mild Diabetic</li>
                <li>Moderate Diabetic</li>
                <li>Severe Diabetic</li>
                <li>Profiliative Diabetic</li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-lg rounded-lg border border-border p-6">
              <h2 className="text-2xl font-semibold mb-4">Step 2: Query Format Guide</h2>
              <p className="text-muted-foreground mb-6">
                To get the best meal recommendations, include the following details in your query:
              </p>

              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-2">Example Query Format:</p>
                <div className="p-4 bg-background/50 rounded-lg border border-border text-center">
                  I want <span className="text-emerald-500 font-medium">vegetarian</span> {" "}
                  <span className="text-emerald-500 font-medium">lunch</span> suggestions for {" "}
                  <span className="text-emerald-500 font-medium">Monday</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">Required Information</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-1 text-emerald-500" />
                      <div>
                        <span className="font-medium">Meal Type:</span> Specify{" "}
                        <span className="underline decoration-emerald-500">vegetarian</span>,{" "}
                        <span className="underline decoration-emerald-500">non-vegetarian</span>, or{" "}
                        <span className="underline decoration-emerald-500">vegan</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-1 text-emerald-500" />
                      <div>
                        <span className="font-medium">Meal Time:</span> Specify{" "}
                        <span className="underline decoration-emerald-500">breakfast</span>,{" "}
                        <span className="underline decoration-emerald-500">morning snack</span>,{" "}
                        <span className="underline decoration-emerald-500">lunch</span>,{" "}
                        <span className="underline decoration-emerald-500">mid-day snack</span>, or{" "}
                        <span className="underline decoration-emerald-500">dinner</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-1 text-emerald-500" />
                      <div>
                        <span className="font-medium">Day:</span> Specify a day of the week ({" "}
                        <span className="underline decoration-emerald-500">Monday</span>,{" "}
                        <span className="underline decoration-emerald-500">Tuesday</span>, etc.)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">Sample Queries</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• "I want vegetarian breakfast options for Sunday"</li>
                    <li>• "Show me non-vegetarian dinner recipes for Wednesday"</li>
                    <li>• "What are some vegan lunch ideas for Monday?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
