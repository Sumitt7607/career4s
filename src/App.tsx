import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdmissionIndia from "./pages/AdmissionIndia";
import About from "./pages/About";
import Services from "./pages/Services";
import SuccessStories from "./pages/SuccessStories";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdmissionAbroad from "./pages/AdmissionAbroad";
import AbroadHome from "./pages/AbroadHome";
import Universities from "./pages/Universities";
import AdmissionOnline from "./pages/AdmissionOnline";
import DomainColleges from "./pages/DomainCollegesOnline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission-india" element={<AdmissionIndia />} />
          <Route path="/admission-abroad" element={<AdmissionAbroad />} />
          <Route path="/admission-abroad" element={<AdmissionAbroad />} />
          <Route path="/abroad-home/:domain" element={<AbroadHome />} />
          <Route path="/universities/:domain" element={<Universities />} />
    <Route path="/universities/:domain/:country" element={<Universities />} />
          <Route path="/admission-online" element={<AdmissionOnline />} />
            <Route path="/:domain" element={<DomainColleges />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
