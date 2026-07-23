import React from 'react';

function BookCard({book}) {
  return (
    // THE CARD CONTAINER: Fixed width, rounded corners, shadow, and a hover lift effect
    <div className="w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
      
      {/* THE IMAGE CONTAINER: Fixed height to keep all cards uniform */}
      <div className="h-80 w-full bg-gray-100">
        <img 
          src={book.coverImage} 
          alt="Rich Dad Poor Dad cover" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* THE TEXT CONTENT: Padding and typography */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate" title="Rich Dad Poor Dad">
          {book.title}
        </h3>
        
        {/* Added a subtitle for the author to make the card look complete */}
        <p className="text-sm text-gray-500 mt-1 font-medium">
          {book.author}
        </p>
      </div>
      
    </div>
  );
}

export default BookCard;