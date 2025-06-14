export const ProjectData = [
  {
    key       : 'SCSVC',
    slug      : 'siichisei-vocal-course',
    title     : 'SiiChiSei Vocal Course',
    imgSrc    : '/assets/siichisei.webp',
    link      : 'https://siichisei-vocalcourse.pages.dev/',
    github    : '',
    briefDesc : `A Company Profile and Vocal Course Information website. Purposed to serve a vocal courses information, prioritized to give
                a clarity of the services to user.`,
    desc      : `A company profile website for SiiChiSei, an online vocal course provider. 
                It is designed to be responsive and user-friendly, prioritized the clarity of the services
                that can attract a prospective students of the subject. This website was made for
                my wife indie company that runs in vocal and singing things.`,
    tags      : [
                  { child: 'React Router' },
                  { child: 'Vite' },
                  { child: 'TailwindCSS' },
                  { child: 'EmailJS' },
                  { child: 'Motion' }
                ],
    features  : [
                  "💻 Responsive Design",
                  "🔎 Lazy Loading",
                  "📁 Modular File Structure",
                  "🌐 SEO Basic (Upgradable)",
                  "☁️ Deployment on Cloudflare Pages"
                ],
    challenges: `Handling responsive layout was so tricky, especially this is my first time
                made a website from scratch so first I make the components modular, reusable
                and maintainable. Using Mobile First method in adjusting UI is cutted the time so well
                when adjusting the responsiveness.` 
  },
  {
    key       : 'WCM',
    slug      : 'web-cafe-menu',
    title     : 'Web Cafe Menu (On Progress)',
    imgSrc    : '/assets/webcafe.webp',
    link      : '',
    github    : 'https://github.com/andi-ramadhan/web-cafe-menu',
    briefDesc : `Full-Stack Web Project, Cafe menu web based
                that serve a transparancy between customer and the menu order cycle.`,
    desc      : `This project is planned for measure my knowledge and skills in both side
                (Backend and Frontend). This Cafe web based menu purposed to serve customer
                with a seamlessly menu website with a comforting UI, provide a transparancy 
                between the order cycle.`,
    tags      : [
                  { child: 'React' },
                  { child: 'Vite' }, 
                  { child: 'TailwindCSS' }, 
                  { child: 'ExpressJs' },
                  { child: 'NodeJs' }, 
                  { child: 'MongoDB' }
                ],
    features  : [
                  "- These features below are the planned features -",
                  "💻 Responsive Design (prioritizing Mobile and Tablet)",
                  "🔎 Lazy Loading",
                  "🛒 Order Cart with Calculation",
                  "💳 Payment method option (Cash or Bank Transfer)",
                  "⏱️ Food preparation time monitor and estimation",
                  "☁️ Deployment on Cloudflare Worker & Pages"
                ],
    challenges: `It's really a big challenge that I must faced to measure my knowledge in Full-Stack Engineering.
                Choosing the architecture and file structure also a crucial thing that I must consider it carefully.
                So far it's work just to fetch the image from cloud and show it to end-user. I'll rewrite this text 
                after the major update of this project` 
  },
  {
    key       : 'OMA',
    slug      : 'openmusic-api',
    title     : 'OpenMusic API',
    imgSrc    : 'https://opengraph.githubassets.com/1/andi-ramadhan/openmusic-api',
    link      : '',
    github    : 'https://github.com/andi-ramadhan/openmusic-api',
    briefDesc : `A Restful API Music Library, provides security in creating a music library.
                User also can collaborate to make their music library together`,
    desc      : `OpenMusic API is a RESTful back-end service designed for managing music-related data, 
                including albums, songs, users, playlists, and social features. Built with Hapi.js, 
                it offers a modular architecture with robust features like JWT authentication, 
                Redis caching, and RabbitMQ-based asynchronous processing.`,
    tags      : [
                  { child: 'HapiJs' }, 
                  { child: 'PostgreSQL' }, 
                  { child: 'Redis' }, 
                  { child: 'RabbitMQ' },
                  { child: 'JWT' }, 
                  { child: 'Joi' }, 
                  { child: 'Bcrypt' }, 
                  { child: 'NodeJs' }
                ],
    features  : [
                  "➕ CRUD Services",
                  "🔎 Authorization & Authentication",
                  "📁 User, Album, Song, and Playlist Management",
                  "🌐 Users Collaboration",
                  "📈 Activity Tracking",
                  "🖼️ Album Cover",
                  "👍 Likes System",
                  "📤 Export Playlist"
                ],
    challenges: `It's been a challenging and thrilling exprience since this
                project is also a submission project for my BackEnd Intermediate
                scholarship. The most challenging things is when I need to integrate
                the Message Broker (RabbitMQ) with the initial service (CRUD), then
                I started to realize the architecture and then implement Consumer and
                Producer method, seperated the Message Broker Consumer and Producer so
                it can be delivered between those services when user going to export the
                playlist.`
  },
]