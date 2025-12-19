import { motion } from "motion/react";
import { useState } from "react";

type Props = {
    id: string;
    color: string;
    logo: string;
    scrollToSection: (id: string) => void;
}

export default function LogoCloudCard({
    id,
    color,
    logo,
    scrollToSection
}: Props) {
    const [hoveredLogo, setHoveredLogo] = useState<string | null>(
        null,);

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-8 border-r border-b lg:border-b-0 cursor-pointer relative"
            style={{
                borderImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.6), rgba(0,0,0,0)) 1",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredLogo(id)}
            onMouseLeave={() => setHoveredLogo(null)}
            onClick={() =>
                scrollToSection(id)
            }
        >
            <motion.div
                className="absolute -inset-1"
                animate={{
                    opacity: hoveredLogo === id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    background:
                        `linear-gradient(to right, ${color}, transparent 25%, transparent 75%, ${color})`,
                    pointerEvents: "none",
                }}
            />
            <motion.div
                className="relative z-10"
                animate={{
                    y: hoveredLogo === id ? -12 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <img
                    src={logo}
                    className="h-40 lg:h-32 w-auto object-contain"
                />
            </motion.div>
        </motion.div>
    );
}