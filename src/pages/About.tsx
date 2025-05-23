
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-nhs-blue text-white">
        <div className="nhs-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div onClick={() => navigate("/")} className="text-2xl font-bold cursor-pointer">
                Post COVID Assessment Service
              </div>
              <div className="text-sm hidden sm:block">Kent & Medway</div>
            </div>
            <div>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-nhs-dark-blue" 
                onClick={() => navigate("/login")}
              >
                Clinical Login
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* About Hero */}
        <div className="bg-gradient-to-b from-white to-gray-50 border-b">
          <div className="nhs-container py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="nhs-heading-xl text-nhs-blue mb-6">About the Assessment Tool</h1>
              <p className="nhs-body max-w-3xl mx-auto text-gray-600">
                Supporting healthcare professionals in Kent & Medway to provide evidence-based 
                care for patients experiencing post-COVID symptoms.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="nhs-container py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <section>
                <h2 className="nhs-heading-l text-nhs-blue mb-4">Purpose & Development</h2>
                <p className="mb-4">
                  The Post COVID Assessment Tool was developed to support healthcare professionals 
                  in Kent & Medway in delivering evidence-based care for patients experiencing 
                  symptoms of post-COVID syndrome (also known as Long COVID).
                </p>
                <p className="mb-4">
                  Based on NICE guidelines and local care pathways, this tool aims to standardize 
                  assessment approaches while providing personalized recommendations that take 
                  into account the unique healthcare landscape of Kent & Medway.
                </p>
                <p>
                  The tool was developed in collaboration with respiratory specialists, primary 
                  care physicians, rehabilitation teams, and patients with lived experience of 
                  post-COVID syndrome.
                </p>
              </section>
              
              <section>
                <h2 className="nhs-heading-l text-nhs-blue mb-4">Clinical Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Comprehensive symptom assessment covering respiratory, cardiovascular, 
                    neurological, gastrointestinal, psychological, and general symptoms</li>
                  <li>Severity rating for individual symptoms to track progression</li>
                  <li>Location-based recommendations for local services in Kent & Medway</li>
                  <li>Evidence-based management recommendations aligned with national guidelines</li>
                  <li>Printable assessment summaries for patient records</li>
                  <li>Integration with local care pathways</li>
                </ul>
              </section>
              
              <section>
                <h2 className="nhs-heading-l text-nhs-blue mb-4">Intended Users</h2>
                <p className="mb-4">
                  This tool is designed for use by healthcare professionals in Kent & Medway, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Clinicians working in Post COVID Assessment Services</li>
                  <li>General Practitioners managing patients with ongoing symptoms</li>
                  <li>Community healthcare teams</li>
                  <li>Allied health professionals involved in COVID rehabilitation</li>
                  <li>Specialist nurses and physicians</li>
                </ul>
              </section>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Clinical Governance</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This tool is provided to support clinical decision making and does not 
                  replace clinical judgment. Always use your professional expertise when 
                  interpreting recommendations.
                </p>
                <p className="text-sm text-gray-600">
                  The clinical content is reviewed regularly to ensure alignment with the 
                  latest evidence and guidelines.
                </p>
              </div>
              
              <div className="bg-gray-50 border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Key References</h3>
                <ul className="text-sm space-y-3">
                  <li>
                    <a 
                      href="https://www.nice.org.uk/guidance/ng188" 
                      className="text-nhs-blue hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      NICE Guideline NG188
                    </a>
                    <p className="text-gray-600 mt-1">
                      COVID-19 rapid guideline: managing the long-term effects
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://www.england.nhs.uk/coronavirus/post-covid-syndrome-long-covid/" 
                      className="text-nhs-blue hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      NHS England
                    </a>
                    <p className="text-gray-600 mt-1">
                      National guidance for post-COVID syndrome assessment clinics
                    </p>
                  </li>
                  <li>
                    <a 
                      href="https://www.brit-thoracic.org.uk/covid-19/" 
                      className="text-nhs-blue hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      British Thoracic Society
                    </a>
                    <p className="text-gray-600 mt-1">
                      Respiratory guidelines and resources
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-nhs-blue/10 border border-nhs-blue/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-nhs-blue">Access the Tool</h3>
                <p className="text-sm mb-4">
                  Login with your NHS credentials to access the clinical assessment platform.
                </p>
                <Button 
                  className="w-full bg-nhs-blue hover:bg-nhs-dark-blue"
                  onClick={() => navigate("/login")}
                >
                  Clinical Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="nhs-container py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-semibold text-nhs-blue">Post COVID Assessment Service</div>
              <div className="text-sm text-gray-600">Kent & Medway NHS</div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="/" 
                className="text-gray-600 hover:text-nhs-blue"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Home
              </a>
              <a 
                href="/login" 
                className="text-gray-600 hover:text-nhs-blue"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                Login
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kent & Medway NHS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
