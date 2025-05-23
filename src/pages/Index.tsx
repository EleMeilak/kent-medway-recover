import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Index: React.FC = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-100 border-b">
        <div className="nhs-container py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-nhs-blue font-bold text-lg mb-2">
              Kent & Medway NHS
            </div>
            <h1 className="nhs-heading-xl mb-6 text-teal-600">
              Post COVID Assessment Service
            </h1>
            <p className="nhs-body max-w-3xl mx-auto text-gray-600 mb-8">
              A clinical decision support tool to assist healthcare professionals in 
              assessing and managing patients with post-COVID symptoms, providing 
              evidence-based recommendations and local service information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-nhs-blue hover:bg-nhs-dark-blue text-lg" onClick={() => navigate("/login")}>
                Clinical Login
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/about")} className="border-nhs-blue text-nhs-blue hover:bg-nhs-blue/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="nhs-container py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="nhs-heading-l mb-4">Clinical Support Features</h2>
          <p className="nhs-body text-gray-600 max-w-3xl mx-auto">
            Our assessment tool provides comprehensive support for clinicians managing 
            patients with post-COVID symptoms across Kent & Medway.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="w-12 h-12 bg-nhs-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nhs-blue">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect width="8" height="5" x="8" y="2" rx="1"></rect>
                <path d="M9 14h.01"></path>
                <path d="M13 14h.01"></path>
                <path d="M9 18h.01"></path>
                <path d="M13 18h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Symptom Assessment</h3>
            <p className="text-gray-600">
              Structured evaluation of post-COVID symptoms with severity ratings and 
              comprehensive categorization.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="w-12 h-12 bg-nhs-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nhs-blue">
                <path d="M21 12a9 9 0 0 1-9 9"></path>
                <path d="M3 12a9 9 0 0 1 9-9"></path>
                <path d="M12 3v9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Service Finder</h3>
            <p className="text-gray-600">
              Identify appropriate local services in Kent & Medway based on patient location 
              and specific post-COVID symptoms.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="w-12 h-12 bg-nhs-blue/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nhs-blue">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Evidence-Based Guidance</h3>
            <p className="text-gray-600">
              Clinical recommendations based on NICE guidelines and local care pathways 
              for post-COVID syndrome.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-nhs-blue">
        <div className="nhs-container py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="nhs-heading-m text-white mb-4">
              Ready to use the Post COVID Assessment Tool?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Login with your NHS credentials to access the full clinical assessment platform
            </p>
            <Button variant="secondary" size="lg" onClick={() => navigate("/login")}>
              Access Clinical Portal
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="nhs-container py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-nhs-blue mb-3">Post COVID Assessment Service</h3>
              <p className="text-sm text-gray-600">
                A clinical decision support tool for healthcare professionals in Kent & Medway
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-nhs-blue mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nice.org.uk/guidance/ng188" className="text-gray-600 hover:text-nhs-blue">
                    NICE Guidelines
                  </a>
                </li>
                <li>
                  <a href="https://www.england.nhs.uk/coronavirus/" className="text-gray-600 hover:text-nhs-blue">
                    NHS England COVID-19
                  </a>
                </li>
                <li>
                  <a href="https://www.yourcovidrecovery.nhs.uk/" className="text-gray-600 hover:text-nhs-blue">
                    Your COVID Recovery
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-nhs-blue mb-3">Contact</h3>
              <address className="text-sm text-gray-600 not-italic">
                Post COVID Assessment Team<br />
                Kent & Medway NHS<br />
                <a href="mailto:postcovid@kent.nhs.uk" className="hover:text-nhs-blue">
                  postcovid@kent.nhs.uk
                </a>
              </address>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Kent & Medway NHS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;