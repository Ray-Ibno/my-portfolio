export const myProjects = [
  {
    id: 1,
    title: 'X clone',
    description:
      'A clone of X featuring authentication, real-time messaging, follow/unfollow, liking, commenting, and more.',
    subDescription: [
      'Built a scalable clone using the MERN stack.',
      'Implemented secure authentication using custom-built, stateless authentication system using JSON Web Tokens(JWT) and Bcrypt for secure user identity management.',
      'The frontend is built with Tailwind Css and DaisyUI to make it responsive and enhance User Experience(UX).',
      'Added a secure session management system using Redis to handle token rotation, bypassing expensive MongoDB lookups for session verification.',
    ],
    href: 'https://x-clone-5xkt.onrender.com',
    logo: '',
    image: '/assets/projects/x-clone.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/React.png',
      },
      {
        id: 2,
        name: 'Mongo DB',
        path: '/assets/logos/MongoDB.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/logos/Node.js.png',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/Express.png',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        path: '/assets/logos/Tailwind CSS.png',
      },
      {
        id: 6,
        name: 'Redis',
        path: '/assets/logos/Redis.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Netflix clone',
    description:
      'A clone that utilizes external api for searching actors, shows, movies, and watching trailers.',
    subDescription: [
      'Built using MERN stack',
      'Implemented secure authentication using custom-built, stateless authentication system using JSON Web Tokens(JWT) and Bcrypt for secure user identity management.',
      'The frontend is built with Tailwind Css and DaisyUI to make it responsive and enhance User Experience(UX).',
      'Implemented zod validation to ensure data is valid before it reaches the controllers',
    ],
    href: 'https://mern-netflix-clone-gofs.onrender.com',
    logo: '',
    image: '/assets/projects/netflix-clone.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/React.png',
      },
      {
        id: 2,
        name: 'Mongo DB',
        path: '/assets/logos/MongoDB.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/logos/Node.js.png',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/Express.png',
      },
      {
        id: 5,
        name: 'Tailwind CSS',
        path: '/assets/logos/Tailwind CSS.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Product manager',
    description: 'A small project for managing products with CRUD operations',
    subDescription: [
      'Built using MERN stack',
      'The frontend is built with Chakra UI for the components and Next-theme for the light/dark mode',
    ],
    href: 'https://product-manager-dkyy.onrender.com',
    logo: '',
    image: '/assets/projects/product-manager.png',
    tags: [
      {
        id: 1,
        name: 'React',
        path: '/assets/logos/React.png',
      },
      {
        id: 2,
        name: 'Mongo DB',
        path: '/assets/logos/MongoDB.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/logos/Node.js.png',
      },
      {
        id: 4,
        name: 'Express',
        path: '/assets/logos/Express.png',
      },
    ],
  },
]
