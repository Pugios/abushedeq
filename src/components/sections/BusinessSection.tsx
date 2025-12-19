import BusinessCard from "../business/BusinessCard";
import { businesses } from "../../data/businesses";

type Props = {
    t: any
}

export default function BusinessSection({
    t
}: Props) {
    return (
        <section id="businesses" className="py-24 relative">
            <div className="container mx-auto space-y-12 lg:space-y-16">
                {businesses(t).map((b) => (
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
        </section>
    )
}