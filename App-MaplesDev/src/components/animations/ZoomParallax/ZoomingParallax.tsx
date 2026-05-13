import {
    useScroll,
    useTransform,
    motion,
    useSpring,
} from 'framer-motion';

import {
    useRef,
    type ReactNode,
} from 'react';

type ZoomingParallaxProps = {
    children: ReactNode;
    className?: string;
};

/*
 * Generated with AI
 **/

export default function ZoomingParallax({
    children,
    className = '',
}: ZoomingParallaxProps) {

    const container =
        useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } =
        useScroll({
            target: container,
            offset: ['start start', 'end end'],
        });

    /**
     * Zoom strength
     */
    const scale = useSpring(
        useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [1, 4, 10]
        ),
        {
            stiffness: 80,
            damping: 20,
        }
    );

    /**
     * Move world toward Earth
     *
     * Earth:
     * xPercent: 0.32
     * yPercent: 0.45
     */

    const x =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['0%', '18%']
        );

    const y =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['0%', '5%']
        );

    return (
        <div
            ref={container}
            className={`
                relative
                h-[300vh]
                ${className}
            `}
        >
            <div
                className="
                    sticky
                    top-0
                    h-screen
                    overflow-hidden
                "
            >
                <motion.div
                    style={{
                        scale,
                        x,
                        y,
                    }}
                    className="
                        relative
                        w-full
                        h-full
                    "
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}