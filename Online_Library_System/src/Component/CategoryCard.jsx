import React from 'react'

function CategoryCard({ category }) {
    return (
        <>
            <div className="w-60 h-32 bg-purple-50 border-2 border-purple-200 rounded-2xl flex justify-center items-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-purple-100 transition-all cursor-pointer"> 
                        <p className="text-2xl font-bold text-purple-700 tracking-wide">
                            {category.name}
                        </p>
            </div>
        </>
    )
}

export default CategoryCard
