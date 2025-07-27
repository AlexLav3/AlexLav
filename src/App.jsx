import React from 'react'
import Navbar from './Navbar';
import Explore from './Explore';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Contacts from './Contacts';

<meta name="viewport" content="width=device-width, initial-scale=1" />

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
     <Navbar />
     <Home />
     <About />
     <Explore />
     <Contacts />
     <Footer />
    </div>
  );
};

export default App;