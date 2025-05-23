
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { symptomGroups, getRecommendations } from "@/utils/symptomUtils";
import { findLocalServices } from "@/utils/serviceUtils";
import { isValidUKPostcode, isInKentMedway, formatPostcode } from "@/utils/locationUtils";
import { PatientAssessment, RecommendationResource, ServiceLocation } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const SymptomChecker: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [severityMap, setSeverityMap] = useState<Record<string, string>>({});
  const [postcode, setPostcode] = useState("");
  const [notes, setNotes] = useState("");
  const [postcodeError, setPostcodeError] = useState("");
  const [activeTab, setActiveTab] = useState("symptoms");
  const [isGeneratingResults, setIsGeneratingResults] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationResource[]>([]);
  const [localServices, setLocalServices] = useState<ServiceLocation[]>([]);
  const [assessment, setAssessment] = useState<PatientAssessment | null>(null);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptomId)) {
        return prev.filter(id => id !== symptomId);
      } else {
        return [...prev, symptomId];
      }
    });
  };
  
  const handleSeverityChange = (symptomId: string, severity: string) => {
    setSeverityMap(prev => ({
      ...prev,
      [symptomId]: severity
    }));
  };
  
  const validatePostcode = () => {
    if (!postcode) {
      setPostcodeError("Postcode is required");
      return false;
    }
    
    if (!isValidUKPostcode(postcode)) {
      setPostcodeError("Please enter a valid UK postcode");
      return false;
    }
    
    if (!isInKentMedway(postcode)) {
      setPostcodeError("This tool is for Kent & Medway region only");
      return false;
    }
    
    setPostcodeError("");
    return true;
  };
  
  const handleGenerateResults = async () => {
    if (!validatePostcode()) {
      return;
    }
    
    if (selectedSymptoms.length === 0) {
      toast({
        title: "No symptoms selected",
        description: "Please select at least one symptom to continue",
        variant: "destructive",
      });
      return;
    }
    
    setIsGeneratingResults(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get recommendations based on symptoms
      const symptomsRecommendations = getRecommendations(selectedSymptoms);
      setRecommendations(symptomsRecommendations);
      
      // Find local services based on postcode and symptoms
      const services = findLocalServices(postcode, selectedSymptoms);
      setLocalServices(services);
      
      // Create assessment object
      const newAssessment: PatientAssessment = {
        id: `assessment-${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        clinicianId: "current-user", // In a real app, this would come from auth context
        symptoms: selectedSymptoms.map(id => {
          // Find the symptom in our symptom groups
          let symptom;
          for (const group of symptomGroups) {
            const found = group.symptoms.find(s => s.id === id);
            if (found) {
              symptom = found;
              break;
            }
          }
          
          return {
            ...symptom!,
            severity: severityMap[id] as any || "moderate"
          };
        }),
        postcode: formatPostcode(postcode),
        notes,
        recommendations: symptomsRecommendations,
        localServices: services
      };
      
      setAssessment(newAssessment);
      
      // Move to results tab
      setActiveTab("results");
      
      toast({
        title: "Assessment generated",
        description: "Recommendations and local services have been generated based on the symptoms and location"
      });
    } catch (error) {
      console.error("Error generating results:", error);
      toast({
        title: "Error",
        description: "Failed to generate assessment results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingResults(false);
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleExport = () => {
    // In a real app, this would generate a proper export
    // For this demo, we'll just download JSON
    const dataStr = JSON.stringify(assessment, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `post-covid-assessment-${Date.now()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Assessment exported",
      description: "The assessment has been exported as a JSON file"
    });
  };
  
  const handleNewAssessment = () => {
    // Reset all form state
    setSelectedSymptoms([]);
    setSeverityMap({});
    setPostcode("");
    setNotes("");
    setPostcodeError("");
    setRecommendations([]);
    setLocalServices([]);
    setAssessment(null);
    setActiveTab("symptoms");
    
    toast({
      title: "New assessment started",
      description: "All fields have been reset"
    });
  };
  
  return (
    <Card className="shadow-md">
      <CardHeader className="bg-gray-50 border-b">
        <CardTitle className="text-nhs-blue">Post COVID Patient Assessment</CardTitle>
        <CardDescription>
          Complete the assessment form to receive tailored recommendations for your patient
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full rounded-none border-b grid grid-cols-2">
            <TabsTrigger value="symptoms" disabled={isGeneratingResults}>
              Symptom Assessment
            </TabsTrigger>
            <TabsTrigger value="results" disabled={!assessment}>
              Results & Recommendations
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="symptoms" className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Patient Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      placeholder="e.g. ME7 5NY"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                    />
                    {postcodeError && (
                      <p className="text-red-500 text-sm">{postcodeError}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      Enter the patient's postcode to find local services
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">COVID Symptoms</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Select all symptoms that the patient is experiencing
                </p>
                
                <Accordion type="multiple" className="w-full">
                  {symptomGroups.map((group) => (
                    <AccordionItem key={group.id} value={group.id}>
                      <AccordionTrigger className="hover:bg-muted/50 px-4 text-nhs-blue">
                        {group.name}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pt-2 pb-4">
                        <div className="space-y-4">
                          {group.symptoms.map((symptom) => (
                            <div key={symptom.id} className="flex flex-col space-y-2 border-b pb-3">
                              <div className="flex items-start space-x-2">
                                <Checkbox 
                                  id={symptom.id} 
                                  checked={selectedSymptoms.includes(symptom.id)}
                                  onCheckedChange={() => handleSymptomToggle(symptom.id)}
                                />
                                <div className="space-y-1">
                                  <Label 
                                    htmlFor={symptom.id}
                                    className="cursor-pointer font-medium text-base"
                                  >
                                    {symptom.name}
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    {symptom.description}
                                  </p>
                                </div>
                              </div>
                              
                              {selectedSymptoms.includes(symptom.id) && (
                                <div className="pl-6 space-y-2">
                                  <Label className="text-sm">Severity</Label>
                                  <div className="flex space-x-4">
                                    {["mild", "moderate", "severe"].map((severity) => (
                                      <div key={severity} className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          id={`${symptom.id}-${severity}`}
                                          name={`severity-${symptom.id}`}
                                          value={severity}
                                          checked={severityMap[symptom.id] === severity}
                                          onChange={() => handleSeverityChange(symptom.id, severity)}
                                          className="text-nhs-blue focus:ring-nhs-blue"
                                        />
                                        <Label htmlFor={`${symptom.id}-${severity}`} className="capitalize text-sm">
                                          {severity}
                                        </Label>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Clinical Notes</h3>
                <Textarea
                  placeholder="Add any additional notes about the patient's condition..."
                  className="min-h-[120px]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={handleGenerateResults}
                disabled={isGeneratingResults}
                className="w-full bg-nhs-blue hover:bg-nhs-dark-blue"
              >
                {isGeneratingResults ? "Generating..." : "Generate Assessment"}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="p-6">
            {assessment ? (
              <div className="space-y-8 print:space-y-6">
                <div className="border rounded-lg p-4 bg-gray-50 print:bg-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">Assessment Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        Created on {assessment.createdAt.toLocaleString()}
                      </p>
                    </div>
                    <div className="hidden print:block text-right">
                      <div className="font-bold">Post COVID Assessment Service</div>
                      <div className="text-sm">Kent & Medway NHS</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium">Patient Location:</p>
                      <p>{assessment.postcode}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">Selected Symptoms:</p>
                      <ul className="list-disc list-inside">
                        {assessment.symptoms.map((symptom) => (
                          <li key={symptom.id}>
                            {symptom.name} ({symptom.severity})
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {assessment.notes && (
                      <div>
                        <p className="text-sm font-medium">Clinical Notes:</p>
                        <p className="whitespace-pre-line">{assessment.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-nhs-blue">
                      Clinical Recommendations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recommendations.map((rec) => (
                        <div key={rec.id} className="border rounded-lg p-4">
                          <h4 className="font-medium">{rec.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {rec.description}
                          </p>
                          {rec.url && (
                            <a 
                              href={rec.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-nhs-blue hover:underline mt-2 inline-block"
                            >
                              View Resource
                            </a>
                          )}
                          <div className="mt-2 flex flex-wrap gap-2">
                            {rec.tags?.map((tag) => (
                              <span 
                                key={tag} 
                                className="bg-nhs-pale-grey text-gray-600 px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-nhs-blue">
                      Local Services - Kent & Medway
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {localServices.map((service) => (
                        <div key={service.id} className="border rounded-lg p-4">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{service.name}</h4>
                            <span className="bg-nhs-blue text-white px-2 py-1 rounded text-xs">
                              {service.serviceType}
                            </span>
                          </div>
                          
                          <p className="text-sm mt-2">
                            {service.address}, {service.postcode}
                          </p>
                          
                          {service.description && (
                            <p className="text-sm text-muted-foreground mt-2">
                              {service.description}
                            </p>
                          )}
                          
                          <div className="mt-4 flex flex-wrap gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Phone</p>
                              <p className="text-sm">{service.phone}</p>
                            </div>
                            
                            {service.email && (
                              <div>
                                <p className="text-xs text-muted-foreground">Email</p>
                                <p className="text-sm">{service.email}</p>
                              </div>
                            )}
                            
                            {service.website && (
                              <div>
                                <p className="text-xs text-muted-foreground">Website</p>
                                <a 
                                  href={service.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-sm text-nhs-blue hover:underline"
                                >
                                  Visit Website
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-between print:hidden">
                  <Button onClick={handleNewAssessment} variant="outline">
                    New Assessment
                  </Button>
                  <div className="flex gap-2">
                    <Button onClick={handlePrint} variant="outline">
                      Print Report
                    </Button>
                    <Button onClick={handleExport}>
                      Export Assessment
                    </Button>
                  </div>
                </div>
                
                <div className="print:mt-8 print:text-center print:text-sm print:text-gray-500 hidden print:block">
                  <p>This assessment was generated by the Post COVID Assessment Tool for Kent & Medway NHS.</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No assessment generated yet</h3>
                <p className="text-muted-foreground">
                  Complete the symptom assessment to see recommendations
                </p>
                <Button
                  onClick={() => setActiveTab("symptoms")}
                  variant="outline"
                  className="mt-4"
                >
                  Go to Assessment
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t print:hidden">
        <p className="text-sm text-gray-500">
          This tool is designed to support clinical decision making and should not replace clinical judgment.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SymptomChecker;
