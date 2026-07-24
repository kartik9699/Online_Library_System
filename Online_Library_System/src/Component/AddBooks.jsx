import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Utils/Bookslice';
import { useNavigate } from 'react-router-dom';

function AddBooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    coverImage: '',
    publishedYear: '',
    rating: '',
    isAvailable: true,
    description: ''
  });


  const categoryMap = {
    "Sci-Fi": "c1",
    "Fantasy": "c2",
    "Programming": "c3",
    "Mystery": "c4",
    "History": "c5"
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,

      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    const newBookData = {
      id: `b${Date.now()}`,
      title: formData.title,
      author: formData.author,
      category: formData.category,
      categoryId: categoryMap[formData.category] || "c0",
      coverImage: formData.coverImage,
      publishedYear: Number(formData.publishedYear),
      rating: Number(formData.rating),
      isAvailable: formData.isAvailable,
      description: formData.description
    };

    console.log('New Book Data:', newBookData);


    dispatch(addBook(newBookData));



    navigate('/booksbrowser/null');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add a New Book</h1>
          <p className="text-gray-600">Fill in the details below to expand your library catalog.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-semibold text-gray-700">Book Title</label>
              <input
                type="text" id="title" name="title"
                value={formData.title} onChange={handleChange} required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Project Hail Mary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="author" className="text-sm font-semibold text-gray-700">Author</label>
              <input
                type="text" id="author" name="author"
                value={formData.author} onChange={handleChange} required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Andy Weir"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-semibold text-gray-700">Category</label>
              <select
                id="category" name="category"
                value={formData.category} onChange={handleChange} required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a Category</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Programming">Programming</option>
                <option value="Mystery">Mystery</option>
                <option value="History">History</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="publishedYear" className="text-sm font-semibold text-gray-700">Published Year</label>
              <input
                type="number" id="publishedYear" name="publishedYear"
                value={formData.publishedYear} onChange={handleChange} required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 2021"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="rating" className="text-sm font-semibold text-gray-700">Rating (0 - 5)</label>
              <input
                type="number" id="rating" name="rating"
                min="0" max="5" step="0.1"
                value={formData.rating} onChange={handleChange} required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 4.7"
              />
            </div>

            <div className="flex items-end pb-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="isAvailable"
                  checked={formData.isAvailable}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-semibold text-gray-700">Currently Available for Borrowing</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="coverImage" className="text-sm font-semibold text-gray-700">Cover Image URL</label>
            <input
              type="url" id="coverImage" name="coverImage"
              value={formData.coverImage} onChange={handleChange} required
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://images.unsplash.com/photo-..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">Synopsis</label>
            <textarea
              id="description" name="description" rows="4"
              value={formData.description} onChange={handleChange} required
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write a brief description of the book..."
            ></textarea>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Save Book
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddBooks;