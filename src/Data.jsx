// import images
import PortfolioImg1 from "./assets/images/portfolio-img-1.png";
import PortfolioImg2 from "./assets/images/portfolio-img-2.png";
import PortfolioImg3 from "./assets/images/portfolio-img-3.png";
import PortfolioImg4 from "./assets/images/portfolio-img-4.png";
import PortfolioImg5 from "./assets/images/portfolio-img-5.png";
import PortfolioImg6 from "./assets/images/portfolio-img-6.png";
import TeamImg1 from "./assets/images/team-img-1.png";
import TeamImg2 from "./assets/images/team-img-2.png";
import TeamImg3 from "./assets/images/team-img-3.png";
import TeamImg4 from "./assets/images/team-img-4.png";
import TestimonialProfile1 from "./assets/images/testimonial-profile-1.png";
import TestimonialProfile2 from "./assets/images/testimonial-profile-2.png";

// import icons
import { RiStarFill } from "react-icons/ri";
import ServiceIcon1 from "./assets/images/icons/service-icon-1.png";
import ServiceIcon2 from "./assets/images/icons/service-icon-2.png";
import ServiceIcon3 from "./assets/images/icons/service-icon-3.png";
import ServiceIcon4 from "./assets/images/icons/service-icon-4.png";

export const HeaderLink = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "What we do?",
    path: "/what-we-do",
  },
  {
    title: "Our services",
    path: "/our-services",
  },
  {
    title: "Our projects",
    path: "/our-projects",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
];

export const ServiceData = [
  {
    icon: ServiceIcon1,
    subtitle: "Web Design",
    title: "Website Design",
    text: "Our creative team made a great and beautiful website.",
  },
  {
    icon: ServiceIcon2,
    subtitle: "UI/UX Design",
    title: "UI/UX Design",
    text: "Our creative team made a great and beautiful UIX design.",
  },
  {
    icon: ServiceIcon3,
    subtitle: "Brand Design",
    title: "Brand Design",
    text: "Our creative team made a great and beautiful brands.",
  },
  {
    icon: ServiceIcon4,
    subtitle: "App Design",
    title: "Mobile Design",
    text: "Our creative team made a great and beautiful apps.",
  },
];

export const ExperienceData = [
  {
    number: "01",
    title: "26+ Years",
    text: "We have been in industry for more 26 years experiences.",
  },
  {
    number: "02",
    title: "Creative Team",
    text: "We the best creative team that bring the ideas to ideas.",
  },
  {
    number: "03",
    title: "We're Helpful",
    text: "We love to help clients to achieve their online goals.",
  },
];

export const PortfolioData = [
  {
    image: PortfolioImg1,
    subtitle: "Design Kit",
    title: "Portfolio Deck",
  },
  {
    image: PortfolioImg2,
    subtitle: "Design System",
    title: "Pegasus Design System",
  },
  {
    image: PortfolioImg3,
    subtitle: "Mobile App Design",
    title: "Food Delivery App",
  },
  {
    image: PortfolioImg4,
    subtitle: "UI Kit Design",
    title: "IOS 15 UI Kit",
  },
  {
    image: PortfolioImg5,
    subtitle: "Icon Design",
    title: "Coolicons Iconset",
  },
  {
    image: PortfolioImg6,
    subtitle: "Mobile App Design",
    title: "Mental Health App",
  },
];

export const TeamData = [
  {
    image: TeamImg1,
    name: "Zyan Maliq",
    profession: "Founder, CEO",
  },
  {
    image: TeamImg2,
    name: "David Snow",
    profession: "Frontend Developer",
  },
  {
    image: TeamImg3,
    name: "Sarah Jones",
    profession: "Product Designer",
  },
  {
    image: TeamImg4,
    name: "Bella William",
    profession: "UI/UX Designer",
  },
];

export const TestimonialData = [
  {
    comment:
      "I;m trusted my company in allies and the results have been satisfyiing, because my company has growing.",
    profileImg: TestimonialProfile1,
    name: "Mika Wolff",
    profession: "Product Manager",
    rating: [
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
    ],
  },
  {
    comment:
      "I;m trusted my company in allies and the results have been satisfyiing, because my company has growing.",
    profileImg: TestimonialProfile2,
    name: "Bryan Rop",
    profession: "Graphic Designer",
    rating: [
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
    ],
  },
  {
    comment:
      "I;m trusted my company in allies and the results have been satisfyiing, because my company has growing.",
    profileImg: TestimonialProfile1,
    name: "Ashley Smith",
    profession: "Frontend Developer",
    rating: [
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
    ],
  },
  {
    comment:
      "I;m trusted my company in allies and the results have been satisfyiing, because my company has growing.",
    profileImg: TestimonialProfile2,
    name: "Chico McKinley",
    profession: "Software Engineer",
    rating: [
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
      <RiStarFill />,
    ],
  },
];

export const CapabilitiesData = [
  {
    subtitle: "Strategy",
    title: "Full-stack enterprise media management",
    text: "Regulatory oneven an enterprise such she and the got the did attributing and pushed. We recently have 36 active media campaigns across 24 projects.",
  },
  {
    subtitle: "Design",
    title: "UI/UX design website & Mobile app design",
    text: "A higher spacing and movements through and impactful email campaigns. Creating a portfolio budgeting in a real time planning and phasing.",
  },
  {
    subtitle: "Marketing",
    title: "Marketing, campaigns & content creators",
    text: "Makign a short time up to date email campaigns to achieve a real impact.",
  },
  {
    subtitle: "Analytics",
    title: "Google analytics, planning & measurement",
    text: "Spaces of each debt in the digital world can help you with overall simplest authentic. Get an utilitize of structure to tackle complex issues and changes.",
  },
];

export const PlanList = [
  {
    grade: "Basic",
    price: "19$",
    description: "For most business that want to optimize web queries.",
    list: [
      { name: "All limited links." },
      { name: "Own analytics platform." },
      { name: "Chat support." },
      { name: "Optimize hastags." },
      { name: "Unlimited users." },
    ],
  },
  {
    grade: "Popular",
    price: "39$",
    description: "For most business that want to optimize web queries.",
    list: [
      { name: "All limited links." },
      { name: "Own analytics platform." },
      { name: "Chat support." },
      { name: "Optimize hastags." },
      { name: "Unlimited users." },
    ],
  },
  {
    grade: "Premium",
    price: "199$",
    description: "For most business that want to optimize web queries.",
    list: [
      { name: "All limited links." },
      { name: "Own analytics platform." },
      { name: "Chat support." },
      { name: "Optimize hastags." },
      { name: "Unlimited users." },
    ],
  },
];

export const AccordionData = [
  {
    question: "Do your applications support timestamps?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
  },
  {
    question: "Does the system support data extraction for invoice items?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
  },
  {
    question: "How is data security addressed in ScooLab?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
  },
  {
    question: "How log does it take to extract invoice data?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
  },
  {
    question: "How is the demo account, is the free trial account?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
  },
];
