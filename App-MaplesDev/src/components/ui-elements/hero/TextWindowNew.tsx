import {
    useRef,
    useState,
    useEffect,
    type CSSProperties,
} from 'react';

import SunIcon from '../../../assets/Icons/sun.svg';
import CloudIcon from '../../../assets/Icons/cloud.svg';

type Cloud = {
    id: number;

    top: number;

    size: number;

    side: 'left' | 'right' | 'center';

    offset: number;
};

export const TextWindowNew = () => {

    // =========================================
    // Scroll indicator animation vars
    // =========================================

    const lowestOpacity = 0.6;

    const blinkSpeed = '2s';

    // =========================================
    // Scene state
    // =========================================

    const [clouds, setClouds] =
        useState<Cloud[]>([]);

    // =========================================
    // Animation refs
    // =========================================

    const progressRef = useRef(0);

    const currentProgressRef = useRef(0);

    const animationRef = useRef(0);

    // =========================================
    // Generate responsive clouds
    // =========================================

    useEffect(() => {

        const generateClouds = () => {

            const width =
                100dvh;

            const numberOfClouds =
                Math.max(
                    6,
                    Math.ceil(width / 260)
                );

            const generated: Cloud[] = [];

            for (
                let i = 0;
                i < numberOfClouds;
                i++
            ) {

                let side:
                    | 'left'
                    | 'right'
                    | 'center';

                // Spread clouds across scene
                if (i % 3 === 0) {

                    side = 'left';

                } else if (i % 3 === 1) {

                    side = 'right';

                } else {

                    side = 'center';
                }

                generated.push({

                    id: i,

                    top:
                        8 +
                        (
                            i /
                            numberOfClouds
                        ) * 65,

                    size:
                        220 +
                        Math.random() * 180,

                    side,

                    // Responsive movement distance
                    offset:
                        window.innerWidth *
                        (
                            0.4 +
                            Math.random() * 0.3
                        ),
                });
            }

            setClouds(generated);
        };

        generateClouds();

        window.addEventListener(
            'resize',
            generateClouds
        );

        return () => {

            window.removeEventListener(
                'resize',
                generateClouds
            );
        };

    }, []);

    // =========================================
    // Scroll tracking
    // =========================================

    useEffect(() => {

        const handleScroll = () => {

            // Scroll amount needed
            // to fully reveal navbar

            const maxScroll =
                window.innerHeight;

            const scrollY =
                window.scrollY;

            progressRef.current =
                Math.min(
                    1,
                    scrollY / maxScroll
                );
        };

        window.addEventListener(
            'scroll',
            handleScroll
        );

        return () => {

            window.removeEventListener(
                'scroll',
                handleScroll
            );
        };

    }, []);

    // =========================================
    // Main animation loop
    // =========================================

    useEffect(() => {

        const animate = () => {

            // =====================================
            // Smooth interpolation
            // =====================================

            currentProgressRef.current +=
                (
                    progressRef.current
                    -
                    currentProgressRef.current
                ) * 0.08;

            // =====================================
            // Cinematic easing
            // =====================================

            const raw =
                currentProgressRef.current;

            const p =
                1 - Math.pow(
                    1 - raw,
                    3
                );

            // =====================================
            // Animate clouds
            // =====================================

            clouds.forEach((cloud) => {

                const element =
                    document.getElementById(
                        `cloud-${cloud.id}`
                    );

                if (!element) return;

                let translateX = 0;

                if (
                    cloud.side === 'left'
                ) {

                    translateX =
                        -cloud.offset * p;

                } else if (
                    cloud.side === 'right'
                ) {

                    translateX =
                        cloud.offset * p;

                } else {

                    // Split center clouds
                    translateX =
                        (
                            cloud.id % 2 === 0
                        )
                            ? -cloud.offset * p
                            : cloud.offset * p;
                }

                // Slight vertical drift
                const translateY =
                    -40 * p;

                element.style.transform = `
                    translate3d(
                        ${translateX}px,
                        ${translateY}px,
                        0px
                    )
                `;
            });

            // =====================================
            // Animate sun
            // =====================================

            const sun =
                document.getElementById(
                    'hero-sun'
                );

            if (sun) {

                // Starts offscreen
                const startX = 500;

                const endX = -320;

                const startY = 500;

                const endY = -260;

                const x =
                    startX +
                    (
                        endX - startX
                    ) * p;

                // Projectile arc
                const y =
                    startY +
                    (
                        endY - startY
                    ) * p
                    -
                    Math.sin(
                        p * Math.PI
                    ) * 180;

                sun.style.transform = `
                    translate3d(
                        ${x}px,
                        ${y}px,
                        0px
                    )
                `;
            }

            animationRef.current =
                requestAnimationFrame(
                    animate
                );
        };

        animationRef.current =
            requestAnimationFrame(
                animate
            );

        return () => {

            cancelAnimationFrame(
                animationRef.current
            );
        };

    }, [clouds]);

    // =========================================
    // Render
    // =========================================

    return (

        <div
            className="
                absolute
                overflow-hidden
                pointer-events-none
                select-none
                bg-transparent
            "
        >

            {/* ================================= */}
            {/* STICKY HERO */}
            {/* ================================= */}

            <div
                className="
                    sticky
                    top-0
                    h-screen
                    overflow-hidden
                "
            >

                {/* ============================= */}
                {/* SUN */}
                {/* ============================= */}

                <div
                    id="hero-sun"
                    className="
                        absolute
                        left-[100%]
                        top-[100%]
                        aspect-square
                        w-[clamp(220px,30vw,520px)]
                        will-change-transform
                    "
                >

                    <img
                        src={SunIcon}
                        alt=""
                        className="
                            h-full
                            w-full
                            object-contain
                        "
                        draggable={false}
                    />

                </div>

                {/* ============================= */}
                {/* CLOUDS */}
                {/* ============================= */}

                {clouds.map((cloud) => {

                    let initialLeft = '50%';

                    if (
                        cloud.side === 'left'
                    ) {

                        initialLeft =
                            `${-15 - (cloud.id * 3)}%`;

                    } else if (
                        cloud.side === 'right'
                    ) {

                        initialLeft =
                            `${75 + (cloud.id * 2)}%`;
                    }

                    return (

                        <div
                            id={`cloud-${cloud.id}`}
                            key={cloud.id}
                            className="
                                absolute
                                will-change-transform
                            "
                            style={{

                                top:
                                    `${cloud.top}%`,

                                left:
                                    initialLeft,

                                width:
                                    `${cloud.size}px`,

                                opacity: 0.9,
                            }}
                        >

                            <img
                                src={CloudIcon}
                                alt=""
                                className="
                                    h-full
                                    w-full
                                    object-contain
                                "
                                draggable={false}
                            />

                        </div>
                    );
                })}

                {/* ============================= */}
                {/* SCROLL INDICATOR */}
                {/* ============================= */}

                <div
                    className="
                        absolute
                        bottom-8
                        left-1/2
                        flex
                        -translate-x-1/2
                        items-center
                        gap-1
                        blink
                        font-mono
                        text-sm
                        tracking-[0.3em]
                        text-black
                    "
                    style={
                        {
                            '--lowestOpacity':
                                lowestOpacity,

                            '--blinkSpeed':
                                blinkSpeed,
                        } as CSSProperties
                    }
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                    >

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="
                                M8.25 15
                                L12 18.75
                                L15.75 15

                                m-7.5-6
                                L12 5.25
                                L15.75 9
                            "
                        />

                    </svg>

                    <div>
                        SCROLL
                    </div>

                </div>

            </div>

        </div>
    );
};
