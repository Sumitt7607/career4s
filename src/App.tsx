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
import Offerings from "./pages/Offerings";
import { TestimonialsCarousel } from "./components/TestimonialsCarousel";
import { AdmissionProcess as AdmissionIn } from "./components/AdmissionProcess";
import { ExamsSection } from "./components/ExamsSection";
import ExamsSectionabroad from "./pages/ExamsSectionabroad";
import VisaProcess from "./pages/VisaProcess";
import Documents from "./pages/Documents";
import { HeroBanner } from "./components/HeroBanner";
import { CounselingSection } from "./components/CounselingSection";
import  AdmissionProcess from "./AdmissionProcessabroad";
import  DocumentsSection from "./pages/DocumentsSectionabroad";  
import CounsellingSectionAbroad from "./pages/CounsellingSectionabroad";
import ScrollToTop from "./pages/ScrollToTop";
import AdmissionDIstance from "./pages/AdmissionDIstance";
import CollegeListDist from "./pages/collegeListdist";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/offering" element={<Offerings />} />
           <Route path='/doc' element={<DocumentsSection />} />
            <Route path='/testimonials' element={<TestimonialsCarousel />} />
            <Route path='/admission' element={<AdmissionIn />} />
          <Route path="/documents" element={<Documents />} />
          <Route path='/exams' element={<ExamsSection />} />
          <Route path='/counseling' element={<CounselingSection />} />
          <Route path='/manage' element={<HeroBanner />} />
          <Route path='/admissionab' element={<AdmissionProcess />} />
          <Route path='/exams' element={<ExamsSection />} /> 
        <Route path='/exsec' element={<ExamsSectionabroad />} />
            <Route path="/:domain" element={<DomainColleges />} />
            <Route path="/visa" element={<VisaProcess />} />
           <Route path="/counsellingab" element={<CounsellingSectionAbroad />} />
           <Route path="/admission-distance" element={<AdmissionDIstance />} />

          <Route path="/distance/:domain" element={<CollegeListDist />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
