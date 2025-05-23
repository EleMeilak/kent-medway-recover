
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const DashboardPage: React.FC = () => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const { toast } = useToast();
  
  useEffect(() => {
    // Show welcome toast when dashboard loads
    if (isAuthenticated && user) {
      toast({
        title: `Welcome, ${user.name}`,
        description: "Access the assessment tools to support your patients",
      });
    }
  }, [isAuthenticated, user, toast]);
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse font-medium text-nhs-blue mb-2">
            Loading...
          </div>
          <p className="text-gray-500">Please wait</p>
        </div>
      </div>
    );
  }
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
