import DatagptImage from "./assets/Datagpt.png";
import NutrigenImage from "./assets/Nutrigen.png";
import ResumeImage from "./assets/Resume.png";
import UserImage from "./assets/user.jpg";
import Mentor1 from "./assets/mentor1.jpg";
import Mentor2 from "./assets/mentor2.jpg";
import Mentor3 from "./assets/mentor3.jpg";

export const products = [
  {
    id: 1,
    name: "DataGPT",
    description: "Advanced AI-powered data analysis and visualization tool that helps businesses make data-driven decisions.",
    features: [
      "Natural language data queries",
      "Automated data visualization",
      "Real-time analytics dashboard",
      "Predictive modeling capabilities"
    ],
    image: DatagptImage,
    category: "AI & Analytics",
    price: "$299/month"
  },
  {
    id: 2,
    name: "Nutrigen",
    description: "Personalized nutrition planning platform that creates custom meal plans based on genetic profile and health goals.",
    features: [
      "DNA-based nutrition recommendations",
      "Personalized meal planning",
      "Health goal tracking",
      "Expert nutritionist consultation"
    ],
    image: NutrigenImage,
    category: "Health & Wellness",
    price: "$199/month"
  },
  {
    id: 3,
    name: "Resume Analyzer",
    description: "Professional resume creation tool with AI-powered suggestions and industry-specific templates.",
    features: [
      "AI-powered content suggestions",
      "Industry-specific templates",
      "ATS-friendly formatting",
      "Real-time collaboration"
    ],
    image: ResumeImage,
    category: "Career Tools",
    price: "$49/month"
  }
];

export const services = [
  {
    id: 1,
    name: "Industrial Training",
    description: "Comprehensive training programs designed to bridge the gap between academic knowledge and industry requirements.",
    features: [
      "Hands-on practical training",
      "Industry expert mentorship",
      "Project-based learning",
      "Certification upon completion"
    ],
    duration: "3-6 months",
    price: "Starting from $2,500",
    image: "/images/industrial-training.jpg",
    category: "Training & Education"
  },
  {
    id: 2,
    name: "App Development",
    description: "Custom mobile application development for iOS and Android platforms with modern UI/UX design.",
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions",
      "UI/UX design",
      "App store optimization"
    ],
    duration: "8-16 weeks",
    price: "Starting from $15,000",
    image: "/images/app-development.jpg",
    category: "Mobile Development"
  },
  {
    id: 3,
    name: "Web Development",
    description: "Full-stack web development services including frontend, backend, and database design.",
    features: [
      "Responsive web design",
      "E-commerce solutions",
      "Content management systems",
      "SEO optimization"
    ],
    duration: "6-12 weeks",
    price: "Starting from $8,000",
    image: "/images/web-development.jpg",
    category: "Web Development"
  },
  {
    id: 4,
    name: "AI Processed Solutions",
    description: "Custom AI and machine learning solutions to automate business processes and improve efficiency.",
    features: [
      "Machine learning model development",
      "Process automation",
      "Data analysis & insights",
      "Integration with existing systems"
    ],
    duration: "4-8 weeks",
    price: "Starting from $12,000",
    image: "/images/ai-solutions.jpg",
    category: "Artificial Intelligence"
  },
  {
    id: 5,
    name: "Digital Marketing",
    description: "Comprehensive digital marketing services to boost your online presence and drive business growth.",
    features: [
      "SEO & SEM optimization",
      "Social media marketing",
      "Content marketing",
      "Analytics & reporting"
    ],
    duration: "Ongoing",
    price: "Starting from $1,500/month",
    image: "/images/digital-marketing.jpg",
    category: "Marketing"
  },
  {
    id: 6,
    name: "Cloud Solutions",
    description: "Enterprise cloud infrastructure and migration services for scalable and secure business operations.",
    features: [
      "AWS/Azure/GCP migration",
      "Cloud architecture design",
      "DevOps implementation",
      "24/7 monitoring & support"
    ],
    duration: "4-12 weeks",
    price: "Starting from $20,000",
    image: "/images/cloud-solutions.jpg",
    category: "Cloud Services"
  },
  {
    id: 7,
    name: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Security infrastructure setup",
      "Incident response planning"
    ],
    duration: "2-8 weeks",
    price: "Starting from $8,500",
    image: "/images/cybersecurity.jpg",
    category: "Security"
  },
  {
    id: 8,
    name: "Data Analytics",
    description: "Advanced data analytics and business intelligence solutions to drive informed decision-making.",
    features: [
      "Data warehouse design",
      "BI dashboard development",
      "Predictive analytics",
      "Data visualization"
    ],
    duration: "6-10 weeks",
    price: "Starting from $10,000",
    image: "/images/data-analytics.jpg",
    category: "Analytics"
  },
  {
    id: 9,
    name: "UI/UX Design",
    description: "User-centered design services to create intuitive and engaging digital experiences.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing"
    ],
    duration: "4-8 weeks",
    price: "Starting from $6,000",
    image: "/images/ui-ux-design.jpg",
    category: "Design"
  },
  {
    id: 10,
    name: "Consulting Services",
    description: "Strategic technology consulting to help businesses optimize their digital transformation journey.",
    features: [
      "Technology strategy planning",
      "Digital transformation roadmap",
      "Process optimization",
      "Change management"
    ],
    duration: "Ongoing",
    price: "Starting from $200/hour",
    image: "/images/consulting.jpg",
    category: "Consulting"
  }
];

export const mentors = [
  {
    name: "Mentor 1",
    tagline: "Heart of Senkusha",
    post: undefined,
    image: Mentor1,
  },
  {
    name: "Mentor 2",
    tagline: "Brain of Senkusha",
    post: undefined,
    image: UserImage,
  },
  {
    name: "Mentor 3",
    tagline: "Spine of Senkusha",
    post: undefined,
    image: UserImage,
  },
  {
    name: "Mentor 4",
    tagline: "Eyes of Senkusha",
    post: undefined,
    image: Mentor3,
  },
  {
    name: "Mentor 5",
    tagline: "Soul of Senkusha",
    post: undefined,
    image: Mentor2,
  }
];
