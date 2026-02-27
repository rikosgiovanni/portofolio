import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Trophy, ArrowUpRight } from 'lucide-react';
import ExperienceModal from '../components/ExperienceModal';

import leadership from '@/assets/cat-leadership.jpg';
import creative from '@/assets/cat-creative.jpg';
import programming from '@/assets/cat-programming.jpg';
import publicspeaking from '@/assets/cat-publicspeaking.jpg';

import shcf from '@/assets/shcf.jpg';
import shcf1 from '@/assets/shcf1.jpg';
import shcf3 from '@/assets/shcf3.jpg';

import charity from '@/assets/charity.jpg';
import charity1 from '@/assets/charity1.jpg';
import charity2 from '@/assets/charity2.jpg';
import charity3 from '@/assets/charity3.jpg';

import oskm  from '@/assets/oskm.jpg';
import oskm1 from '@/assets/oskm1.jpg';
import oskm2 from '@/assets/oskm2.jpg';
import oskm3 from '@/assets/oskm3.jpg';

import kroyo from '@/assets/kroyo.jpg';
import kroyo1 from '@/assets/kroyo1.jpg';
import kroyo2 from '@/assets/kroyo2.jpg';
import kroyo3 from '@/assets/kroyo3.jpg';


gsap.registerPlugin(ScrollTrigger);

export type Category = 'Impact & Leadership' | 'Creative Direction' | 'Tech & Systems' | 'Stage Presence';

export interface ExperienceCard {
  id: string;
  category: Category;
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
  responsibilities: string[];
  results: string;
  image: string;
  documentation?: {
    image: string;
    caption?: string;
    link?: string;
  }[];
}

// ============================================
// CATEGORY BUTTONS WITH IMAGES
// Replace these image paths with your own category icons
// ============================================
const categories: { name: Category; image: string }[] = [
  { name: 'Impact & Leadership', image: leadership },
  { name: 'Creative Direction', image: creative },
  { name: 'Tech & Systems', image: programming },
  { name: 'Stage Presence', image: publicspeaking },
];

// ============================================
// CATEGORY IMAGES FOR CARDS
// These are the header images for each category's cards
// ============================================
const categoryImages: Record<Category, string> = {
  'Impact & Leadership': leadership,
  'Creative Direction': creative,
  'Tech & Systems': programming,
  'Stage Presence': publicspeaking,
};

