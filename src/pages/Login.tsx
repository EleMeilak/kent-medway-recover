
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/context/AuthContext";

const Login: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Redirect if already authenticated
  if (isAuthenticated && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-nhs-blue text-3xl font-bold">
            Post COVID Assessment Tool
          </h2>
          <p className="mt-2 text-gray-600">
            Kent & Medway NHS
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
        <div className="mt-6 text-center">
          <a 
            href="/"
            className="text-nhs-blue hover:underline text-sm"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
