import React, { useState } from 'react';

function AddBooks() {
  // State to manage the form inputs
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    rating: '',
    imageUrl: '',
    description: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Book Data:', formData);
    // TODO: Send data to your backend or update your Books.json context here
    alert('Book added successfully!');
    
    // Reset form after submission
    setFormData({
      title: '', author: '', genre: '', rating: '', imageUrl: '', description: ''
    });
  };

  return (
    // Outer wrapper for page background and padding
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Form Container */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add a New Book</h1>
          <p className="text-gray-600">Fill in the details below to expand your library catalog.</p>
        </div>

        {/* Form Elements */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Responsive Grid: 1 col on mobile, 2 cols on md screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-semibold text-gray-700">Book Title</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="e.g. 1984"
              />
            </div>

            {/* Author Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="author" className="text-sm font-semibold text-gray-700">Author</label>
              <input 
                type="text" 
                id="author" 
                name="author" 
                value={formData.author} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="e.g. George Orwell"
              />
            </div>

            {/* Genre Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="genre" className="text-sm font-semibold text-gray-700">Genre</label>
              <select 
                id="genre" 
                name="genre" 
                value={formData.genre} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">Select a Genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Biography">Biography</option>
              </select>
            </div>

            {/* Rating Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="rating" className="text-sm font-semibold text-gray-700">Rating (0 - 5)</label>
              <input 
                type="number" 
                id="rating" 
                name="rating" 
                min="0" max="5" step="0.1" 
                value={formData.rating} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="e.g. 4.5"
              />
            </div>
          </div>

          {/* Cover Image URL (Full Width) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="imageUrl" className="text-sm font-semibold text-gray-700">Cover Image URL</label>
            <input 
              type="url" 
              id="imageUrl" 
              name="imageUrl" 
              value={formData.imageUrl} 
              onChange={handleChange} 
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="https://example.com/cover.jpg"
            />
          </div>

          {/* Description Textarea (Full Width) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700">Synopsis</label>
            <textarea 
              id="description" 
              name="description" 
              rows="4" 
              value={formData.description} 
              onChange={handleChange} 
              required
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
              placeholder="Write a brief description of the book..."
            ></textarea>
          </div>

          {/* Submit Button */}
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