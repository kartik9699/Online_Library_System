import React from 'react'
import BookCard from './BookCard'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function BrowseBooks() {
    const books = useSelector((state) => state.books.booksList);
    const Category = useSelector((state) => state.category.categoryList);
    
    
    const { ctgid } = useParams();
    
    
    const isShowingAll = !ctgid;
    
    
    const categoryName = isShowingAll 
        ? "All Books" 
        
        : Category.find((item) => item.id == ctgid)?.name;

    
    const displayBooks = isShowingAll 
        ? books 
        : books.filter((book) => book.categoryId == ctgid);

    
    if (!isShowingAll && !categoryName) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold text-gray-600">Category not found</h2>
            </div>
        );
    }

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {categoryName}
            </h2>

            <div className="flex gap-4 flex-wrap justify-around">
                
                {displayBooks.length > 0 ? (
                    displayBooks.map((item) => {
                        return (
                             <Link key={item.id} to={`/bookdetails/${item.id}`}> <BookCard key={item.id} book={item} /> </Link>
                        )
                    })
                ) : (
                    <p className="text-gray-500 text-lg w-full text-center">
                        No books currently available.
                    </p>
                )}
            </div>
        </div>
    )
}

export default BrowseBooks