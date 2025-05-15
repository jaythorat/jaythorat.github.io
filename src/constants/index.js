import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  plotmydata,
  proccedDigital,

  portfolio,
  python,
  aws,
  django,
  cpp,
  jupyter,
  sklearn,
  mvr,
  dns_server,
  handwrittenCharRecog,
  rdp,
  quickstartdjango,
  businesslead,
  pywsgi,
  sample,
  ooef,
  github,
  linkedInNav,
  instagramNav,
  githubNav,
  vedantAher,
  jakeWright,


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    id: "linkedIn",
    title: "LinkedIn",
    icon: linkedInNav,
    link: "https://www.linkedin.com/in/jaythorat/",
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: instagramNav,
    link: "https://www.instagram.com/jaythorat10/",
  },
  {
    id: "github",
    title: "Github",
    icon: githubNav,
    link: "https://github.com/jaythorat",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "DJango",
    icon: django,
  },
  {
    name: "jupyter",
    icon: jupyter,
  },
  {
    name: "Sklearn",
    icon: sklearn
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "One Open Educare Federation ",
    icon: ooef,
    iconBg: "#FFFFFF",
    date: "Jun 2024 - Present",
    points: [
      "Migrated a legacy PHP framework to Python with a custom WSGI application, enhancing maintainability and compatibility. Developed REST APIs.",
      "Added support for WhatsApp integration, email notifications, and payment gateways, streamlining workflows.",
      "Reduced API response time from 30ms to 12ms through performance optimization and architectural tuning.",
      "Deployed distributed applications on AWS with 99.9% uptime, scaling to handle 4–5 lakh peak API requests.",
    ],
  },
  {
    title: "Python Developer and Automation Engineer",
    company_name: "Vizual Intelligence",
    icon: plotmydata,
    iconBg: "#383E56",
    date: "Jun 2024 - Nov 2024",
    points: [
      "Automated lead generation using ZeroWork and Kanbox, delivering 1.25 lakh daily leads from Apollo and LinkedIn.",
      "Built Python scripts to periodically fetch newly added data, clean it, and store it for seamless downstream use.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "One Open Educare Federation",
    icon: ooef,
    iconBg: "#FFFFFF",
    date: "Mar 2023 - May 2024",
    points: [
      "Built backend REST APIs for a chatbot, enabling seamless user interaction and efficient data processing.",
      "Customized and scaled the Open edX LMS platform to support 1,000 concurrent users and meet organizational learning objectives.",
      "Configured a Squid proxy server for access control and network traffic monitoring on student devices.",
    ],
  },
  {
    title: "Data Analyst & Web Developer Intern",
    company_name: "Proceed Digital Pvt. Ltd",
    icon: proccedDigital,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Delivered full-stack web solutions, ensuring seamless integration and functionality across diverse projects.",
      "Published a custom Python package on PyPI, demonstrating self-driven learning and technical expertise.",
      "Implemented data scraping, ETL, and visualization to drive actionable insights through data-driven approaches.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great experience working with Jay. Excellent communication daily and dedicated effort on the project. I would definitely hire him again. Jay's attention to detail, considering human error, future issues, etc., in the software, is impressive. A++.",
    name: "Jake Wright",
    designation: "CEO",
    company: "Solar Results Driven Marketing, Canada ",
    image: jakeWright,
  },
  {
    testimonial:
      "Jay crafted an incredible, dynamic portfolio website for me within a short time frame. It allows me to confidently showcase my work to potential freelance clients and has been immensely helpful during job interviews. Highly recommended!",
    name: "Mazhar Rajani",
    designation: "Game Developer",
    company: "",
    image: "https://media.licdn.com/dms/image/C4E03AQEddgbx273ijw/profile-displayphoto-shrink_200_200/0/1517343406086?e=1695859200&v=beta&t=9fVpDjHiGYVZiv3GyD6ToMttcAEmG6HU8f47772uY_4",
  },
  {
    testimonial:
      "Jay's work on my photography portfolio website was exceptional. He understood my needs, exceeded expectations, and delivered on time. His attention to detail and effective communication made the collaboration a breeze. I highly recommend Jay.",
    name: "Vedant Aher",
    designation: "Founder & CEO",
    company: "WeekendShutterBugs",
    image: vedantAher,
  },
];

