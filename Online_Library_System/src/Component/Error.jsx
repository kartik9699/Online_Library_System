import React from 'react';

function Error() {
  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
      
      <div className="text-center">
        
        <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600 tracking-tight">
          404
        </h1>
        
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-6">
          Page Not Found
        </h2>
        

        <p className="text-gray-600 mt-4 md:text-lg max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
        </p>
        
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <button 
            onClick={() => window.history.back()} 
            className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Go Back
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Take Me Home
          </button>

        </div>
      </div>

    </div>
  );
}

export default Error;