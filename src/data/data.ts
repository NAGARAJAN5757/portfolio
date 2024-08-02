import { EduDetail, MenuItem, Project, Skill } from "@/types/types"

export const eduDetails: EduDetail[] = [
    {
        course: "B.E Electronics and Communication Engineering",
        courseDetail:
            "2020 to 2024 at Velammal College of Engineering and Technology, Madurai, TamilNadu, India",
    },
    {
        course: "Higher Secondary Education",
        courseDetail:
            "2019 to 2020 at Sourashtra Higher Secondary School, Madurai, TamilNadu, India",
    },
    {
        course: "Secondary School Education",
        courseDetail:
            "2017 to 2018 at Sourashtra Higher Secondary School, Madurai, TamilNadu, India",
    },
]

export const menuItems: MenuItem[] = [
    {
        id: "#hero",
        item: "About me",
    },
    {
        id: "#education",
        item: "Education",
    },
    {
        id: "#skills",
        item: "Skills",
    },
    {
        id: "#projects",
        item: "Projects",
    },
]

export const projects: Project[] = [
    {
        title: "All in One PDF Manager",
        image: "/pdfLogo.png",
        description:
            "It is a pdf manager which is useful to merge, remove, split the pdf pages. It is very useful in day to day life. It is made with Java Swing and Apache PDF-BOX. Java Swing is used for GUI and APACHE PDF-BOX is used for pdf processing.",
        technologies: ["JAVA SWING", "APACHE PDF BOX"],
        link: "https://github.com/NAGARAJAN5757/ALL-IN-ONE-PDF",
    },
    {
        title: "Stylish QRCODE Generator",
        image: "/qrLogo.png",
        description:
            "A colorful QR CODE Generator which is used to create stylish QRCodes for links, text datas, etc. It is created using HTML, CSS and JS. It uses Stylish QRcode Library for styling qrcodes.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        link: "https://github.com/NAGARAJAN5757/qrcodegenerator",
    },
    {
        title: "Movies World",
        image: "/mvLogo.png",
        description:
            "This is a NextJS project which is used to gather information from OMDB api and delivers it with amazing UI using shadcn ui and tailwindcss.",
        technologies: ["NEXTJS", "TAILWINDCSS", "TYPESCRIPT"],
        link: "https://github.com/NAGARAJAN5757/Movies-World",
    },
]

export const skills: Skill[] = [
    "Java",
    "C",
    "C++",
    "Javascript",
    "ReactJS",
    // "NodeJS",
    // "ExpressJS",
    "NextJS",
    "Typescript",
    "TailwindCSS",
    "Mysql",
    "Mongodb",
    "Spring Boot",
    "GCP",
]
