import React from 'react'
import CategoryCard from './CategoryCard'
import BookCard from './BookCard'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Home() {
    
    const books = useSelector((state) => state.books.booksList);
    const Category = useSelector((state) => state.category.categoryList);
    console.log(books)
    
    const topFiveBooks = [...books]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <>
            <div className="flex items-center justify-between p-6 rounded-lg">
                <h1 className="text-2xl font-bold text-blue-600">
                    Hello, Welcome To Library
                </h1>
                <Link to="/addbook">
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Add Book +
                    </button>
                </Link>
            </div>

            
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Category
                </h2>
                
                <div className="flex gap-4 flex-wrap justify-around">
                    {Category.map((item) => {
                        return (
                            
                            <Link to={`/booksbrowser/${item.id}`}><CategoryCard key={item.id} category={item} /></Link>
                        )
                    })}
                </div>
            </div>

            
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Most Read Books
                </h2>
                
                <div className="flex gap-4 flex-wrap justify-around">
                    {topFiveBooks.map((item) => {
                        return (
                          <Link key={item.id} to={`/bookdetails/${item.id}`}> <BookCard key={item.id} book={item} /> </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home