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
                  { child:'React Router' },
                  { child:'Vite' },
                  { child: 'TailwindCSS' },
                  { child: 'EmailJS' },
                  { child: 'Motion' }
                ],
    features  : [
                  "Responsive Design",
                  "Lazy Loading",
                  "Modular File Structure",
                  "SEO Basic (Upgradable)",
                  "Deployment on Cloudflare Pages"
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
    desc      : `Not yet`,
    tags      : [
                  { child: 'React' },
                  { child: 'Vite' }, 
                  { child: 'TailwindCSS' }, 
                  { child: 'ExpressJs' },
                  { child: 'NodeJs' }, 
                  { child: 'MongoDB' }
                ],
    features  : [
                  "Not done yet"
                ],
    challenges: `Not done yet` 
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
    desc      : `Not yet`,
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
                  "Not done yet"
                ],
    challenges: `Not done yet` 
  },
]