import React from 'react'
import Category from '../Utils/Category'
import CategoryCard from './CategoryCard'
import BookCard from './BookCard'
import Books from '../Utils/BooksData'
function Home() {

    console.log(Category)
    const topFiveBooks = [...Books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
    return (
        <>
            <div className="flex items-center justify-between  p-6 rounded-lg ">
                <h1 className="text-2xl font-bold text-blue-600">
                    Hello, Welcome To Library
                </h1>
                <button
                    type="button"
                    className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                    Add Book +
                </button>
            </div>
            <div className="p-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Category
                </h2>

                <div className="flex gap-4 flex-wrap-reverse justify-around">
                    {
                        Category.map((item, id) => {
                            return (
                                <CategoryCard key={id} category={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="p-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Most Read Book
                </h2>

                <div className="flex gap-4 flex-wrap-reverse justify-around">
                    {topFiveBooks.map((item) => {
                        return (
                            <BookCard book={item} />
                        )

                    })}



                </div>
            </div>
        </>
    )
}

export default Home
