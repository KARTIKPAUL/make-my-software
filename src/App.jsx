import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Services from './components/Services.jsx';
import Page4 from './components/Page4.jsx';
import Team from './components/Team.jsx';
import Served from './components/Served.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Welcome from './components/Welcome.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/Abot.jsx';
import OurCustomer from './components/OurCustomer.jsx';
import TermsConditions from './components/Terms.jsx';
import PrivacyPolicy from './components/Privacy.jsx';
import CookiesPolicy from './components/Cookies.jsx';
import HelpPage from './components/Help.jsx';
import FaqPage from './components/Faqs.jsx';
import OurProcess from './components/OurProcess.jsx';
import PartnerWithUs from './components/PartnerWithUs.jsx';
import CSRPage from './components/CSR.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Served />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/served" element={<Served />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<OurCustomer />} />
        <Route path="/work" element={<OurCustomer />} />
        <Route path="/terms-conditions" element={<TermsConditions />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/faqs" element={<FaqPage />} /> 
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/helps" element={<HelpPage />} /> 
        <Route path="/our-process" element={<OurProcess />} />  
        <Route path="/partner-with-us" element={<PartnerWithUs />} />  
        <Route path="/makemysoftware-csr" element={<CSRPage />} />  
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
