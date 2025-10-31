import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatorLogin from "./pages/CreatorLogin";
import CreatorApply from "./pages/CreatorApply";
import FanDashboard from "./pages/FanDashboard";
import CreatorDashboard from "./pages/CreatorDashboard";
import Creators from "./pages/Creators";
import HowItWorks from "./pages/HowItWorks";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creator-login" element={<CreatorLogin />} />
          <Route path="/creator-apply" element={<CreatorApply />} />
          <Route path="/fan-dashboard" element={<FanDashboard />} />
          <Route path="/creator-dashboard" element={<CreatorDashboard />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
