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
import charity from '@/assets/charity.jpg';
import kroyo from '@/assets/kroyo.jpg';

gsap.registerPlugin(ScrollTrigger);

export type Category = 'Leadership' | 'Creative' | 'Programming' | 'Public Speaking';

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
}

// ============================================
// CATEGORY BUTTONS WITH IMAGES
// Replace these image paths with your own category icons
// ============================================
const categories: { name: Category; image: string }[] = [
  { name: 'Leadership', image: leadership },
  { name: 'Creative', image: creative },
  { name: 'Programming', image: programming },
  { name: 'Public Speaking', image: publicspeaking },
];

// ============================================
// CATEGORY IMAGES FOR CARDS
// These are the header images for each category's cards
// ============================================
const categoryImages: Record<Category, string> = {
  Leadership: leadership,
  Creative: creative,
  Programming: programming,
  'Public Speaking': publicspeaking,
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
    category: 'Leadership',
    title: 'SHCF Charity Event 2024',
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
  },

  {
    id: '2',
    category: 'Leadership',
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
  },

  {
    id: '3',
    category: 'Creative',
    title: 'Kroyokeanjes ITBJazz 2025',
    role: 'Head of Documentation',
    date: 'Sep 2025 – Feb 2026',
    location: 'Bandung, West Java, Indonesia',
    description: 'Led the multimedia documentation strategy for ITBJazz’s official regeneration and orientation program, ensuring high-quality media coverage for music workshops and organizational training.',
    responsibilities: [
      'Led a documentation team of 3 staff members, overseeing 95% of event activities from start to finish.',
      'Managed comprehensive media coverage for live band performances and large-scale music workshops.',
      'Streamlined digital asset management by organizing all visual content into a centralized database.',
      'Ensured high commitment to documentation standards for internal access and organizational reporting.',
    ],
    results: 'Produced a high-fidelity visual archive of the program and improved digital workflow for internal reporting.',
    image: kroyo,
  },
  
  // Programming Example
  {
    id: '99',
    category: 'Programming',
    title: 'Game Development Project',
    role: 'Game Designer/Developer',
    date: '2024',
    location: 'Academic Project',
    description: 'Developed an interactive game focusing on gameplay mechanics and user experience, applying software engineering principles.',
    responsibilities: [
      'Designed core gameplay mechanics and user flows',
      'Implemented object interaction systems',
      'Created game rules and difficulty balancing',
      'Developed using Unity game engine and C#',
    ],
    results: 'Achieved top marks and positive user feedback',
    image: categoryImages.Programming,
  },
  
  // Public Speaking Example
  {
    id: '100',
    category: 'Public Speaking',
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
    image: categoryImages['Public Speaking'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const [activeCategory, setActiveCategory] = useState<Category>('Leadership');
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
