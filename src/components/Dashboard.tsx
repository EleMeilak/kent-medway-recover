
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SymptomChecker from "./SymptomChecker";
import { useAuth } from "@/context/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="nhs-heading-l text-nhs-blue">Clinical Dashboard</h1>
        <p className="text-muted-foreground">
          Use the tools below to assess and manage post COVID patients
        </p>
      </div>

      <Tabs defaultValue="symptom-checker" className="space-y-4">
        <TabsList>
          <TabsTrigger value="symptom-checker">Symptom Assessment</TabsTrigger>
          <TabsTrigger value="resources">Clinical Resources</TabsTrigger>
          {user?.role === "admin" && (
            <TabsTrigger value="admin">Admin Dashboard</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="symptom-checker" className="space-y-4">
          <SymptomChecker />
        </TabsContent>
        
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Resources</CardTitle>
              <CardDescription>
                Evidence-based guidelines and resources for post-COVID management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                <div className="py-3">
                  <h3 className="font-medium">NICE Guidelines</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    COVID-19 rapid guideline: managing the long-term effects of COVID-19
                  </p>
                  <a 
                    href="https://www.nice.org.uk/guidance/ng188" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-nhs-blue hover:underline text-sm mt-1 inline-block"
                  >
                    View resource
                  </a>
                </div>
                
                <div className="py-3">
                  <h3 className="font-medium">NHS England</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    National guidance for post-COVID syndrome assessment clinics
                  </p>
                  <a 
                    href="https://www.england.nhs.uk/coronavirus/post-covid-syndrome-long-covid/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-nhs-blue hover:underline text-sm mt-1 inline-block"
                  >
                    View resource
                  </a>
                </div>
                
                <div className="py-3">
                  <h3 className="font-medium">British Thoracic Society</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    COVID-19: information for the respiratory community
                  </p>
                  <a 
                    href="https://www.brit-thoracic.org.uk/covid-19/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-nhs-blue hover:underline text-sm mt-1 inline-block"
                  >
                    View resource
                  </a>
                </div>
                
                <div className="py-3">
                  <h3 className="font-medium">Royal College of General Practitioners</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Management of the long-term effects of COVID-19
                  </p>
                  <a 
                    href="https://elearning.rcgp.org.uk/course/view.php?id=492" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-nhs-blue hover:underline text-sm mt-1 inline-block"
                  >
                    View resource
                  </a>
                </div>
                
                <div className="py-3">
                  <h3 className="font-medium">Your COVID Recovery</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Support for recovery after COVID-19
                  </p>
                  <a 
                    href="https://www.yourcovidrecovery.nhs.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-nhs-blue hover:underline text-sm mt-1 inline-block"
                  >
                    View resource
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {user?.role === "admin" && (
          <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>Admin Dashboard</CardTitle>
                <CardDescription>
                  System administration and audit tools (Admin access only)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gray-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Assessment Count</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">0</div>
                        <p className="text-sm text-muted-foreground">Total assessments</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Active Users</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">1</div>
                        <p className="text-sm text-muted-foreground">Clinicians using the system</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Local Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">8</div>
                        <p className="text-sm text-muted-foreground">Available in the directory</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">System Status</h3>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-green-700 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      All systems operational
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Admin Actions</h3>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                        View Audit Logs
                      </button>
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                        Manage Users
                      </button>
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                        Update Services Directory
                      </button>
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm">
                        System Settings
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default Dashboard;
