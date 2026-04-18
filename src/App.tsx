/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Foundation from './pages/Foundation';
import HelpingTribe from './pages/HelpingTribe';
import Career from './pages/Career';
import Journal from './pages/Journal';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import FatherFactor from './pages/articles/FatherFactor';
import SelfDisclosure from './pages/articles/SelfDisclosure';
import Trauma from './pages/articles/Trauma';
import DepressionAgency from './pages/articles/DepressionAgency';
import HopeDespair from './pages/articles/HopeDespair';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/helping-tribe" element={<HelpingTribe />} />
          <Route path="/career" element={<Career />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/journal/father-factor" element={<FatherFactor />} />
          <Route path="/journal/self-disclosure" element={<SelfDisclosure />} />
          <Route path="/journal/trauma" element={<Trauma />} />
          <Route path="/journal/depression-agency" element={<DepressionAgency />} />
          <Route path="/journal/hope-despair" element={<HopeDespair />} />
        </Routes>
      </Layout>
    </Router>
  );
}