// ============================================
// EXPERIENCE DATA - EDIT THIS SECTION
// Add your CV experiences here following the template below
// ============================================
const experiences: ExperienceCard[] = [
  // ============================================
  // EXAMPLE CARD - Copy this template to add more
  // ============================================

    // id: '1',  // Unique ID (1, 2, 3, etc.)
    // category: 'Leadership',  // Must match one of the categories above
    // title: 'Your Event/Organization Name',  // Event or organization name
    // role: 'Your Role/Position',  // Your job title or role
    // date: '2024',  // Year or date range (e.g., "2023-2024" or "Jan 2024")
    // location: 'City, Country',  // Location
    // description: 'Write a brief description of what this experience was about. Keep it 2-3 sentences.',  // Short description
    // responsibilities: [  // List of things you did (bullet points)
    //   'First responsibility or task you performed',
    //   'Second responsibility or achievement',
    //   'Third responsibility or skill you used',
    //   'Fourth responsibility (optional)',
    // ],
    // results: 'Summarize the outcome or impact. What did you achieve?',  // Results/impact
    // image: categoryImages.Leadership,  // Use the category image automatically
  
  
  {
    id: '1',
    category: 'Impact & Leadership',
    title: 'Orientasi Studi Keluarga Mahasiswa ITB (OSKM ITB)',
    role: 'Mentor',
    date: 'Aug 2025 – Present',
    location: 'Bandung, West Java, Indonesia',
    description: 'Selected as an official mentor for ITB’s annual campus-wide orientation program, guiding 20 freshmen through academic, social, and personal transition into university life.',
    responsibilities: [
      'Facilitated structured integration of 20 mentees, acting as a long-term mentor, role model, and academic support partner.',
      'Applied active listening and psychology-informed communication strategies to address diverse personalities and challenges.',
      'Provided sustainable mentorship beyond the formal orientation period, supporting long-term student development and adaptation.',
    ],
    results: 'Fostered smooth academic-social adaptation and built a foundation for sustained peer mentorship relationships.',
    image: oskm,
    documentation: [
      {
        image: oskm1,
        link: "https://www.instagram.com/p/DN91AMPk4Ep/?img_index=1"
      },
      {
        image: oskm2,
        link: "https://www.instagram.com/p/DOP9hHAD_dZ/?img_index=1"
      },
      {
        image: oskm3,
        link: "https://youtu.be/SIt1n3cmPyw?si=Dbf-hg_jNMD7lHCP"
      }
    ], 
  },

  {
    id: '2',
    category: 'Impact & Leadership',
    title: 'Kroyokeanjes ITBJazz 2025',
    role: 'Head of Documentation',
    date: 'Sep 2025 – Feb 2026',
    location: 'Bandung, West Java, Indonesia',
    description: 'Led the end-to-end documentation strategy for ITBJazz’s official regeneration and orientation program, ensuring structured visual storytelling aligned with the organization’s branding and long-term archival objectives.',
    responsibilities: [
      'Directed and supervised a documentation team of 3 members, ensuring operational discipline and full event coverage.',
      'Defined documentation objectives to support organizational reporting, branding, and future promotional materials.',
      'Coordinated cross-division workflows to guarantee synchronized media capture during workshops.',
      'Established a centralized digital asset system to improve efficiency and long-term accessibility.',
    ],
    results: 'Delivered a structured visual archive that strengthened organizational branding and improved internal digital workflows.',
    image: kroyo,
    documentation: [
      {
        image: kroyo1,
        link: "https://www.instagram.com/p/DRBySYmEuPQ/?img_index=6"
      },
      {
        image: kroyo2,
        link: "https://www.instagram.com/p/DVIV0SeEslI/?img_index=2"
      },
      {
        image: kroyo3,
      }
    ], 
  },

  {
    id: '3',
    category: 'Impact & Leadership',
    title: 'SHCF — Charity Event 2024',
    role: 'Project Leader',
    date: 'Mar 2024 – May 2024',
    location: 'Surakarta, Central Java, Indonesia',
    description: 'Spearheaded a regional-scale charity initiative for Misi Nusantara Orphanage, uniting Christian student representatives from all public high schools in Surakarta to deliver social impact.',
    responsibilities: [
      'Led a cross-functional committee of 27 members across 5 divisions, coordinating between multiple public high schools.',
      'Directed end-to-end operations, from concept development and fundraising to on-site execution and evaluation.',
      'Managed and allocated a Rp3.4+ million budget with strict financial accountability and integrity.',
      'Collaborated with the Christian Education Teachers’ Forum (MGMP PAK) to secure external partnerships and funding.',
    ],
    results: 'Achieved 100% execution of planned activities on schedule, providing direct support and resources to Misi Nusantara Orphanage.',
    image: charity,
    documentation: [
      {
        image: charity1,
        link: "https://www.instagram.com/p/C9EW7BKyPZK/?img_index=2"
      },
      {
        image: charity2,
        link: "https://www.instagram.com/p/C9EYLq2yOt6/"
      },
      {
        image: charity3,
        link: "https://www.instagram.com/p/C9EZJkdShTZ/?img_index=1"
      }
    ]
  },

  {
    id: '4',
    category: 'Impact & Leadership',
    title: 'Surakarta Highschool Christian Forum (SHCF)',
    role: 'Treasurer',
    date: 'July 2023 – July 2024',
    location: 'Surakarta, Central Java, Indonesia',
    description: 'Served as a core board member for a city-wide forum uniting Christian student representatives from all public high schools in Surakarta, overseen by the MGMP PAK.',
    responsibilities: [
      'Managed and stewarded regional funds of Rp7,000,000 with 100% data accuracy and zero discrepancies.',
      'Maintained rigorous bookkeeping for all city-scale joint worship services and multi-school competitions.',
      'Directed financial planning and resource allocation to ensure operational discipline across regional programs.',
      'Facilitated a seamless organizational transition through final audits and asset handovers to the succeeding board.',
    ],
    results: 'Established a foundation of financial transparency and accountability for the second generation of the city-wide forum.',    
    image: shcf,
    documentation: [
      {
        image: shcf3,
        link: "https://www.instagram.com/p/CybUL4avelA/"
      },
      {
        image: shcf1,
        link: "https://www.instagram.com/p/Cu6SNbBv5gl/?img_index=2"
      }
    ]
  },
  
  {
    id: '5',
    category: 'Impact & Leadership',
    title: 'SMA Negeri 1 Surakarta — Christian Religious Unit (Rohkris)',
    role: 'President',
    date: 'Dec 2022 – Dec 2023',
    location: 'Surakarta, Central Java, Indonesia',
    description: 'Elected President of the Christian Religious Unit (Rohkris), leading organizational strategy, program execution, and cross-functional coordination to strengthen student engagement and institutional collaboration.',
    responsibilities: [
      'Oversaw and supervised 10+ internal divisions throughout a one-year executive tenure, ensuring structured execution of all programs and initiatives.',
      'Served as Project Leader for the School’s Christmas Event, directing 40+ committee members across 8 divisions and achieving 90% attendance from Christian and Catholic students.',
      'Acted as Vice Project Leader for Easter and Regeneration Services, focusing on operational logistics and leadership transition sustainability.',
      'Represented the organization in the Surakarta Highschool Christian Forum (SHCF), acting as the primary liaison between students and faculty members to foster inter-school collaboration.',
    ],
    results: 'Strengthened organizational governance, increased program participation, and established structured leadership continuity within the unit.',
    image: categoryImages['Impact & Leadership'],
  },

  {
    id: '6',
    category: 'Impact & Leadership',
    title: 'SMA Negeri 1 Surakarta — School Band Unit (SLIME)',
    role: 'President',
    date: 'Sep 2022 – Sep 2023',
    location: 'Surakarta, Central Java, Indonesia',
    description: 'Elected President of the SLIME School Band Unit, overseeing strategic direction, performance operations, and cross-functional coordination to elevate musical standards and organizational cohesion.',
    responsibilities: [
      'Led and mentored a music ensemble of 15+ members, fostering structured collaboration and continuous skill development.',
      'Served as Project Leader for the Music Unit’s Gathering Night (Choir & Band), coordinating 35+ participants to strengthen cross-organizational synergy.',
      'Managed all official school performance bookings, rehearsal schedules, and stakeholder communications to ensure seamless event execution.',
      'Supervised maintenance and allocation of musical equipment, ensuring technical readiness and consistent sound quality for live performances.',
    ],
    results: 'Enhanced performance reliability, strengthened team cohesion, and improved operational efficiency for school-wide music productions.',
    image: categoryImages['Impact & Leadership'],
  },

  {
    id: '7',
    category: 'Creative Direction',
    title: 'ITBJazz',
    role: 'Documentation Staff',
    date: 'Feb 2025 – Present',
    location: 'Bandung, West Java, Indonesia',
    description: 'Contributing to ITBJazz’s media and documentation team by producing high-quality visual content to strengthen the organization’s digital presence and archival assets.',
    responsibilities: [
      'Produced and edited the official aftermovie for Jazz Aula Timur, ensuring cohesive visual storytelling aligned with the organization’s branding.',
      'Created and directed music video cover productions for the ITBJazz YouTube channel.',
      'Managed structured documentation of performances and events to support long-term digital archiving.',
      'Collaborated with performers and creative teams to align artistic output with media strategy.',
    ],
    results: 'Generated 5,000+ views on a featured music video cover, ranking among the channel’s top-performing content and significantly increasing audience engagement.',
    image: categoryImages['Creative Direction'],
  },

  {
    id: '8',
    category: 'Creative Direction',
    title: 'EXPO TOGA',
    role: 'Documentation Staff',
    date: 'Nov 2025 – Feb 2026',
    location: 'Surakarta, Central Java, Indonesia',
    description: 'Contributed to the documentation and media coordination of a high-traffic educational expo featuring leading Indonesian universities (UI, UGM, ITB), ensuring structured visual storytelling across main events and regional roadshows.',
    responsibilities: [
      'Captured comprehensive visual coverage for university presentations, talk shows, and exam simulation sessions.',
      'Participated in the “Goes to School” promotional roadshows across Surakarta to expand outreach impact.',
      'Collaborated within a cross-university team of 11 members to maintain synchronized media documentation.',
      'Developed and maintained a systematic digital archive of event assets to support official reporting and institutional publications.',
    ],
    results: 'Delivered structured media assets that enhanced promotional reach and enabled efficient post-event documentation workflows.',
    image: categoryImages['Creative Direction'],
  },

  {
    id: '9',
    category: 'Creative Direction',
    title: 'Himpunan Mahasiswa Informatika ITB (HMIF ITB)',
    role: 'Creative & Branding Intern – Media & Information Division',
    date: 'Sep 2025 – Present',
    location: 'Bandung, West Java, Indonesia',
    description: 'Contributing to HMIF ITB’s Media & Information Division by managing visual identity, branding consistency, and structured documentation systems across major organizational events.',
    responsibilities: [
      'Managed and maintained the organization’s visual identity across digital platforms to ensure brand consistency.',
      'Appointed as Head of Publication & Documentation (PDD) for the Batch Leader Election, overseeing media planning and execution.',
      'Served as documentation staff for large-scale events such as Dies Natalis, ensuring high-quality visual coverage.',
      'Organized and systematized digital media assets to support official publications and long-term archival needs.',
    ],
    results: 'Strengthened HMIF’s digital presence and improved documentation workflow efficiency for institutional reporting.',
    image: categoryImages['Creative Direction'],
  },

  {
    id: '10',
    category: 'Creative Direction',
    title: 'IMPACT ITB 5.0',
    role: 'Documentation & Publication Staff',
    date: 'Mar 2025 – Jul 2025',
    location: 'Bandung, West Java, Indonesia',
    description: 'Contracted as Documentation & Publication Staff for IMPACT ITB 5.0, contributing to structured visual coverage and media asset management for a large-scale competition and awarding night.',
    responsibilities: [
      'Executed comprehensive documentation for competition rounds and awarding ceremonies, ensuring complete event coverage.',
      'Delivered curated media assets to organizers and participants in a timely and structured manner.',
      'Organized and maintained digital archives to support official reporting and post-event publications.',
    ],
    results: 'Ensured seamless media distribution and established an organized digital asset workflow for long-term documentation needs.',
    image: categoryImages['Creative Direction'],
  },

  {
    id: '11',
    category: 'Creative Direction',
    title: 'Sekolah Teknik Elektro dan Informatika – Komputasi (STEI-K) ITB 2024',
    role: 'Documentation Staff',
    date: 'Nov 2024 – Jun 2025',
    location: 'Bandung, West Java, Indonesia',
    description: 'Served as Documentation Staff for STEI-K ITB 2024, contributing to structured media production and official communication materials for cohort programs and faculty-level events.',
    responsibilities: [
      'Documented academic cohort programs and faculty events to ensure comprehensive visual coverage.',
      'Produced and curated media assets for official announcements and institutional communications.',
      'Maintained organized digital archives to support reporting and long-term documentation needs.',
    ],
    results: 'Recognized as Best Staff of the Month (Feb 2025) for outstanding contributions to documentation quality and digital content production.',
    image: categoryImages['Creative Direction'],
  },


  // Programming Example
  {
    id: '12',
    category: 'Tech & Systems',
    title: 'Google Developer Groups on Campus ITB (GDGoC ITB)',
    role: 'Explorer',
    date: 'Jun 2025 – Present',
    location: 'Bandung, West Java, Indonesia',
    description: 'Active member of GDGoC ITB, engaging in structured technical workshops and community-driven sessions focused on Artificial Intelligence and Google technologies to strengthen real-world technical readiness.',
    responsibilities: [
      'Participated in hands-on AI and Google technology workshops involving curated problem sets and practical implementation exercises.',
      'Collaborated in peer-learning sessions and offline meetups to exchange insights on global opportunities, including scholarships and internships.',
      'Expanded technical exposure to applied AI concepts, tools, and ecosystem best practices.',
    ],
    results: 'Strengthened applied AI understanding and expanded professional network within a globally connected developer community.',
    image: categoryImages['Tech & Systems'],
  },

  {
    id: '90',
    category: 'Tech & Systems',
    title: 'Academic Project — CLI Cooking Simulation Game (Nimonscooked)',
    role: 'Game Developer (Team of 4)',
    date: 'Nov 2025 – Dec 2025',
    location: 'Bandung, West Java, Indonesia',
    description: 'Collaboratively developed Nimonscooked, a CLI-based cooking simulation game in Java using Object-Oriented Programming (OOP), within a 4-member development team. Contributed to modular system architecture and structured gameplay engine design.',
    responsibilities: [
      'Co-designed core domain and engine classes (OrderManager, Order, Recipe, Dish) with validation logic and custom exception handling.',
      'Implemented OOP principles including inheritance, polymorphism, abstraction, generics, and concurrency to simulate parallel kitchen processes.',
      'Developed gameplay mechanics (Dash, Throw Ingredient), structured CLI menu navigation, and state-based progression control.',
      'Collaborated on audio integration (BGM & sound effects) and technical documentation to ensure maintainability and extensibility.',
    ],
    results: 'Achieved a final project score above 97/100, recognized for architectural robustness, clean modular design, and effective team collaboration.',
    image: categoryImages['Tech & Systems'],
  },

  {
    id: '91',
    category: 'Tech & Systems',
    title: 'Academic Project — Nimons Hospital Management System',
    role: 'System Developer (Team of 6)',
    date: 'Apr 2025 – May 2025',
    location: 'Bandung, West Java, Indonesia',
    description: 'Collaboratively developed a modular CLI-based Hospital Management System in C within a 6-member team, focusing on spatial room mapping (Denah module) and command-driven menu architecture.',
    responsibilities: [
      'Designed and implemented the Denah module using matrix-based spatial modeling for hospital room allocation and interaction.',
      'Developed structured CLI menu system with command parsing, help interface, and role-based navigation flow.',
      'Maintained modular separation between header (.h) and source (.c) files to ensure extensibility and maintainability.',
      'Integrated validation and error handling mechanisms to preserve system consistency across user roles.',
    ],
    results: 'Delivered stable denah visualization and interactive command architecture as part of a fully functional multi-module hospital management system.',
    image: categoryImages['Tech & Systems'],
  },
  
  // Public Speaking Example
  {
    id: '99',
    category: 'Stage Presence',
    title: 'Bandwidth — Local Band',
    role: 'Vocalist',
    date: 'April 2025 - Present',
    location: 'Bandung, West Java, Indonesia',
    description: 'Active vocalist in Bandwidth, a local band ensemble consisting of 8 musicians and 1 band manager, performing across major campus and public events.',
    responsibilities: [
      'Performed in large-scale events including OSKM ITB 2025, AMI 2025, ITB MUN 2025, and multiple institutional ceremonies.',
      'Collaborated within an 8-member band setup to deliver cohesive live performances.',
      'Invited alongside a STEI ITB lecturer to perform at The Papandayan Jazz, collaborating with faculty musicians in a professional jazz setting.',
      'Maintained performance quality through structured rehearsals and cross-team musical coordination.',
    ],
    results: 'Strengthened stage confidence and expanded exposure through high-visibility institutional and public performances.',
    image: categoryImages['Stage Presence'],
  }, 

  {
    id: '100',
    category: 'Stage Presence',
    title: 'Jazz Aula Timur 2025',
    role: 'Jazz Vocalist — ITBJazz',
    date: 'May 2025',
    location: 'Bandung, West Java, Indonesia',
    description: 'Performed as part of ITBJazz in Jazz Aula Timur 2025, contributing to a collaborative live jazz production featuring emerging and professional musicians.',
    responsibilities: [
      'Collaborated with 7 fellow performers within a unified band arrangement.',
      'Delivered live vocal performance in a structured concert environment.',
      'Shared stage presence in the same event lineup as Teddy Adhitya.',
    ],
    results: 'Demonstrated collaborative musicianship and strengthened live-stage adaptability in a multi-performer jazz environment.',
    image: categoryImages['Stage Presence'],
  },

  {
    id: '101',
    category: 'Stage Presence',
    title: 'The 48th Jazz Goes To Campus 2025',
    role: 'Jazz Vocalist — ITBJazz',
    date: 'November 2025',
    location: 'Universitas Indonesia, Depok',
    description: 'Represented ITBJazz in one of Indonesia’s largest jazz festivals, performing before a national-scale audience and introducing the ITB music unit on a prestigious stage.',
    responsibilities: [
      'Collaborated with 2 fellow vocalists, 5 instrumentalists, and 3 band managers to deliver a coordinated live performance.',
      'Performed in a major jazz festival lineup alongside nationally renowned artists such as Tulus, Raisa, Tompi, Maliq & D’Essentials, Reality Club, and others.',
      'Delivered public introduction of ITBJazz to a large-scale audience, strengthening institutional visibility.',
      'Maintained professional stage conduct in a high-pressure festival setting.',
    ],
    results: 'Received JGTC Appreciates — Most Dedicated Award, recognizing commitment, professionalism, and performance contribution at a national-level festival.',
    image: categoryImages['Stage Presence'],
  },

  {
    id: '102',
    category: 'Stage Presence',
    title: 'Jazz Aula Barat 2025',
    role: 'Jazz Vocalist — ITBJazz',
    date: 'November 2025',
    location: 'Bandung, West Java, Indonesia',
    description: 'Performed in Jazz Aula Barat 2025, a large-scale jazz concert featuring prominent national musicians and diverse guest audiences.',
    responsibilities: [
      'Collaborated with 10 fellow musicians in a structured big-band performance format.',
      'Shared performance space in a lineup that included notable artists such as Sandy Sandoro.',
      'Engaged a diverse audience base, including invited guests and external attendees.',
      'Adapted vocal dynamics and stage interaction to suit large concert hall acoustics and live arrangements.',
    ],
    results: 'Strengthened large-ensemble coordination skills and elevated stage professionalism in a high-profile jazz concert setting.',
    image: categoryImages['Stage Presence'],
  },

  {
    id: '123',
    category: 'Stage Presence',
    title: 'English Competitions',
    role: 'Gold, Silver & Bronze Medalist',
    date: '2021-2023',
    location: 'Various Competitions',
    description: 'Active participant and award winner in multiple prestigious English competitions, demonstrating strong communication skills.',
    responsibilities: [
      'AKSI 2023 - Gold Medalist in Speech Category',
      'ISSC 2022 - Silver Medalist in Debate',
      'Insight Sinta 2021 - Bronze Medalist',
      'Represented school at national level competitions',
    ],
    results: '3 medals across 3 major competitions in 3 years',
    image: categoryImages['Stage Presence'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const [activeCategory, setActiveCategory] = useState<Category>('Impact & Leadership');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredExperiences = experiences.filter(
    (exp) => exp.category === activeCategory
  );

  const handleCategoryChange = (category: Category) => {
    if (category === activeCategory || isAnimating) return;
    
    setIsAnimating(true);
    
    gsap.to(gridRef.current?.children || [], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        setActiveCategory(category);
        gsap.fromTo(
          gridRef.current?.children || [],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  const openModal = (experience: ExperienceCard) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(buttonsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(gridRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="experience"
        ref={sectionRef}
        className="relative min-h-screen w-full py-24 lg:py-32"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-white to-offwhite" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div ref={headingRef} className="text-center mb-16 opacity-0">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-charcoal/20" />
              <span className="text-caption uppercase tracking-widest text-charcoal/50">Portfolio</span>
              <div className="w-12 h-px bg-charcoal/20" />
            </div>
            <h2 className="text-headline text-charcoal mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-body text-charcoal/60 max-w-2xl mx-auto">
              Explore my journey across different domains. Click on any card to see the full story.
            </p>
          </div>

          {/* Category Buttons with Images */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`group relative flex items-center gap-2.5 px-5 py-3 rounded-2xl border-2 transition-all duration-500 ease-apple overflow-hidden ${
                    isActive
                      ? 'border-charcoal bg-charcoal text-white shadow-apple-lg'
                      : 'border-charcoal/10 bg-white text-charcoal/70 hover:border-charcoal/30 hover:bg-offwhite'
                  }`}
                >
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className={`w-6 h-6 rounded-md object-cover transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                  <span className="text-sm font-semibold">{category.name}</span>
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Experience Cards Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => openModal(exp)}
                className="group relative bg-white rounded-3xl border border-charcoal/8 overflow-hidden cursor-pointer card-hover"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-charcoal">
                      {exp.category}
                    </span>
                  </div>

                  {/* View More Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-charcoal" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & Role */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-charcoal mb-1 group-hover:text-blue-600 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-charcoal/60">{exp.role}</p>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-caption text-charcoal/50">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-caption text-charcoal/50">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description - Truncated */}
                  <p className="text-sm text-charcoal/60 line-clamp-2 mb-4">
                    {exp.description}
                  </p>

                  {/* Results Preview */}
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                    <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-charcoal/70 line-clamp-1">{exp.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredExperiences.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body text-charcoal/50">No experiences in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
