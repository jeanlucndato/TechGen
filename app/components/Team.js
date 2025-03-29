"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import team1 from '../../public/assets/img/team1.jpg';
import team2 from '../../public/assets/img/team2.jpg';
import team3 from '../../public/assets/img/team3.jpg';
import team4 from '../../public/assets/img/team4.jpg';

const teamMembers = [
    {
        image: team1, // Correction ici
        name: 'Jules Bokande',
        position: 'C.E.O',
        description: 'Visionnaire de la tech avec 15 ans d\'expérience dans l\'innovation digitale',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        image: team2, // Correction ici
        name: 'Marie Dupont',
        position: 'Directrice Technique',
        description: 'Expert en architecture cloud et solutions scalables',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        image: team3, // Correction ici
        name: 'Thomas Martin',
        position: 'Lead Designer',
        description: 'Passionné par les interfaces utilisateur intuitives et modernes',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        image: team4, // Correction ici
        name: 'Sophie Lambert',
        position: 'Responsable Marketing',
        description: 'Stratège en croissance digitale et branding innovant',
        social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            linkedin: '#'
        }
    }
];

const SocialLink = ({ href, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.a>
);

const TeamMemberCard = ({ member }) => {
    const socialIcons = [
        { icon: <FaFacebook />, link: member.social.facebook },
        { icon: <FaTwitter />, link: member.social.twitter },
        { icon: <FaInstagram />, link: member.social.instagram },
        { icon: <FaLinkedin />, link: member.social.linkedin }
    ];

    return (
        <motion.div
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative w-32 h-32 mb-6">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-md"
                    sizes="(max-width: 640px) 100vw, 20vw"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-sm text-blue-600 mb-3">{member.position}</p>
            <p className="text-gray-600 text-center text-sm mb-4 min-h-[60px]">
                {member.description}
            </p>
            <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                    <SocialLink key={index} href={social.link}>
                        {social.icon}
                    </SocialLink>
                ))}
            </div>
        </motion.div>
    );
};

export default function Team() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Rencontrez Notre Équipe
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Des passionnés de technologie dédiés à votre succès
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}