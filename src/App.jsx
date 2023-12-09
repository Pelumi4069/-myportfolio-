import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Socials from './Components/Socials';
import About from './Components/About';
import Projects from './Components/Port';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    <Socials />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}


// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home />;
//       case 'socials':
//         return <Socials />;
//       case 'about':
//         return <About />;
//       case 'portfolio':
//         return <Port />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Navbar onPageChange={handlePageChange} />
//       {renderPage()}
//       <Footer />
//     </>
//   );
// }

export default App
