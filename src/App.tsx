import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Subscription from './pages/Subscription';
import ExplorePage from './pages/explorePage';
import CreateBlog from './pages/CreateBlog';
import Discover from './pages/Discover';
import ComparePlans from './pages/ComparePlans';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/explorePage" element={<ExplorePage />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/compare" element={<ComparePlans />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;