import React from 'react'
import Category from '../Utils/Category'
import CategoryCard from './CategoryCard'
import BookCard from './BookCard'
// Removed unused Books import since we use Redux now
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Home() {
    // 1. Fetch books from Redux store
    const books = useSelector((state) => state.books.booksList);
    console.log(books)
    
    // 2. Sort and slice the top 5
    const topFiveBooks = [...books]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <>
            {/* Header Section */}
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

            {/* Category Section */}
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Category
                </h2>
                {/* Changed to standard flex-wrap for better mobile stacking */}
                <div className="flex gap-4 flex-wrap justify-around">
                    {Category.map((item, index) => {
                        return (
                            // Ideally use item.id if your Category data has one, otherwise index is okay for static lists
                            <CategoryCard key={index} category={item} />
                        )
                    })}
                </div>
            </div>

            {/* Most Read Books Section */}
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Most Read Books
                </h2>
                <div className="flex gap-4 flex-wrap justify-around">
                    {topFiveBooks.map((item) => {
                        return (
                            // Added the missing key prop here!
                            <BookCard key={item.id} book={item} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home