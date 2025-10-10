import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './Components/ScrollToTop';
import CookieBanner from './Components/CookieBanner';
import LandingPage from './LandingPage';
import LocaleHtmlAttrs from './lib/LocaleHtmlAttrs';

// all your other pages/components…
import TermsPage from './Pages/terms';
import ServicesPage from './Pages/services';
import PrivacyPage from './Pages/privacy';
import ContactPage from './Pages/contact';
import CareerOpportunities from './Pages/careeropportunities';
import NewsPage from './Pages/news';
import StudioPage from './Pages/studio';
import ArchitecturePage from './Pages/Services/architecture';
import InteriorDesignPage from './Pages/Services/interiordesign';
import LandscapeDesignPage from './Pages/Services/landscapedesign';
import FurnitureAccessoriesPage from './Pages/Services/furnitureaccessories';
import ProjectSupervisionPage from './Pages/Services/projectsupervision';
import DesignConsultationsPage from './Pages/Services/designconsultations';
import Article1 from './Pages/article-verified-leed-associates';
import Article2 from './Pages/article-minimal-elegance-riyadh';
import Article3 from './Pages/article-intergrating-pool-in-landscape';
import Article4 from './Pages/article-downtown-design-riyadh-2025';
import Article5 from './Pages/article-al-balad-renaissance-in-jeddah';
import Article6 from './Pages/article-red-sea-global-leed-achievements';
import Article7 from './Pages/article-new-murabba-tranformation';
import ProjectsPage from './Pages/projects';
import Project1 from './Pages/Projects/001-villa';
import Project2 from './Pages/Projects/aljoud-compound';
import Project3 from './Pages/Projects/alnarjis-villa';
import Project4 from './Pages/Projects/alnayfah-community';
import Project5 from './Pages/Projects/alolaya-apartment';
import Project6 from './Pages/Projects/alyasmin-residence';
import Project7 from './Pages/Projects/aura-apartment';
import Project8 from './Pages/Projects/ceo-office';
import Project9 from './Pages/Projects/sakinah-villa';
import Project10 from './Pages/Projects/glow-spa';
import Project11 from './Pages/Projects/indigo-villa';
import Project12 from './Pages/Projects/luxury-residence';
import Project13 from './Pages/Projects/minimalist-villa';
import Project14 from './Pages/Projects/sedra-roshan';
import Project15 from './Pages/Projects/space-cafe';
import Project16 from './Pages/Projects/thana-hitten';
import Project17 from './Pages/Projects/the-blue-mansion';

