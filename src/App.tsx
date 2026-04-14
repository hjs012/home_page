import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessShowcase from './components/ProcessShowcase';
import PortfolioGrid from './components/PortfolioGrid';
import MultiStepForm from './components/MultiStepForm';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DashboardMockup from './components/DashboardMockup';
import { FormData } from './types';

type ViewState = 'landing' | 'apply' | 'dashboard';

export default function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleApplyStart = () => {
    setView('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormComplete = (data: FormData) => {
    setSubmittedData(data);
    // Save to localStorage as requested
    localStorage.setItem('auraBuild_application', JSON.stringify(data));
    setView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-navy text-white selection:bg-electric-blue/30">
      <Navbar />
      
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            
            {/* CTA Section for Landing */}
            <div className="max-w-7xl mx-auto px-6 py-12 flex justify-center">
              <motion.button
                onClick={handleApplyStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 rounded-3xl bg-gradient-to-r from-electric-blue to-neon-purple font-black text-lg shadow-2xl shadow-electric-blue/40 animate-pulse-slow"
              >
                지금 바로 AI로 홈페이지 만들기
              </motion.button>
            </div>

            <ProcessShowcase />
            <PortfolioGrid />
            <Pricing />
            <FAQ />
            <Footer />
          </motion.div>
        )}

        {view === 'apply' && (
          <motion.div
            key="apply"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-32 pb-24 px-6 min-h-screen flex flex-col items-center"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">홈페이지 제작 신청</h1>
              <p className="text-white/40 break-keep">AI가 당신의 비즈니스를 분석하기 위해 몇 가지 질문을 드릴게요.</p>
            </div>
            <MultiStepForm onComplete={handleFormComplete} />
            
            <button 
              onClick={() => setView('landing')}
              className="mt-12 text-white/40 hover:text-white transition-colors text-sm font-medium"
            >
              ← 메인으로 돌아가기
            </button>
          </motion.div>
        )}

        {view === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="pt-32 pb-24 min-h-screen"
          >
            <DashboardMockup />
            
            <div className="max-w-4xl mx-auto px-6 mt-8">
              <div className="glass p-6 rounded-3xl border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Current Project</p>
                  <p className="font-bold text-lg">{submittedData?.businessName || 'My Project'}</p>
                </div>
                <button 
                  onClick={() => setView('landing')}
                  className="px-6 py-2 rounded-xl glass border-white/10 text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  메인으로
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
