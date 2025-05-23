
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Basic validation
      if (!email || !password) {
        setError("Please enter both email and password");
        setIsLoading(false);
        return;
      }

      // Check NHS email format
      if (!email.toLowerCase().endsWith("@nhs.uk") && 
          !email.toLowerCase().endsWith("@nhs.net")) {
        setError("Please use an NHS email address (@nhs.uk or @nhs.net)");
        setIsLoading(false);
        return;
      }

      // Attempt login
      await login(email, password);
      
      // Login succeeded
      toast({
        title: "Login successful",
        description: "Welcome to the Post COVID Assessment Tool",
      });
      
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-nhs-blue text-2xl">
            Clinical Login
          </CardTitle>
          <CardDescription>
            Access the Post COVID Assessment Tool for Kent & Medway
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">NHS Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@nhs.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-nhs-blue hover:bg-nhs-dark-blue" 
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-sm text-center text-gray-500">
            For demonstration purposes, login using any NHS email address (@nhs.uk or @nhs.net)
          </p>
          <p className="text-xs text-center text-gray-400">
            Use admin@nhs.uk for admin access
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
