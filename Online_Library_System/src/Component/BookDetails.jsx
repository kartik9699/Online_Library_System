import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { store } from '../Utils/store';

function BookDetails() {
  const {id} =useParams()
  const books = useSelector((state) => state.books.booksList);
  const book = books.find((item) => item.id === id);
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 my-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src={book.coverImage}
            alt={book.title} 
            className="w-full max-w-75 h-auto object-cover rounded-xl shadow-md" 
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              {book.title}
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              {book.author}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full">
              {book.category}
            </span>
            <span className="flex items-center text-yellow-600 font-bold text-md gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {book.rating}
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Synopsis</h2>
            <p className="text-gray-700 leading-relaxed">
              {book.description}
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full md:w-auto">
              Read Book
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors w-full md:w-auto">
              Add to Favorites
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetails;