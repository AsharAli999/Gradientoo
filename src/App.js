import React from 'react';
import './App.css';
import CustomColorTool from './CustomColorTool';
import Navbar from './Navbar';
import LandingHeader from './LandingHeader';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="dotted-background min-h-screen">
      <Navbar />
      <LandingHeader />
      <header className="App-header p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-8">
          <span className="text-white">
            Custom Color Gradient Config Generator
          </span>
        </h1>
        <CustomColorTool />
      </header>
      <Analytics />
    </div>
  );
}

export default App;
