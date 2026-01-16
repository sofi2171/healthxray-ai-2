
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import AIConsultant from './pages/AIConsultant';
import BMICalculator from './pages/BMICalculator';
import NutritionGuide from './pages/NutritionGuide';
import SymptomChecker from './pages/SymptomChecker';
import CalorieCalculator from './pages/CalorieCalculator';
import ExercisePlanner from './pages/ExercisePlanner';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Header />
            <main className="flex-grow flex flex-col w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consultant" element={<AIConsultant />} />
                <Route path="/bmi" element={<BMICalculator />} />
                <Route path="/nutrition" element={<NutritionGuide />} />
                <Route path="/symptoms" element={<SymptomChecker />} />
                <Route path="/calories" element={<CalorieCalculator />} />
                <Route path="/exercise" element={<ExercisePlanner />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
