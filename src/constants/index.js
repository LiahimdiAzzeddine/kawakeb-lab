import {
  laravel,
  threejs,
  aws,
  solidity,
  ARandVR,
  codeBranch,
  gamepad,
  modelCube,
  appsAdd,
  networkanalytic,
  angular,
  symfony,
  django,
  WordPress,
  gatsby,
  flutter,
  csharp,
  python,
  sass,
  jquery,
  foodhea,
  foodhealogo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    url:"",
  },
  {
    id: "services",
    title: "Service",
    url:"",
  },
  {
    id: "contact",
    title: "Contact",
    url:"",
  },
];
const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem 1",
    designation: "CFO",
    company: "Lorem Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinLink:"https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem 11",
    designation: "CFO",
    company: "Lorem Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinLink:"https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem 2",
    designation: "CFO",
    company: "Lorem Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinLink:"https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem 3",
    designation: "CFO",
    company: "Lorem Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinLink:"https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem 4",
    designation: "CFO",
    company: "Lorem Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinLink:"https://randomuser.me/api/portraits/women/4.jpg"
  },
   {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem 5",
    designation: "CFO",
    company: "Lorem Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedinLink:"https://randomuser.me/api/portraits/women/4.jpg"
  },
];
const services = [
  {
    title: "Web Development",
    icon: 'web',
  },
  {
    title: "Mobile Development",
    icon: 'mobile',
  },
  {
    title: "Game Development",
    icon: 'games',
  },
  {
    title: "AR / VR Developement",
    icon: 'metaImg',
  },
];

const Socials = [
  {
    title: "Discord",
    d: "M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z",
    color: "#7289da",
    link:"https://www.instagram.com/kawakeblab/?igsh=cWI2c2pvZWN4OXg4"
  },
  {
    title: "Facebook",
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    color: "#3b5998",
    link:"https://www.instagram.com/kawakeblab/?igsh=cWI2c2pvZWN4OXg4"
  },
  {
    title: "Instagram",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    color: "#c13584",
    link:"https://www.instagram.com/kawakeblab/?igsh=cWI2c2pvZWN4OXg4"
  },
];
/*
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
*/
const serviceCard = [
  {
    name: "AR and VR Development",
    designation: "Traverse the celestial realms of Augmented and Virtual reality  with our cosmic creations. From immersive experiences that teleport you to distant galaxies to training simulations that defy gravity, we harness the power of cosmic technology to shape new dimensions of reality.",
    image: ARandVR,
  },
  {
    name: "Custom Software Development",
    designation: "Forge custom constellations of code tailored to your cosmic coordinates. Our software development services offer solutions designed to navigate the vast expanse of digital space, empowering your enterprise to soar among the stars.",
    image: codeBranch,
  },

  {
    name: "Web & Web3 development",
    designation: "Our team crafts immersive websites and decentralized applications (dApps) that integrate cutting-edge technologies and robust security. By harnessing the power of blockchain and decentralization, we deliver solutions that are not only visually stunning but also innovative and secure, guiding users through the vast expanse of the digital universe with confidence and ease.",
    image: networkanalytic,
  },
  {
    name: "Game Development",
    designation: "Embark on an odyssey through the cosmos with our galactic game development services. From cosmic casual adventures to epic space odysseys, we warp the fabric of reality to create immersive gaming experiences that defy cosmic limits.    ",
    image: gamepad,
  },
  {
    name: "3D and Animation",
    designation: "Traverse the cosmic canvas with our 3D modeling and animation services. From planetary renderings to character animations, we sculpt celestial wonders that ignite imaginations and bring galaxies to life.",
    image: modelCube,
  },
  {
    name: "App development",
    designation: "Our team crafts immersive websites and decentralized applications (dApps) that integrate cutting-edge technologies and robust security. By harnessing the power of blockchain and decentralization, we deliver solutions that are not only visually stunning but also innovative and secure, guiding users through the vast expanse of the digital universe with confidence and ease.",
    image: appsAdd,
  },
];
/**/
const projects = [
  {
    name: "FoodHea",
    description:
      "Collaborates on the FoodHea project, which includes website development, product sheets, and a mobile PWA application that serves as a comprehensive resume for each food product. This platform consolidates essential information clearly and objectively, ensuring direct accessibility on the product. The project's goal is to streamline and simplify food information, making it easily and understandable for all.",
    tags: [
      {
        name: "PhP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "ReactJs",
        color: "pink-text-gradient",
      },
    ],
    image: foodhea,
    logo:foodhealogo,
    company: "Company Name",
    date: "Jan 2020 - Dec 2021",
    link: "https://www.foodhea.com",
  }

];

  
const Frontend_skill = [
  {
    skill_name: "Php",
    Image: "/php.png",
    width: 80,
    height: 55,
  },
  {
    skill_name: "csharp",
    Image: csharp,
    width: 75,
    height: 75,
  },
  {
    skill_name: "python.png",
    Image: python,
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "sass",
    Image: sass,
    width: 70,
    height: 70,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Solidity",
    Image: solidity,
    width: 50,
    height: 70,
  },
  {
    skill_name: "jquery",
    Image: jquery,
    width: 70,
    height: 70,
  },
  
];

const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 70,
    height: 75,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 45,
    height: 75,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 65,
  },
  {
    skill_name: "Postger SQL",
    Image: "/postger.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Graphql",
    Image: "/graphql.png",
    width: 70,
    height: 70,
  },
];

const Full_stack = [

  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 85,
    height: 85,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 45,
    height: 60,
  },

];

const Other_skill = [
  {
    skill_name: "aws",
    Image: aws,
    width: 75,
    height: 55,
  },
];
const Skill_data = [
  {
    skill_name: "laravel",
    Image: laravel,
    width: 80,
    height: 75,
  },
  {
    skill_name: "angular",
    Image: angular,
    width: 65,
    height: 70,
  },
  
  {
    skill_name: "Flutter",
    Image: flutter,
    width: 70,
    height: 65,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "gatsby",
    Image:gatsby,
    width: 70,
    height: 70,
  },
  {
    skill_name: "unity",
    Image: "/unity.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "three js",
    Image: threejs,
    width: 75,
    height: 75,
  },
  {
    skill_name: "django.png",
    Image: django,
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 70,
    height: 75,
  },
  {
    skill_name: "Symfony",
    Image: symfony,
    width: 70,
    height: 70,
  },

  {
    skill_name: "WordPress",
    Image: WordPress,
    width: 70,
    height: 70,
  },
  
];
const partnersList = [
  {
    name: "FoodHea",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea2",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea3",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea4",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea5",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea6",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea7",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea8",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
  {
    name: "FoodHea9",
    icon: foodhealogo,
    website:"https://www.foodhea.com/",
    color: "#ffecd2"
  },
 
];
export { services, serviceCard,Socials,Other_skill,Frontend_skill,Backend_skill,Full_stack,Skill_data,projects,testimonials,partnersList };
