import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Specs from './pages/Specs';
import Gallery from './pages/Gallery';
import Intelligence from './pages/Intelligence';
import Purchase from './pages/Purchase';

// Layout Wrapper component to handle scrolling to top on route change
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-[#1d1d1f] py-8 text-xs text-gray-500 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
            <p className="mb-2">版权所有 © 2024 Arendelle Robotics Inc. 保留所有权利。</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a href="#" className="hover:underline">隐私政策</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:underline">使用条款</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:underline">销售政策</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:underline">法律信息</a>
            </div>
            <p className="mt-4 opacity-50">Elsa and Frozen are trademarks of Disney. This is a fan-made concept site.</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/specs" element={<Specs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/os" element={<Intelligence />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
