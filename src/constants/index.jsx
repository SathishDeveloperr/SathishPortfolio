import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import Dronas from "../assets/PrgImags/Dronas.png";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Specialization", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact ", href: "#" },
];

export const testimonials = [
  {
    user: "Dronas",
    company: "Dronas",
    image: Dronas,
    text: "Dronas is a leading innovator in drone manufacturing and research & development (R&D). We specialize in designing cutting-edge drones tailored for diverse industries, including agriculture, defense, logistics, and environmental monitoring.",
  },
  {
    user: "Dronas",
    company: "Dronas",
    image: Dronas,
    text: "Dronas is a leading innovator in drone manufacturing and research & development (R&D). We specialize in designing cutting-edge drones tailored for diverse industries, including agriculture, defense, logistics, and environmental monitoring.",
  },
  {
    user: "Dronas",
    company: "Dronas",
    image: Dronas,
    text: "Dronas is a leading innovator in drone manufacturing and research & development (R&D). We specialize in designing cutting-edge drones tailored for diverse industries, including agriculture, defense, logistics, and environmental monitoring.",
  },
 
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description:
      "I specialize in creating custom web solutions and applications that are not only functional but also visually appealing and user-friendly.",
  },
  {
    icon: <Fingerprint />,
    text: "Graphic Design",
    description:
      "With a keen eye for detail, I provide creative graphic design services to help brands stand out with stunning visual content.",
  },
  {
    icon: <ShieldHalf />,
    text: "App Development",
    description:
      "I develop robust and intuitive mobile applications for both iOS and Android, tailored to meet user needs and business objectives.",
  },
  {
    icon: <BatteryCharging />,
    text: "AI Development",
    description:
      "Leveraging my knowledge in artificial intelligence, I design and implement intelligent systems that drive innovation and efficiency.",
  },
 
];

export const checklistItems = [
  {
    title: "About Us",
    description:
      "I am a passionate and dedicated software developer with expertise in .NET technologies, especially .NET Core Web API and ASP.NET WebForms. I have extensive experience in backend development, including working with SQL Server, stored procedures, and implementing the repository pattern for efficient and scalable applications.I am skilled in frontend development, creating responsive and user-friendly interfaces using Angular, ReactJS, jQuery, and Bootstrap. I also have hands-on experience with modern JavaScript frameworks like Node.js and Express for building robust, server-side applications, and I am proficient in working with MongoDB for NoSQL database solutions.I take pride in delivering clean, maintainable, and efficient code while ensuring that the designs are aligned with user needs and project goals. I enjoy learning new technologies and applying them to create value-driven solutions. I am also committed to mentoring and sharing knowledge with others to help them grow in their careers."
  },
  
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
