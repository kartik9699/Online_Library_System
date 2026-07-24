import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-white shadow-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
      
      
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
        <img 
          src="data:image/jpeg;base64,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" 
          alt="Library Logo" 
          className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full border border-gray-200"
        />
        
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
          Library
          
          <span className="hidden sm:inline"> System</span>
        </h1>
      </div> 

      <nav className="hidden md:flex">
        <ul className="flex items-center gap-8">
          <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer transition-colors">
           <Link to="/">Home</Link> 
          </li>
          <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer transition-colors">
            <Link to="/booksbrowser/null">Browse Books</Link>
          </li>
          <li className="text-gray-600 font-medium hover:text-blue-600 cursor-pointer transition-colors">
           <Link to="/addbook">Add Book</Link>
          </li>
        </ul>
      </nav>

      
      <button 
        className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        
        {isMenuOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-6 md:hidden z-40">
          <span 
            className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer transition-colors w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </span>
          <span 
            className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer transition-colors w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Books
          </span>
          <span 
            className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer transition-colors w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Book
          </span>
        </nav>
      )}

    </header>
  );
}

export default Header;