import React from 'react';

// Assuming that you're using image URLs, make sure the 'logo' links are valid URLs.
function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: "../../public/public/mongodb.jpg", // Example: replace with the actual image URL
            name: "MongoDB"
        },
        {
            id: 2,
            logo: "../../public/public/express.png", // Example: replace with the actual image URL
            name: "Express"
        },
        {
            id: 3,
            logo: "../../public/public/reactjs.png", // Example: replace with the actual image URL
            name: "ReactJS"
        },
        {
            id: 4,
            logo: "../../public/public/node.png", // Example: replace with the actual image URL
            name: "NodeJS"
        },
        {
            id: 5,
            logo: "../../public/public/python.webp", // Example: replace with the actual image URL
            name: "Python"
        },
        {
            id: 6,
            logo: "../../public/public/java.png", // Example: replace with the actual image URL
            name: "Java"
        }
    ];

    return (
        <>
            <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0">
            <div className="text-2xl md:text-4xl mt-4 md:mt-10 font-bold">Portfolio</div>
            <div className="text-lg font-bold mt-2 md:mt-2 md:text-xl underline">Featured Projects</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {
                    cardItems.map(({ id, logo, name }) => (
                        <div key={id} className="border p-4 rounded-lg shadow-md hover:shadow-2xl   hover:scale-105 duration-200">
                            <img src={logo} className="w-[120px] h-[120px] rounded-full object-contain mx-auto" alt={name} />
                            <div className="text-center mt-4">
                                <div className="text-lg font-semibold">{name}</div>
                                <p className="text-md md:text-lg text-justify text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iusto?</p>
                            </div>
                            <div className="flex justify-center gap-4 mt-4">
                                <button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">Video</button>
                                <button className="bg-gray-500 text-white py-1 px-4 rounded-lg hover:bg-gray-600">Source Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
        <hr className='mt-4 md:mt-8'></hr>
             
        </>
        
    );
}

export default Portfolio;
