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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    portfolio,
    python,
    aws,
    django,
    cpp,
    jupyter,
    sklearn,
    mvr,
    businesslead,
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
      icon:linkedInNav,
      link:"https://www.linkedin.com/in/jaythorat/",
    },
    {
      id: "instagram",
      title: "Instagram",
      icon:instagramNav,
      link:"https://www.instagram.com/jaythorat10/",
    },
    {
      id: "github",
      title: "Github",
      icon:githubNav,
      link:"https://github.com/jaythorat",
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
      title: "Data Science Intern",
      company_name: "Plotmydata",
      icon: plotmydata,
      iconBg: "#383E56",
      date: "Jan 2022 - Mar 2022",
      points: [
        "Created ML model of Parkinsons Disease Prediction",
        "Created ML model of Fake News Detection",
        "Created ML model of Marks Prediction",
      ],
    },
    {
      title: "Data Analyst & Web Developer Intern",
      company_name: "Proceed Digital Pvt. Ltd",
      icon: proccedDigital,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Mar 2023",
      points: [
        "Full-stack web development",
        "Python packaging",
        "Data scraping and visualization",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "OOEF For Nashik District Tinkering Lab",
      icon: ooef,
      iconBg: "#383E56",
      date: "Mar 2023 - present",
      points: [
        "Developed Chatbot backend API",
        "Roled Out OPEN edX LMS platform",
        "Cloud Services and Instances management",
        "Basic implementation of Access Control & Rights Management using prolog",
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
      external_link:"",
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
      image: sample,
      source_code_link: "https://github.com/jaythorat/handwritten_char_recognization",
      external_link:"",
    },
    {
      name: "Business Lead Generation - Webscraping",
      description:
        "The business lead generation project utilizes web scraping and parallel processing techniques to swiftly gather valuable leads from various online sources. With parallel processing, it significantly boosts scraping speed, facilitating quicker and more efficient lead acquisition for businesses.",
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
      external_link:"",
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
      image: sample,
      source_code_link: "https://github.com/jaythorat/WebScraper-researchers-discovery-platform-",
      external_link:"",
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
      external_link:"https://portfolio.jaythorat.in",
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
      image: sample,
      source_code_link: "https://github.com/jaythorat/quickstart_django/",
      external_link:"https://pypi.org/project/quickstart-django/",
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
