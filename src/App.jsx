import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import CareerPage from "./pages/CareerPage";
import CompanyPage from "./pages/CompanyPage";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
