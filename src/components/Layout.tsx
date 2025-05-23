
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-nhs-blue text-white">
        <div className="nhs-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">
                Post COVID Assessment Service
              </div>
              <div className="text-sm hidden sm:block">Kent & Medway</div>
            </div>
            {isAuthenticated && (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:block text-sm">
                  Welcome, {user?.name} ({user?.role})
                </div>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-nhs-dark-blue" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="flex-1 bg-gray-50">
        <div className="nhs-container py-6">
          {children}
        </div>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="nhs-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>&copy; {new Date().getFullYear()} Kent & Medway NHS</div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
