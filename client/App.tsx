import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import WebDevBeginnerIntermediate from "./pages/WebDevBeginnerIntermediate";
import WebDevBeginnerAdvanced from "./pages/WebDevBeginnerAdvanced";
import AdobeAEBeginnerIntermediate from "./pages/AdobeAEBeginnerIntermediate";
import AdobeAEBeginnerAdvanced from "./pages/AdobeAEBeginnerAdvanced";
import CapCutBeginnerIntermediate from "./pages/CapCutBeginnerIntermediate";
import CapCutBeginnerAdvanced from "./pages/CapCutBeginnerAdvanced";
import Support from "./pages/Support";
import Company from "./pages/Company";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes - no authentication required */}
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/company" element={<Company />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route
            path="/programs/web-development/beginner-to-intermediate"
            element={<WebDevBeginnerIntermediate />}
          />
          <Route
            path="/programs/web-development/beginner-to-advanced"
            element={<WebDevBeginnerAdvanced />}
          />
          <Route
            path="/programs/adobe-after-effects/beginner-to-intermediate"
            element={<AdobeAEBeginnerIntermediate />}
          />
          <Route
            path="/programs/adobe-after-effects/beginner-to-advanced"
            element={<AdobeAEBeginnerAdvanced />}
          />
          <Route
            path="/programs/capcut-video-editing/beginner-to-intermediate"
            element={<CapCutBeginnerIntermediate />}
          />
          <Route
            path="/programs/capcut-video-editing/beginner-to-advanced"
            element={<CapCutBeginnerAdvanced />}
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
