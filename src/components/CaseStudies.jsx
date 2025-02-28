import React from 'react';
import CaseStudy from './Case';
import Image1 from '../assets/case1.svg';
import Image2 from '../assets/case2.svg';
import Image3 from '../assets/case3.svg';

const CaseStudies = () => {
    const caseStudiesData = [
        {
            image: Image1,
            title: 'Optimizing E-commerce Performance',
            description: 'We helped an online retailer boost their sales by 40% through advanced analytics, optimized UI/UX, and AI-powered recommendations.',
        },
        {
            image: Image2,
            title: 'Revolutionizing Healthcare Tech',
            description: 'Our custom-built telemedicine platform enabled doctors to provide seamless virtual consultations, improving patient engagement and accessibility.',
        },
        {
            image: Image3,
            title: 'Scaling SaaS for Global Reach',
            description: 'We worked with a SaaS company to scale their cloud infrastructure, ensuring high availability and security while reducing operational costs.',
        },
    ];

    return (
        <section id="work" className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                    Case <span className="text-[#fba419]">Studies</span>
                </h2>
                <p className="text-black mb-8 max-w-3xl mx-auto">
                    Explore how we have helped businesses across various industries achieve success through innovative software solutions and strategic technology implementation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                    {caseStudiesData.map((caseStudy, index) => (
                        <CaseStudy
                            key={index}
                            image={caseStudy.image}
                            title={caseStudy.title}
                            description={caseStudy.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
