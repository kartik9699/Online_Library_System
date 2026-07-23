import React from 'react'
import Books from '../Utils/BooksData'
import BookCard from './BookCard'

function BrowseBooks() {
  return (
    <>
    <div className="p-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Category
                </h2>

                <div className="flex gap-4 flex-wrap-reverse justify-around">
                    {Books.map((item) => {
                        return (
                            <BookCard book={item} />
                        )

                    })}



                </div>
            </div>
    </>
      
    
  )
}

export default BrowseBooks
