import { useState } from 'react';
import { Ticket as Cricket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { PlayerCard } from '../components/PlayerCard';
import { Gallery } from '../components/Gallery';
import { players, galleryItems, supporters, sponsors } from '../data';

export function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const captain = players.find(p => p.specialRole === 'Captain');
  const viceCaptain = players.find(p => p.specialRole === 'Vice Captain');

  const handleAboutClick = () => {
    setShowAbout(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'});
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Cricket size={32} className="mr-2" />
              <span className="text-2xl font-bold">ESC</span>
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="#" onClick={handleAboutClick} className="hover:text-gray-300 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gray-300 transition-colors">Gallery</Link>
              </li>
              <li>
              <Link to="#" onClick={handleContactClick} className="hover:text-gray-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Cricket size={48} className="mr-4" />
            <h1 className="text-4xl font-bold">ELITE SOCIAL CLUB</h1>
          </div>
          <p className="text-center text-xl max-w-2xl mx-auto">
            Home of cricket excellence since 1995. Building champions, creating memories.
          </p>
          <div className="mt-8 text-center">
            <Link 
              to="/playing-xi" 
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              View Playing XI
              <Users className="ml-2" size={20} />
            </Link>
             </div>
          <div className="mt-8 text-center">
          
              <Link 
                to="/matches" 
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Matches!
                <Users className="ml-2" size={20} />
              </Link>
            </div>
        </div>
      </header>

      {/* Slider Section */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-blue-600 animate-slide">Welcome to Elite Social Club</h2>
        </div>
          </div>
        </div>
      </section>

      {/* Update Section */}
      <div className="container mx-auto px-4 py-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-6">
          <Cricket size={48} className="mr-4" />
          <h2 className="text-3xl font-bold">Latest Updates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Update 1</h3>
              <p className="text-lg font-semibold">Elite Social Club wins the championship</p>
              <p className="text-gray-600">Elite Social Club emerged victorious in the local championship held at the Rajpur Cricket Ground. The team put up a stellar performance throughout the tournament and clinched the title in a thrilling final match. The players displayed exceptional skill and teamwork to secure the win. Congratulations to the entire team on this remarkable achievement!</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Update 2</h3>
            <p className="text-lg font-semibold">Elite Social Club to host cricket camp</p>
            <p className="text-gray-600">Elite Social Club is proud to announce that it will be hosting a cricket camp for young cricketers in the region. The camp will provide an opportunity for budding cricketers to learn from experienced coaches and improve their skills. The camp will focus on all aspects of the game, including batting, bowling, fielding, and fitness. We are excited to welcome young cricketers to our club and help them realize their potential.</p>
            </div>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Users size={32} className="mr-3 text-blue-600" />
            <h2 className="text-3xl font-bold">Team Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {captain && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Captain</h3>
                <p className="text-lg font-semibold">{captain.name}</p>
                <p className="text-gray-600">{captain.role}</p>
                <p className="mt-2">{captain.bio}</p>
              </div>
            )}
            {viceCaptain && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Vice Captain</h3>
                <p className="text-lg font-semibold">{viceCaptain.name}</p>
                <p className="text-gray-600">{viceCaptain.role}</p>
                <p className="mt-2">{viceCaptain.bio}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Club Gallery</h2>
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* Supporter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4"> 
          <h2 className="text-3xl font-bold text-center mb-12">Club Supporters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supporters && ( supporters.map((supporter: { name: string; role: string; bio: string }) => (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Supporter</h3>
                <p className="text-lg font-semibold">{supporter.name}</p>
                <p className="text-gray-600">{supporter.role}</p>
                <p className="mt-2">{supporter.bio}</p>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Club Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors && ( sponsors.map((supporter: { name: string; role: string; bio: string }) => (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Sponsor</h3>
                <p className="text-lg font-semibold">{supporter.name}</p>
                <p className="text-gray-600">{supporter.role}</p>
                <p className="mt-2">{supporter.bio}</p>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* About Section */}
      {showAbout && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg"> 
                <h3 className="text-xl font-bold text-blue-800 mb-2">About Us</h3>
                <p className="text-lg font-semibold">Elite Social Club</p>
                <p className="text-gray-600">Elite Social Club is a cricket club based in the heart of the city. We have been in existence since 1995 and have been a breeding ground for cricketing talent in the region. We have produced several international cricketers who have gone on to represent the country at the highest level. Our club has state-of-the-art facilities and a team of experienced coaches who are dedicated to nurturing the next generation of cricketers. We believe in the power of sport to transform lives and are committed to providing a safe and inclusive environment for all our members.</p>
                <p className="text-gray-600">Elite</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Contact Us</h3>
              <p className="text-lg font-semibold">Elite Social Club</p>
              <p className="text-gray-600">123 Main Street, Rajpur, Banke, Nepal</p>
              <p className="text-gray-600">Email:
                <a href="mailto:info@elitesocialclub.com" className="text-blue-800">info@elitesocialclub.com</a>
              </p>
              <p className="text-gray-600">Phone:
                <span className="text-blue-800">9864726814</span>
              </p>
              <p className="text-gray-600">Facebook:
                <a href="mailto:info@elitesocialclub.com" className="text-blue-800">info@elitesocialclub.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">ELITE SOCIAL CLUB</p>
          <p className="text-gray-400">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
    </div>
  );
}