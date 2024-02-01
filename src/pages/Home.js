import React from 'react';
import Blogs from '../components/Clients';
import Read from '../components/Nature';
import Footer from '../components/Footer';
import Hero from '../components/Home';
import Pictures from '../components/Place';
import Services from '../components/Services';


function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Pictures />
            <Blogs />
            <Read />
            <Footer />
        </>

    );
}

export default Home;

