"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const gyms = [
    {
        name: 'Anandapur Fitness Zone',
        image: '/images/Gyms Medinipore/Best Gym in Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/anandapur-fitness-zone-anandapur-midnapore-gyms-2d4c78e7g3-250.jpg',
        location: 'Anandapur, Midnapore'
    },
    {
        name: 'Barbell Complex',
        image: '/images/Gyms Medinipore/Best Gym in Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/barbell-complex-aurobindo-nagar-midnapore-fitness-centres-49538qw01j-250.jpg',
        location: 'Kharagpur'
    },
    {
        name: 'Galaxy Fitness Gym',
        image: '/images/Gyms Medinipore/Best Gym in Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/galaxy-fitness-ac-gym-rina-mandal-road-midnapore-gyms-p1chpojfqr-250.jpg',
        location: 'Madpur'
    },
    {
        name: 'Iron Throne Multi Gym',
        image: '/images/Gyms Madpur/Best Gym in Madpur, Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/anandapur-fitness-zone-anandapur-midnapore-gyms-q5bunqhu1e-250.jpg',
        location: 'Kharagpur'
    },
    {
        name: 'Squat Fitness Studio',
        image: '/images/Gyms Medinipore/Best Gym in Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/squat-the-fitness-studio-dharma-midnapore-health-clubs-0y4css786h-250.jpg',
        location: 'Dharma'
    },
    {
        name: 'Pita Mata Ashirwad',
        image: '/images/Gyms Madpur/Best Gym in Madpur, Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/default-gymnasiums-5-250.jpg',
        location: 'Madpur'
    },
    {
        name: 'Bhutgeria Fitness',
        image: '/images/Gyms Madpur/Best Gym in Madpur, Midnapore - Top Fitness Centers & Clubs near me _ Justdial_files/shutterstock-510476362-gyms-11-kbt3s-250.jpg',
        location: 'Jayantinarayanchak'
    }
];

// Duplicate for seamless loop
const duplicatedGyms = [...gyms, ...gyms];

export function GymsCarousel() {
    return (
        <section className="py-24 bg-black/60 border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-mesh opacity-50" />
            <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight uppercase">
                            POWERING <span className="text-primary">LOCAL BOXES</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            From Kharagpur to Madpur, Fitexo is the backbone of the most successful fitness hubs.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-1 w-20 bg-primary/20 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: [-80, 80] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="h-full w-1/2 bg-primary"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="relative group">
                <motion.div
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 w-max"
                >
                    {duplicatedGyms.map((gym, index) => (
                        <div
                            key={index}
                            className="flex-none w-[300px] md:w-[400px]"
                        >
                            <div className="group/card relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary/20 border border-white/5 hover:border-primary/50 transition-all duration-500">
                                <Image
                                    src={gym.image}
                                    alt={`${gym.name} - Gym Partner`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover/card:translate-y-0 transition-transform">
                                    <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                                        Partner Gym
                                    </div>
                                    <h3 className="text-2xl font-normal text-white mb-1 uppercase tracking-tight">
                                        {gym.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                        {gym.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
