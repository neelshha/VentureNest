import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MessagesPage from './pages/MessagesPage';
import EventsPage from './pages/EventsPage';
import PricingStartupsPage from './pages/PricingStartupsPage';
import PricingInvestorsPage from './pages/PricingInvestorsPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-workSans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'events' && <EventsPage />}
        {currentPage === 'messages' && <MessagesPage />}
        {currentPage === 'pricing-startups' && <PricingStartupsPage />}
        {currentPage === 'pricing-investors' && <PricingInvestorsPage />}
        {currentPage === 'login' && <LoginPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;