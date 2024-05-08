import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

// import Work1 from './assets/project-1.jpeg';
// import Work2 from './assets/project-2.jpg';
// import Work3 from './assets/project-3.jpeg';
// import Work4 from './assets/project-4.jpeg';
// import Work5 from './assets/project-5.jpg';
// import Work6 from './assets/project-6.jpg';
import Work1 from './assets/speech-to-text.png';
import Work2 from'./assets/movix.png';
import Work3 from './assets/weather.png';
import Work4 from './assets/a-clock.png';
import Work5 from './assets/nexMarket.png';
import Work6 from './assets/convoConnect.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Dakshita',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Jain',
  },

  {
    id: 3,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 4,
    title: 'MERN Stack developer : ',
    description: 'Available',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Gwalior',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+91 7089645285',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'dakshitaj63@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

// export const stats = [
//   {
//     id: 1,
//     no: '12+',
//     title: 'Years of <br /> Experience',
//   },

//   {
//     id: 2,
//     no: '97+',
//     title: 'Completed <br /> Projects',
//   },

//   {
//     id: 3,
//     no: '81+',
//     title: 'Happy <br /> Customers',
//   },

//   {
//     id: 4,
//     no: '53+',
//     title: ' Awards <br /> Won',
//   },
// ];

export const resume = [

  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-2025',
    title: 'Bachelor degree <span> IPS college of Technology and Management, Gwalior </span>',
    desc: 'Present CGPA: 8.04',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Senior Secondary <span> Sant Kanwar Ram School </span>',
    desc: 'Passed with 95% in 12th class',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'High School <span> Sant Kanwar Ram School </span>',
    desc: 'Passed with 95% in 10th class',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '90',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '95',
  },

  {
    id: 4,
    title: 'MongoDB',
    percentage: '70',
  },

  {
    id: 5,
    title: 'ExpressJs',
    percentage: '80',
  },

  {
    id: 6,
    title: 'ReactJs',
    percentage: '90',
  },

  {
    id: 7,
    title: 'NodeJs',
    percentage: '80',
  },
  
  
  {
    id: 8,
    title: 'Docker',
    percentage: '70',
  },
  {
    id: 9,
    title: 'SCSS',
    percentage: '80',
  },
  {
    id: 10,
    title: 'TailwindCSS',
    percentage: '70',
  },
  {
    id: 10,
    title: 'Bootstrap',
    percentage: '70',
  },
  {
    id: 9,
    title: 'C++',
    percentage: '95',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work5,
    title: 'NexMarket',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, NodeJs, ExpressJs, MongoDB, TailwindCSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://nex-market-frontend.vercel.app/',
      },
    ],
  },
  {
    id: 2,
    img: Work6,
    title: 'ConvoConnect',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, NodeJs, ExpressJs, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/DakshitaJain0212/ConvoConnect-client',
      },
    ],
  },
  {
    id: 3,
    img: Work2,
    title: 'Movix',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://movix-ten-virid.vercel.app/',
      },
    ],
  },
  {
    id: 4,
    img: Work1,
    title: 'Speech to Text Convertor',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://text-speech-convertor.vercel.app/',
      },
    ],
  },
  {
    id: 5,
    img: Work3,
    title: 'Weather Forecaster',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://weather-forecaster-nu.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work4,
    title: 'A-Clock',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web page',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://a-clock-tau.vercel.app/',
      },
    ],
  },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
