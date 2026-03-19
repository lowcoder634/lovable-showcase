import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AIBuilds from "./pages/AIBuilds";
import AboutMe from "./pages/AboutMe";
import ProductManagement from "./pages/ProductManagement";
import CreativeWriting from "./pages/CreativeWriting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/ai-builds" replace />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/product-management" element={<ProductManagement />} />
            <Route path="/ai-builds" element={<AIBuilds />} />
            <Route path="/creative-writing" element={<CreativeWriting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
