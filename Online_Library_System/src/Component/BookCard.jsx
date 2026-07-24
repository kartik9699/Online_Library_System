import React from 'react';

function BookCard({book}) {
  return (
    
    <div className="w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
      
      
      <div className="h-50 w-full bg-gray-100">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate" title="Rich Dad Poor Dad">
          {book.title}
        </h3>
        

        <p className="text-sm text-gray-500 mt-1 font-medium">
          {book.author}
        </p>
      </div>
      
    </div>
  );
}

export default BookCard;