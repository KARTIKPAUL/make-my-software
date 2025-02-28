import React from 'react';
import Card from './Card';
import cardImage1 from '../assets/cardImage1.svg';
import cardImage2 from '../assets/cardImage2.svg'; 
import bgImage1 from '../assets/serviceCard1bg.svg'; 
import bgImage2 from '../assets/serviceCard2bg.svg'; 

const Page4 = () => {
    const cardsData = [
        {
            bgImage: bgImage1,
            image: cardImage1,
            title: 'Innovative Solutions',
            description: 'We provide cutting-edge software solutions tailored to enhance business efficiency and productivity.',
        },
        {
            bgImage: bgImage2,
            image: cardImage2,
            title: 'Expert Development',
            description: 'Our team of experienced developers crafts scalable and robust applications for diverse industries.',
        },
    ];

    return (
        <section id="process" className="flex flex-col md:flex-row items-center justify-between p-8 bg-white h-auto lg:h-screen md:pl-24">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        bgImage={card.bgImage}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left">
                <h1 className="text-6xl font-extrabold">Welcome</h1>
                <h2 className="text-4xl text-[#fba419] font-bold">Empowering Businesses</h2>
                <p className="mt-4 text-black">
                    At MakeMySoftware, we drive innovation by providing seamless and efficient software solutions tailored to your business needs. Our expertise spans across various domains, ensuring growth and success.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Custom software development for all industries
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Scalable and future-proof technology solutions
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Enhanced security and seamless integration
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Dedicated support and maintenance services
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#fba419] mr-2">✔️</span> Transforming ideas into reality with expert solutions
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Page4;