import React from 'react'

function Gallery() {
  return (
    <div>
            {/* <section className="bg-cover bg-center h-[400px] text-center text-white pt-[100px]" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
                <div className="container mx-auto">
                    <h1 className="text-5xl mb-2">Gallery</h1>
                    <p className="text-xl">Explore our school through pictures</p>
                </div>
            </section> */}

            <section className="bg-white py-10 mt-10">
                <div className="container mx-auto">
                    <h1 className="text-4xl text-gray-800 mb-5">Our Gallery</h1>
                    <p className="text-gray-700 mb-8">
                        Take a look at some of the moments we've captured at our school. Our gallery showcases various events, activities, and milestones that make our school unique.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <img className="w-full h-80 rounded-lg shadow-md transform transition-transform hover:scale-105" src="student1.jpg" alt="Gallery Image 1" />
                        <img className="w-full h-80 rounded-lg shadow-md transform transition-transform hover:scale-105" src="student2.jpg" alt="Gallery Image 2" />
                        <img className="w-full h-80 rounded-lg shadow-md transform transition-transform hover:scale-105" src="student3.jpg" alt="Gallery Image 3" />
                        <img className="w-full h-80 rounded-lg shadow-md transform transition-transform hover:scale-105" src="student4.jpg" alt="Gallery Image 4" />
                        <img className="w-full h-80 rounded-lg shadow-md transform transition-transform hover:scale-105" src="school1.jpg" alt="Gallery Image 5" />
                        <img className="w-full h-80 rounded-lg shadow-md transform transition-transform hover:scale-105" src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg" alt="Gallery Image 6" />
                    </div>
                </div>
            </section>
        </div>
    
  )
}

export default Gallery