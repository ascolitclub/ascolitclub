// lib/data.ts
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Members", href: "#members" },
  { name: "Events", href: "#events" },
  // { name: "Projects", href: "#projects" },
  { name: "Join", href: "#join" },
  { name: "Contact", href: "#contact" },
]

export const members = [
  {
    name: "Sandesh Khadka",
    position: "President",
    image: "/Sandesh.jpg",
    linkedin: "https://www.linkedin.com/in/sandeshkhadka/",
    github: "#",
  },
  {
    name: "Sandeep Shrestha",
    position: "Vice President",
    image: "/Sandeep.jpg",
    linkedin: "https://www.linkedin.com/in/sonseldeep/",
    github: "#",
  },
  {
    name: "Saroj Dhakal",
    position: "Secretary",
    image: "/Saroj.jpg",
    linkedin: "https://www.linkedin.com/in/sarojdhakal307/",
    github: "https://github.com/sarojdhakal307/",
  },
  {
    name: "Sijan Panta",
    position: "Advisor [FSU]",
    image: "/Sijan.jpg",
    linkedin: "https://www.linkedin.com/in/sijan-panta/",
    github: "#",
  },
  {
    name: "Sadhana Sigdel",
    position: "Incharge [FSU]",
    image: "/Sadhana.jpg",
    linkedin: "#",
    github: "#",
  },
    {
    name: "Kushal Dhakal",
    position: "Treasurer",
    image: "/Kushal.png",
    linkedin: "http://www.linkedin.com/in/kushal-dhakal",
    github: "https://github.com/Kushal216",
  },
  {
    name: "Shreejit Gautam",
    position: "Technical Lead",
    image: "/professional-male-student.png",
    linkedin: "#",
    github: "#",
  },

  {
    name: "Ajita Shrestha",
    position: "Event Head",
    image: "/professional-asian-student-portrait.png",
    linkedin: "#",
    github: "#",
  },
  {
    name: " Rishab Khakurel",
    position: "PR Manager",
    image: "/Rishab.jpg",
    linkedin: "http://www.linkedin.com/in/rishab-khakurel-437722267",
    github: "https://github.com/ascolitclub",
  },
  {
    name: "Susma Shrestha",
    position: "Social Media Manager",
    image: "/Susma.jpg",
    linkedin: "https://www.linkedin.com/in/sushma-shrestha-4948a3248",
    github: "https://github.com/ascolitclub",
  },
   {
    name: " Ritika Adhikari",
    position: "HR Manager",
    image: "/Ritika.jpg",
    linkedin: "https://www.linkedin.com/in/ritika-adhikari-99142a309/",
    github: "https://github.com/riti-0621",
  },
  {
    name: " Qnique Shrestha",
    position: "General Executive",
    image: "/Unique.JPG",
    linkedin: "https://www.linkedin.com/in/un1qu3/",
    github: "https://github.com/un1u3",
  },
  {
    name: " Roshan Shrestha",
    position: "General Executive",
    image: "/Roshan.jpg",
    linkedin: "https://www.linkedin.com/in/roshan-shrestha-2777a8343/",
    github: "https://github.com/Roshan-Shrestha-001",
  },
 
  {
    name: " Aayusha Adhikari",
    position: "General Executive",
    image: "/Aayusha.jpeg",
    linkedin: "https://www.linkedin.com/company/ascol-i-t-club",
    github: "https://github.com/ascolitclub",
  },
  {
    name: " Krish Shrestha",
    position: "General Executive",
    image: "/placeholder-fqxg8.png",
    linkedin: "#",
    github: "#",
  },

]

export const events = [
  {
  title: "Farewell for Past Members",
  date: "June 30, 2025",
  type: "Meetup",
  year: "2025",
  image: "/Farewell.jpg", 
  description:
    "A heartfelt farewell organized to honor the contributions of past club members. The event featured speeches, sharing of memories, and appreciation of efforts made throughout their journey.",
},
  {
    title: "Web Dev and Git workshop",
    date: "June 23–30, 2025",
    type: "Workshop",
    year: "2025",
    image: "/webworkshop.jpg",
    description: "A week-long hands-on workshop focused on web development fundamentals and using Git for version control. Participants built and deployed their own projects.",
  },
  {
    title: "Getting Involved in IT Community",
    date: "January 3, 2025",
    type: "Meetup",
    year: "2025",
    image: "/Getting-involved.jpg",
    description: "An introductory session for new students to learn about ASCOL IT Club, its goals, and how to actively participate and grow in the tech community.",
  },
  {
    title: "ASCOL Hackfest 2024",
    date: "September 15–17, 2024",
    type: "Hackathon",
    year: "2024",
    image: "/ascolhackfest.jpg",
    description: "ASCOL’s flagship 48-hour hackathon where teams built impactful tech solutions. The event featured mentoring, judging panels, and exciting prizes.",
  },
  {
    title: "First General Meetup",
    date: "July 19, 2024",
    type: "Meetup",
    year: "2024",
    image: "/generalmeetup.jpg",
    description: "A casual get-together for club members to connect, share ideas, and discuss upcoming events. Set the tone for a collaborative year ahead.",
  },
  {
    title: "Graphics Design Bootcamp",
    date: "June 9–13, 2024",
    type: "Workshop",
    year: "2024",
    image: "/Graphics-bootcamp.jpg",
    description: "An immersive bootcamp covering the basics of graphic design, tools like Adobe Illustrator and Canva, and creative thinking in digital media.",
  },
  {
    title: "Importance of Skills, Academics, and Networking in IT",
    date: "March 29, 2024",
    type: "Workshop",
    year: "2024",
    image: "Network.jpg",
    description: "An interactive session that emphasized the value of balancing technical skills, academic knowledge, and building a strong network for success in IT.",
  },
];


export const projects = [
  {
    title: "Campus Event Management System",
    description: "A comprehensive web application for managing college events, built with React and Node.js.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Student Grade Tracker",
    description: "Mobile app helping students track their academic progress with analytics and insights.",
    tech: ["React Native", "Firebase", "Chart.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Open Source Library Manager",
    description: "Digital library management system with book recommendations and user reviews.",
    tech: ["Python", "Django", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Study Assistant",
    description: "Machine learning powered study assistant that helps students with personalized learning paths.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "#",
    demo: "#",
  },
]

export const achievements = [
  {
  year: "2025",
  title: "LSPP and Fonepay Student Ambassador",
  description: "Produced impactful tech content and led student engagement activities as part of the Fonepay Student Ambassador and LSPP programs.",
  },
  {
  year: "2024",
  title: "Acknowledged by Campus and FSU",
  description: "Recognized by ASCOL administration and the Free Student Union for active contributions to tech initiatives and community involvement.",
},

  {
    year: "2024",
    title: "500+ Members",
    description: "Reached milestone of 500 active club members",
  },
  {
    year: "2023",
    title: "Club Established",
    description: "ASCOL IT Club officially founded with 10 founding members",
  },
]