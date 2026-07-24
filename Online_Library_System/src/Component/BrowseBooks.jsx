import React from 'react'
import Books from '../Utils/BooksData'
import BookCard from './BookCard'
import { useParams,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BrowseBooks() {
    const books = useSelector((state) => state.books.booksList);
    const Category = useSelector((state) => state.category.categoryList);
    const {ctgid} =useParams();
    const category=Category.find((item)=>item.id==ctgid)
    const filterBooks=books.filter((item)=>{
        return item.categoryId==ctgid
    })
    return ctgid=="null"?(
        <>
    <div className="p-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    All Books
                </h2>

                <div className="flex gap-4 flex-wrap justify-around">
                    {books.map((item) => {
                        return (
                            <Link key={item.id} to={`/bookdetails/${item.id}`}> <BookCard key={item.id} book={item} /> </Link>
                        )

                    })}



                </div>
            </div>
    </>
    ):
   (
    <>
    <div className="p-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {category.name}
                </h2>

                <div className="flex gap-4 flex-wrap justify-around">
                    {filterBooks.map((item) => {
                        return (
                            <Link key={item.id} to={`/bookdetails/${item.id}`}> <BookCard key={item.id} book={item} /> </Link>
                        )

                    })}



                </div>
            </div>
    </>
      
    
  )
}

export default BrowseBooks
