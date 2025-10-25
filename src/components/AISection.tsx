import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const AISection = () => {
  return (
    <section id="ai" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why AI, and why me?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a non-coder who knows AI looks intimidating, yet many tools are already easy to use.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 flex-shrink-0">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path 
                    d="M24 4L24 12M24 36L24 44M12 24L4 24M44 24L36 24M16.8 16.8L11.2 11.2M36.8 31.2L31.2 36.8M31.2 11.2L36.8 16.8M11.2 36.8L16.8 31.2" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                  />
                  <circle cx="24" cy="24" r="6" fill="currentColor" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">AI Lab</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Turning AI's potential into simple, practical steps that anyone can start.
                </p>
                <Button variant="link" className="p-0 h-auto font-semibold group hover:gap-2 transition-all">
                  Get Starter Tutorial & Templates <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
