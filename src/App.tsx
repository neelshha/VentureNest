import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MessagesPage from './pages/MessagesPage';
import EventsPage from './pages/EventsPage';
import PricingStartupsPage from './pages/PricingStartupsPage';
import PricingInvestorsPage from './pages/PricingInvestorsPage';
import LoginPage from './pages/LoginPage';
import PricingForm1 from './pages/PricingForm1';
import PricingForm2 from './pages/PricingForm2';
import PricingForm3 from './pages/PricingForm3';
import PricingForm4 from './pages/PricingForm4';
import PricingForm5 from './pages/PricingForm5';
import PricingFormSuccess from './pages/PricingFormSuccess';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-workSans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage setCurrentPage={setCurrentPage} />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/pricing-startups" element={<PricingStartupsPage />} />
          <Route path="/pricing-investors" element={<PricingInvestorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/PricingForm1" element={<PricingForm1 />} />
          <Route path="/pricing-form-2" element={<PricingForm2 />} />
          <Route path="/pricing-form-3" element={<PricingForm3 />} />
          <Route path="/pricing-form-4" element={<PricingForm4 />} />
          <Route path="/pricing-form-5" element={<PricingForm5 />} />
          <Route path="/pricing-form-success" element={<PricingFormSuccess />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;