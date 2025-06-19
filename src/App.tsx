import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="jarly5krq" data-path="src/App.tsx">
    <TooltipProvider data-id="tuz69k76i" data-path="src/App.tsx">
      <Toaster data-id="h9t7clsyd" data-path="src/App.tsx" />
      <BrowserRouter data-id="yueg9i3mh" data-path="src/App.tsx">
        <Routes data-id="hhh9illsk" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="23a5hrqv1" data-path="src/App.tsx" />} data-id="6v05ll25f" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="9s4sqbjux" data-path="src/App.tsx" />} data-id="97cpuj1nn" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;