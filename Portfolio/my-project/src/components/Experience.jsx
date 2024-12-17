import React from 'react';

function Experience() {
    const cardItems = [
        {
            id: 1,
            logo: "../../public/public/html.png", // Correct path to public folder
            name: "Html"
        },
        {
            id: 2,
            logo: "../../public/public/css.jpg", // Correct path to public folder
            name: "Css"
        },
        {
            id: 3,
            logo: "../../public/public/javascript.png", // Correct path to public folder
            name: "JavaScript"
        },
        {
            id: 4,
            logo: "../../public/public/oracle.png", // Correct path to public folder
            name: "Oracle"
        },
        {
            id: 5,
            logo: "../../public/public/spring.png", // Correct path to public folder
            name: "Spring"
        },
        {
            id: 6,
            logo: "../../public/public/java.png", // Correct path to public folder
            name: "Java"
        },
        {
            id: 7,
            logo: "../../public/public/springBoot.jpg", // Correct path to public folder
            name: "SpringBoot"
        }
    ];

    return (
       <>
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0">
            <div className="text-2xl md:text-4xl mt-4 md:mt-10 font-bold">Experience</div>
            <p className="text-md md:text-xl text-justify mt-4">I have more than 2 years of experience with these technologies below.</p>
            <br />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-8">
                {
                    cardItems.map(({ id, logo, name }) => (
                        <div key={id} className="border md:rounded-lg  rounded-full p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-200">
                            <img src={logo} className="w-[120px] h-[120px] rounded-full object-contain mx-auto" alt={name} />
                            <div className="text-center mt-4">
                                <div className="text-lg font-semibold">{name}</div>
                                
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

export default Experience;
