import {
    useScroll,
    useTransform,
    motion,
    useMotionTemplate,
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
 */

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
     * Camera zoom
     */
    const scale =
        useTransform(
            scrollYProgress,
            [0, 1],
            [1, 100]
        );  

    /**
     * Earth camera targeting
     *
     * Earth:
     * xPercent = 0.32
     * yPercent = 0.45
     *
     * Needed offset:
     * 50 - 32 = +18
     * 50 - 45 = +5
     */

    const x =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['0vw', '1850vw']
        );

    const y =
        useTransform(
            scrollYProgress,
            [0, 1],
            ['0vh', '330vh']
        );
        
    const smoothScale = useSpring(scale, {
      stiffness: 80,
      damping: 20,
    });
    
    const smoothX = useSpring(x, {
      stiffness: 80,
      damping: 20,
    });
    
    const smoothY = useSpring(y, {
      stiffness: 80,
      damping: 20,
    });

    /**
     * SINGLE transform pipeline
     *
     * This is the important part.
     */
    const transform =
        useMotionTemplate`
            translate3d(${smoothX}, ${smoothY}, 0)
            scale(${smoothScale})
        `;

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
                        transform,
                        transformOrigin:
                            'center center',
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