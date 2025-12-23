import imgHBLogo from "../assets/hbLogo.png";
import imgHBBackground from "../assets/hbBackground.png";
import imgHBSimple from "../assets/hbSimple.png";

import imgPKLogo from "../assets/pkLogo.png";
import imgPKBackground from "../assets/pkBackground.png";
import imgPKSimple from "../assets/pkSimple.png";

import imgLHRLogo from '../assets/lhrLogo.png';
import imgLHRBackground from "../assets/lhrBackground.png";
import imgLHRSimple from "../assets/lhrSimple.png";

import imgLHHLogo from "../assets/lhhLogo.png";
import imgLHHBackground from "../assets/lhhBackground.png";
import imgLHHSimple from "../assets/lhhSimple.png";

import imgPalmeraLogo from "../assets/palLogo.png";
import imgPalmeraBackground from "../assets/palBackground.png";
import imgPalmeraSimple from "../assets/palSimple.png";

import imgMSLogo from "../assets/msLogo.png";
import imgMSBackground from "../assets/msBackground.jpeg";
import imgMSSimple from "../assets/msSimple.png";

import tiktokIcon from "../assets/icons/tiktok.png";

import svgPaths from "../assets/icons/svg-vymn29r931";

export const businesses = (t: any) => [
  {
    id: "hammer-bau",
    title: t.businesses.hammerBau.title,
    description: t.businesses.hammerBau.description,
    backgroundImage: imgHBBackground,
    logo: imgHBLogo,
    simple: imgHBSimple,
    color: `rgba(217, 39, 39, 0.4)`,
    socials: [
      { href: "https://www.hb87-web.com/", icon: svgPaths.link },
      { href: "https://www.facebook.com/HammerBau87/", icon: svgPaths.facebook },
      { href: "https://www.instagram.com/hammer.bau87/", icon: svgPaths.instagram }
    ],
  },
  {
    id: "palast-konditorei",
    title: t.businesses.palast.title,
    description: t.businesses.palast.description,
    backgroundImage: imgPKBackground,
    logo: imgPKLogo,
    simple: imgPKSimple,
    color: `rgba(220, 198, 133, 0.5)`,
    socials: [
      { href: "https://www.palast-konditorei.de/", icon: svgPaths.link },
      { href: "https://www.facebook.com/share/19tDw4abBi/", icon: svgPaths.facebook },
      { href: "https://www.instagram.com/palastkonditorei/", icon: svgPaths.instagram },
      { href: "https://www.tiktok.com/@palast.konditorei", icon: svgPaths.tiktok }
    ],
  },
  {
    id: "lighthouse-restaurant",
    title: t.businesses.lighthouseRestaurant.title,
    description: t.businesses.lighthouseRestaurant.description,
    backgroundImage: imgLHRBackground,
    logo: imgLHRLogo,
    simple: imgLHRSimple,
    color: `rgba(3, 76, 60, 0.6)`,
    socials: [
      { href: "https://lighthouse-restaurant.de/", icon: svgPaths.link },
      { href: "https://www.facebook.com/profile.php?id=61573896891934", icon: svgPaths.facebook },
      { href: "https://www.instagram.com/lighthouse__resturant/", icon: svgPaths.instagram },
      { href: "https://www.tiktok.com/@lighthouse.berlin", icon: svgPaths.tiktok }
    ],
  },
  {
    id: "lighthouse-health",
    title: t.businesses.lighthouseHealth.title,
    description: t.businesses.lighthouseHealth.description,
    backgroundImage: imgLHHBackground,
    logo: imgLHHLogo,
    simple: imgLHHSimple,
    color: `rgba(61, 43, 61, 0.5)`,
    socials: [
      { href: "https://lighthouse-health.de/", icon: svgPaths.link }
    ],
  },
  {
    id: "palmera",
    title: t.businesses.palmera.title,
    description: t.businesses.palmera.description,
    backgroundImage: imgPalmeraBackground,
    logo: imgPalmeraLogo,
    simple: imgPalmeraSimple,
    color: `rgba(242, 231, 213, 0.5)`,
    socials: [
        { href: "", icon: svgPaths.facebook },
        { href: "", icon: svgPaths.instagram }
    ],
  },
  {
    id: "mrstyle",
    title: t.businesses.mrstyle.title,
    description: t.businesses.mrstyle.description,
    backgroundImage: imgMSBackground,
    logo: imgMSLogo,
    simple: imgMSSimple,
    color: `rgba(255, 145, 0, 0.5)`,
    socials: [
        { href: "", icon: svgPaths.facebook },
        { href: "", icon: svgPaths.instagram }
    ],
  }
];