const projects = [
  {
    "name": "Custom DNS Server - Python",
    "description": "Python-based DNS server for custom `.ks` domains, enabling advanced resolution of A and CNAME records with upstream integration via Google DNS, offering a scalable and configurable experience for seamless domain management and enhanced network reliability.",
    "tags": [
      {
        "name": "Python",
        "color": "blue-text-gradient"
      },
      {
        "name": "Networking",
        "color": "green-text-gradient"
      },
      {
        "name": "DNS",
        "color": "pink-text-gradient"
      }
    ],
    "image": dns_server,
    "source_code_link": "https://github.com/jaythorat/dns_server-python",
    "external_link": ""
  },
  {
    "name": "pyWSGIapp - custom python WSGI Application",
    "description": "A lightweight WSGI application framework aimed at simplifying the development of WSGI-based web applications. It offers an intuitive interface for managing HTTP requests and responses, making it an ideal choice for developers building custom web solutions.",
    "tags": [
      {
        "name": "Python",
        "color": "blue-text-gradient"
      },
      {
        "name": "WSGI",
        "color": "green-text-gradient"
      },
      {
        "name": "Web Framework",
        "color": "pink-text-gradient"
      }
    ],
    "image": pywsgi,
    "source_code_link": "https://github.com/jaythorat/pywsgiapp",
    "external_link": "https://pypi.org/project/pywsgiapp/"
  },
  {
    name: "Movie Recommender System",
    description:
      "Content-based movie recommender project suggests personalized movie recommendations using advanced algorithms, leveraging genre, director, and actor attributes for an engaging user experience, enhancing movie discovery, and enjoyment.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit Learn",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: mvr,
    source_code_link: "https://github.com/jaythorat/movie-recommender-system/",
    external_link: "",
  },
  {
    name: "Handwritten Character Recognition ",
    description:
      "Handwritten character recognition project employs Convolutional Neural Networks (CNN) and TensorFlow to accurately identify characters from handwritten inputs, enabling efficient and reliable recognition of handwritten text and improving user experience.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: handwrittenCharRecog,
    source_code_link: "https://github.com/jaythorat/handwritten_char_recognization",
    external_link: "",
  },
  {
    name: "Business Lead Generation - Webscraping",
    description:
      "The business lead generation project successfully utilizes web scraping and parallel processing techniques to swiftly gather valuable leads from various online sources. With parallel processing, it significantly boosts scraping speed, facilitating quicker and more efficient lead acquisition for businesses of all industries.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Selenium",
        color: "pink-text-gradient",
      },
    ],
    image: businesslead,
    source_code_link: "https://github.com/jaythorat/WhitePagesScrpaer_WEBAPP",
    external_link: "",
  },
  {
    name: "Researcher's Discovery Platform ",
    description:
      "The Researchers Discovery Platform gathers researchers' data from diverse sources, employing web scraping and parallel processing for faster data acquisition. It consolidates information into a single platform, streamlining research discovery and fostering collaboration within the academic community.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Selenium",
        color: "pink-text-gradient",
      },
    ],
    image: rdp,
    source_code_link: "https://github.com/jaythorat/WebScraper-researchers-discovery-platform-",
    external_link: "",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "My personal portfolio website showcases my skills, projects, and achievements, providing an interactive platform for visitors to learn about my work and professional journey. It serves as a central hub for sharing my expertise, experiences, and passion for innovation. Portfolio has separate section for contact, where user can directly email me.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jaythorat/jaythorat.github.io",
    external_link: "https://portfolio.jaythorat.in",
  },
  {
    name: "Quickstart Django - Django Made Easy",
    description:
      "Quick-Start Django is a Python package designed to streamline the process of initiating a Django project. With just a single command, this package generates a fully configured Django project, saving you valuable time and effort. It simplifies the project setup, allowing you to focus on building your web app.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
    ],
    image: quickstartdjango,
    source_code_link: "https://github.com/jaythorat/quickstart_django/",
    external_link: "https://pypi.org/project/quickstart-django/",
  },
];

export { services, technologies, experiences, testimonials, projects };


const social = [
  {
    title: "github",
    icon: githubNav,
  },
  {
    title: "linkedIn",
    icon: linkedInNav,
  },
  {
    title: "instagram",
    icon: instagramNav,
  },
];

export { social };
