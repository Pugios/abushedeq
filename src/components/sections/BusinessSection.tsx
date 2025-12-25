import BusinessCard from "../business/BusinessCard";
import { businesses } from "../../data/businesses";
import { useLayoutEffect } from "react";

type Props = {
    t: any
}

export default function BusinessSection({
    t
}: Props) {

    useLayoutEffect(() => {
        const container = document.getElementById("business-glows");
        if (!container) return;

        container.innerHTML = "";

        const section = document.getElementById("businesses");
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;

        const anchors = document.querySelectorAll<HTMLElement>(
            "[data-glow-anchor]"
        );

        anchors.forEach((anchor, i) => {
            const rect = anchor.getBoundingClientRect();

            if (rect.height === 0) return;

            const glow = document.createElement("div");

            glow.style.position = "absolute";
            glow.style.left = "50%";
            glow.style.transform = "translateX(-50%)";
            glow.style.width = "100vw";
            glow.style.top = `${rect.top - sectionTop - rect.height*0.3}px`;
            glow.style.height = `${rect.height*1.6}px`;
            glow.style.pointerEvents = "none";
            glow.style.background = `
            radial-gradient(
                circle at center ${i % 2 === 0 ? "left" : "right"},
                ${businesses(t)[i].color},
                transparent 70%
            )
            `;

            container.appendChild(glow);
        });
    }, [t]);

    return (
        <section id="businesses" className="relative py-16 sm:py-24">
            {/* Full-bleed glow layer */}
            <div className="absolute inset-0 pointer-events-none" id="business-glows" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="space-y-12 lg:space-y-16">
                    {businesses(t).map((b, i) => (
                        <BusinessCard
                            key={b.id}
                            id={b.id}
                            title={b.title}
                            description={b.description}
                            backgroundImage={b.backgroundImage}
                            logo={b.logo}
                            socials={b.socials}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}