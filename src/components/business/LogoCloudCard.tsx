import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

type Props = {
    id: string;
    color: string;
    logo: string;
    scrollToSection: (id: string) => void;
    delay: number;
}

export default function LogoCloudCard({
    id,
    color,
    logo,
    scrollToSection,
    delay
}: Props) {
    const [hovered, setHovered] = useState(false);
    const [intro, setIntro] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) setIntro(true);
    }, [isInView]);

    const glowVariants = {
        inactive: { opacity: 0 },
        active: { opacity: 1 },
        intro: { opacity: 1,
            transition: { duration: 0.4, ease: "easeOut", delay },
        }
    };

    const logoVariants = {
        inactive: { y: 0 },
        active: { y: -12 },
        intro: { y: -12,
            transition: { duration: 0.4, ease: "easeOut", delay },
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center p-8 border-r border-l border-b lg:border-b-0 cursor-pointer relative"
            style={{
                borderImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.6), rgba(0,0,0,0)) 1",
            }}
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => scrollToSection(id)}
        >
            {/* Glow Effect */}
            <motion.div
                className="absolute -inset-1"
                variants={glowVariants}
                animate={hovered ? 'active' : intro ? 'intro' : 'inactive'}
                onAnimationComplete={(definition) => {
                    if (definition === 'intro') setIntro(false);
                }}
                style={{
                    background:
                        `linear-gradient(to right, ${color}, transparent 25%, transparent 75%, ${color})`,
                    pointerEvents: "none",
                }}
            />
            {/* Rise Effect */}
            <motion.div
                className="relative z-10"
                variants={logoVariants}
                animate={hovered ? 'active' : intro ? 'intro' : 'inactive'}
                onAnimationComplete={(definition) => {
                    if (definition === 'intro') setIntro(false);
                }}
            >
                <img
                    src={logo}
                    className="h-40 lg:h-32 w-auto object-contain"
                />
            </motion.div>
        </div>
    );
}