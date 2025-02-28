import React from 'react';
import TeamMember from './TeamMember';
import Image1 from '../assets/image1.svg';
import Image2 from '../assets/image2.svg';
import Image3 from '../assets/image3.svg';
import Image4 from '../assets/image4.svg';
import backgroundImage from '../assets/team-bg.svg';
import Testimonials from './Testimonials';

const Team = () => {
    const teamMembers = [
        {
            image: Image1,
            name: 'Bubai Barman',
            role: 'Frontend Developer',
        },
        {
            image: Image2,
            name: 'Sujit Paul',
            role: 'Backend Developer',
        },
        {
            image: Image3,
            name: 'Bittu Roy',
            role: 'UI/UX Designer',
        },
        {
            image: Image4,
            name: 'Ranit Halder',
            role: 'Project Manager',
        },
    ];

    return (

        <>
        <div id="team"
            className="bg-cover bg-center text-white py-12"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
            }}
        >
            <div className="text-center mb-12">
                <h1 className="text-6xl font-extrabold py-5">
                    <span className="text-white">Meet Our</span> <span className="text-[#fba419]">Expert Team</span>
                </h1>
                <p className="mt-4 text-white text-center px-5 md:px-20">
                    At MakeMySoftware, we believe in the power of teamwork and innovation. Our dedicated team of experts collaborates to develop cutting-edge solutions that help businesses thrive. From designing seamless user experiences to building robust backend systems, our professionals are here to transform your ideas into reality.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-10">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                    />
                ))}
            </div>
        </div>

        <Testimonials />

        </>
    );
};

export default Team;