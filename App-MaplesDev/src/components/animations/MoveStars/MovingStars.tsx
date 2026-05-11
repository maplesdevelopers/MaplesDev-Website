import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

function MovingStars() {
    const starsRef = useRef(null);
    
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (starsRef.current) {
            starsRef.current.rotation.x = elapsedTime * 0.01;
            starsRef.current.rotation.y = elapsedTime * 0.01;
        }
    });
    
    return <Stars ref={starsRef} radius={50} count={5000} factor={4} face />;
}

export default MovingStars;
