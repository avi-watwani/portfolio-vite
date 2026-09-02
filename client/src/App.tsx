import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CdrViewer from "@/pages/CdrViewer";
import CdrViewerSupport from "@/pages/CdrViewerSupport";
import CdrViewerPrivacy from "@/pages/CdrViewerPrivacy";
import Downloads from "@/pages/Downloads";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cdr-viewer/support" component={CdrViewerSupport} />
      <Route path="/cdr-viewer/privacy" component={CdrViewerPrivacy} />
      <Route path="/cdr-viewer/downloads" component={Downloads} />
      <Route path="/cdr-viewer" component={CdrViewer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <ScrollToTop />
        <Header />
        <Router />
        <Footer />
        <Toaster />
        <Analytics />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
