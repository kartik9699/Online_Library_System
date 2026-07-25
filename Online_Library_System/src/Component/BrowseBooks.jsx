import React, { useState } from 'react'
import BookCard from './BookCard'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BrowseBooks() {
    
    const [searchTerm, setSearchTerm] = useState("");

    const books = useSelector((state) => state.books.booksList);
    const Category = useSelector((state) => state.category.categoryList);
    const { ctgid } = useParams();

    const category = Category.find((item) => item.id == ctgid);


    const filteredBooks = books.filter((item) => {

        const matchesCategory = ctgid === "null" || item.categoryId == ctgid;


        const searchLower = searchTerm.toLowerCase();


        const matchesSearch =
            item.title?.toLowerCase().includes(searchLower) ||
            item.author?.toLowerCase().includes(searchLower) ||
            item.category?.toLowerCase().includes(searchLower);


        return matchesCategory && matchesSearch;
    });

    return (
        <div className="p-10">

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    {ctgid === "null" ? "All Books" : category?.name}
                </h2>


                <input
                    type="text"
                    placeholder="Search by title, author, or genre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                />
            </div>

            <div className="flex gap-4 flex-wrap justify-around">

                {filteredBooks.length > 0 ? (
                    filteredBooks.map((item) => (
                        <Link key={item.id} to={`/bookdetails/${item.id}`}>
                            <BookCard book={item} />
                        </Link>
                    ))
                ) : (

                    <div className="text-gray-500 mt-10 text-lg">
                        No books found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
}

export default BrowseBooks;