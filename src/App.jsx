import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, BarChart2, Settings } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Mentions from "./pages/Mentions.jsx";
import SentimentAnalysis from "./pages/SentimentAnalysis.jsx";
import SettingsPage from "./pages/Settings.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Mentions",
    to: "/mentions",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Sentiment Analysis",
    to: "/sentiment-analysis",
    icon: <BarChart2 className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="mentions" element={<Mentions />} />
              <Route path="sentiment-analysis" element={<SentimentAnalysis />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;