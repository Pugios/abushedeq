import LogoCloudCard from "../business/LogoCloudCard";
import { businesses } from "../../data/businesses";

type Props = {
  t: any,
  scrollToSection: (id: string) => void,
}

export default function LogoCloudSection({
  t,
  scrollToSection
}: Props) {
  return (
    <section id="logo-cloud" className="py-8 bg-[#0A0B14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
          {businesses(t).map((b) => (
              <LogoCloudCard
                key={b.id}
                id={b.id}
                color={b.color}
                logo={b.simple}
                scrollToSection={scrollToSection}
              />
            ))}
        </div>
      </div>
    </section>
  );
}