function App() {
  return (
    <Router>
      <LocaleHtmlAttrs />
      <ScrollToTop />
      <CookieBanner />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Landing page (English + Arabic) */}
          <Route path="/"  element={<LandingPage />} />
<Route path="/sa" element={<LandingPage />} />


          {/* Other routes */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/sa/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sa/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sa/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareerOpportunities />} />
          <Route path="/sa/careers" element={<CareerOpportunities />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/sa/news" element={<NewsPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/sa/studio" element={<StudioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/sa/services" element={<ServicesPage />} />
          <Route path="/services/architecture" element={<ArchitecturePage />} />
          <Route path="/sa/services/architecture" element={<ArchitecturePage />} />

          <Route path="/services/interiordesign" element={<InteriorDesignPage />} />
          <Route path="/sa/services/interiordesign" element={<InteriorDesignPage />} />

          <Route path="/services/landscapedesign" element={<LandscapeDesignPage />} />
          <Route path="/sa/services/landscapedesign" element={<LandscapeDesignPage />} />

          <Route path="/services/furnitureaccessories" element={<FurnitureAccessoriesPage />} />
          <Route path="/sa/services/furnitureaccessories" element={<FurnitureAccessoriesPage />} />
          <Route path="/services/projectsupervision" element={<ProjectSupervisionPage />} />
          <Route path="/sa/services/projectsupervision" element={<ProjectSupervisionPage />} />

          <Route path="/services/designconsultations" element={<DesignConsultationsPage />} />
          <Route path="/sa/services/designconsultations" element={<DesignConsultationsPage />} />

          <Route path="/news/article-verified-leed-associates" element={<Article1 />} />
          <Route path="/sa/news/article-verified-leed-associates" element={<Article1 />} />
          <Route path="/news/article-minimal-elegance-riyadh" element={<Article2 />} />
          <Route path="/sa/news/article-minimal-elegance-riyadh" element={<Article2 />} />
          <Route path="/news/article-intergrating-pool-in-landscape" element={<Article3 />} />
          <Route path="/sa/news/article-intergrating-pool-in-landscape" element={<Article3 />} />
          <Route path="/news/article-downtown-design-riyadh-2025" element={<Article4 />} />
          <Route path="/sa/news/article-downtown-design-riyadh-2025" element={<Article4 />} />
          <Route path="/news/article-al-balad-renaissance-in-jeddah" element={<Article5 />} />
          <Route path="/sa/news/article-al-balad-renaissance-in-jeddah" element={<Article5 />} />
          <Route path="/news/article-red-sea-global-leed-achievements" element={<Article6 />} />
          <Route path="/sa/news/article-red-sea-global-leed-achievements" element={<Article6 />} />
          <Route path="/news/article-new-murabba-tranformation" element={<Article7 />} />
          <Route path="/sa/news/article-new-murabba-tranformation" element={<Article7 />} />

          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/sa/projects" element={<ProjectsPage />} />
          <Route path="/projects/001-villa" element={<Project1 />} />
          <Route path="/sa/projects/001-villa" element={<Project1 />} />
          <Route path="/projects/aljoud-compound" element={<Project2 />} />
          <Route path="/sa/projects/aljoud-compound" element={<Project2 />} />
          <Route path="/projects/alnarjis-villa" element={<Project3 />} />
          <Route path="/sa/projects/alnarjis-villa" element={<Project3 />} />
          <Route path="/projects/alnayfah-community" element={<Project4 />} />
          <Route path="/sa/projects/alnayfah-community" element={<Project4 />} />
          <Route path="/projects/alolaya-apartment" element={<Project5 />} />
          <Route path="/sa/projects/alolaya-apartment" element={<Project5 />} />
          <Route path="/projects/alyasmin-residence" element={<Project6 />} />
          <Route path="/sa/projects/alyasmin-residence" element={<Project6 />} />
          <Route path="/projects/aura-apartment" element={<Project7 />} />
          <Route path="/sa/projects/aura-apartment" element={<Project7 />} />
          <Route path="/projects/ceo-office" element={<Project8 />} />
          <Route path="/sa/projects/ceo-office" element={<Project8 />} />
          <Route path="/projects/sakinah-villa" element={<Project9 />} />
          <Route path="/sa/projects/sakinah-villa" element={<Project9 />} />
          <Route path="/projects/glow-spa" element={<Project10 />} />
          <Route path="/sa/projects/glow-spa" element={<Project10 />} />
          <Route path="/projects/indigo-villa" element={<Project11 />} />
          <Route path="/sa/projects/indigo-villa" element={<Project11 />} />
          <Route path="/projects/luxury-residence" element={<Project12 />} />
          <Route path="/sa/projects/luxury-residence" element={<Project12 />} />
          <Route path="/projects/minimalist-villa" element={<Project13 />} />
          <Route path="/sa/projects/minimalist-villa" element={<Project13 />} />
          <Route path="/projects/sedra-roshan" element={<Project14 />} />
          <Route path="/sa/projects/sedra-roshan" element={<Project14 />} />
          <Route path="/projects/space-cafe" element={<Project15 />} />
          <Route path="/sa/projects/space-cafe" element={<Project15 />} />
          <Route path="/projects/thana-hitten" element={<Project16 />} />
          <Route path="/sa/projects/thana-hitten" element={<Project16 />} />
          <Route path="/projects/the-blue-mansion" element={<Project17 />} />
          <Route path="/sa/projects/the-blue-mansion" element={<Project17 />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
