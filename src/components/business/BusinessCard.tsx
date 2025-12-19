import { motion } from "motion/react";

type IconDefinition = {
  path: string;
  scale: number;
};

type SocialLink = {
    href?: string;
    icon: IconDefinition;
};

type Props = {
    id: string;
    title: string;
    description: string;
    backgroundImage: string;
    logo: string;
    socials: SocialLink[];
};

export default function BusinessCard({
    id,
    title,
    description,
    backgroundImage,
    logo,
    socials
}: Props) {
    return (
        <motion.div
            id={id}
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
        >
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="bg-white p-6 rounded-xl flex-shrink-0">
                        <img
                            src={logo}
                            className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                            {title}
                        </h2>
                        <p className="text-white/70 mb-6 max-w-2xl text-sm sm:text-base">
                            {description}
                        </p>

                        <div className="flex gap-4">
                            {socials.map((s, i) =>
                                s.href ? (
                                    <a
                                        key={i}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 103 103"
                                        >
                                            <g transform={`scale(${s.icon.scale})`}>
                                            <path
                                                d={s.icon.path}
                                                stroke="#B3B3B3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={10/s.icon.scale}
                                            />
                                            </g>
                                        </svg>
                                    </a>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}