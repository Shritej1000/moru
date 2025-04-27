
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PhotoGrid from '../components/PhotoGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">
              Timeless Moments,
              <br />
              Editorial Vision
            </h1>
          </div>

          {/* Photo Grid */}
          <div className="mb-24">
            <PhotoGrid />
          </div>

          {/* About Section */}
          <div className="max-w-2xl mx-auto text-center px-4 animate-fade-in">
            <h2 className="font-playfair text-2xl mb-8">About MORU</h2>
            <div className="space-y-6 text-neutral-850 leading-relaxed">
              <p>
                At MORU, we believe that true beauty lies in simplicity.
              </p>
              <p>
                We capture love stories with an editorial eye — timeless, emotive, and effortlessly elegant.
              </p>
              <p>
                Every frame is crafted with intention, preserving moments that feel as real as they are unforgettable.
              </p>
              <p className="font-playfair mt-8">
                Minimal. Meaningful. MORU
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
