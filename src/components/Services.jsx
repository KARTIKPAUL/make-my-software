import React from 'react';
import CreativeWork from './CreativeWork';
import backgroundImage from '../assets/background.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

const Services = () => {
    const creativeWorks = [
        {
            icon: icon1,
            title: 'Brand Strategy',
            description: 'We help businesses craft a powerful brand identity that resonates with their target audience and creates a lasting impact.',
        },
        {
            icon: icon2,
            title: 'Digital Marketing',
            description: 'Our team executes data-driven marketing strategies to enhance brand visibility, engagement, and lead generation.',
        },
        {
            icon: icon3,
            title: 'Web Development',
            description: 'We build dynamic and responsive websites tailored to business needs, ensuring a seamless user experience across devices.',
        },
        {
            icon: icon4,
            title: 'Creative Design',
            description: 'From eye-catching graphics to professional UI/UX designs, we bring your vision to life with stunning creativity and precision.',
        },
    ];

    return (
        <section 
            id="services" 
            className="flex flex-col md:flex-row items-center justify-center h-auto bg-cover bg-center text-white" 
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
            <div className="md:p-40 md:w-7/12 p-5">
                <div className="text-center md:text-left mb-8">
                    <h1 className="text-5xl font-bold my-3">Our Company</h1>
                    <h2 className="text-3xl text-[#fba419] font-semibold mb-4">Exceptional Services</h2>
                    <p className="mb-4">
                        We specialize in providing cutting-edge business solutions tailored to your needs. 
                        Our team of experts delivers innovative strategies, digital transformations, and creative 
                        designs that help brands grow and thrive in a competitive market.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-11">
                {creativeWorks.map((work, index) => (
                    <CreativeWork
                        key={index}
                        icon={work.icon}
                        title={work.title}
                        description={work.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
