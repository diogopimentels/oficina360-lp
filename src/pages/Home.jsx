import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSystem from '../components/AboutSystem';
import SystemsList from '../components/SystemsList';
import Benefits from '../components/Benefits';
import SystemScreenshots from '../components/SystemScreenshots';
import Trust from '../components/Trust';
import FAQ from '../components/FAQ';
import BuySection from '../components/BuySection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-bg-base text-text-main font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <AboutSystem />
            <SystemsList />
            <Benefits />
            <SystemScreenshots />
            <Trust />
            <FAQ />
            <BuySection />
            <Footer />
        </div>
    );
};

export default Home;
